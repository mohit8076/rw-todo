import { useForm } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import TodosCell from 'src/components/TodosCell'
import { QUERY as refetchTodosQuery } from 'src/components/TodosCell'
import { Toaster } from '@redwoodjs/web/toast'
import { toast } from '@redwoodjs/web/toast'
import { useState } from 'react'
import { TodoForm } from 'src/components/TodoForm/TodoForm'
import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'


const CREATE_TODO = gql`
  mutation CreateTodoMutation($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
    }
  }
`

const UPDATE_TODO = gql`
  mutation UpdateTodoMutation($id: Int!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      name
    }
  }
`

const DELETE_TODO = gql`
  mutation DeleteTodoMutation($id:Int!){
    deleteTodo(id:$id) {
      id
    }
  }
`

const TodosPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const formMethods = useForm()
  const [todoState, setTodoState] = useState({id:'', name:''});
  const [isEdit, setIsEdit] = useState(false);
  const [create, { loading } ] = useMutation(CREATE_TODO, {refetchQueries: [{ query: refetchTodosQuery}], onCompleted: () => {
    // console.log('done');
    toast.success('Item added')
    formMethods.reset()
  }} )
  const [deleteTodo] = useMutation(DELETE_TODO, {refetchQueries: [{ query: refetchTodosQuery}],
    onCompleted: () => {
      toast.success('Item deleted')
    }
  })

  const [updateTodo] = useMutation(UPDATE_TODO, {
    onCompleted: () => {
      toast.success('Item updated')
      formMethods.reset()
    }
  })

  const onSubmit = (data) => {
    console.log('dats is:', data)
    create({ variables: { input: data }})
    setTodoState({id:'',name:''})
  }

  const onClick = (input) => {
    console.log('to be updated', todoState.id, todoState, input);
    updateTodo({ variables: { id: todoState.id, input }})
    setIsEdit(false)
    setTodoState({id:'',name:''})
  }

  const onDelete = (id) =>{
    deleteTodo({variables:{id}})
  }

  const backHome = () => {
    logOut()
    navigate(routes.home())
    console.log(!isAuthenticated)

  }
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {isAuthenticated ? (
            <div>
              <button className='px-5 py-2 ml-2 mt-4 bg-red-200 rounded-md font-semibold' type="button" onClick={backHome}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.home()}>Login</Link>
          )}
      <Toaster/>
      <div>
        <TodoForm onSubmit={!isEdit ? onSubmit : onClick} defaultState={todoState.name} isEdit={isEdit} formMethods={formMethods}/>
      </div>
      <TodosCell setTodoState={setTodoState} setIsEdit={setIsEdit} onDelete={onDelete}/>
    </>
  )
}

export default TodosPage