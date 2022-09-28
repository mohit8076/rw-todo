import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/dist/toast"
import { QUERY as TodoQuery } from 'src/components/TodosCell'
import {useForm
} from '@redwoodjs/forms'
import {UpdateTodo,UpdateTodoVariables } from 'types/graphql'
import { useState } from "react"
import TodoPage from "src/pages/TodoPage/TodoPage"


const UPDATE_TODO = gql`
mutation UpdateTodo($id: Int!, $input: UpdateTodoInput!){
  updateTodo(id: $id, input: $input){
    id,
    name
  }
}`


const Todo = ({todo}) => {
  const[edit,setEdit] = useState()
  const[data,setData] = useState(false)
  const form = useForm()

  const [update] = useMutation<UpdateTodo, UpdateTodoVariables>(
    UPDATE_TODO,
    {
      onCompleted: () => {
        toast.success('Todo updated')
        form.reset()
      },
      refetchQueries: [{ query: TodoQuery }],
    }
  )

const handleEdit = (todo) =>{
  console.log('idsssssssssssssssss',todo)
  setEdit(todo)
  setData(true)
}
console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTt",todo.name)
  return (
    <div>
      <h1>{todo.name}</h1>

      <button onClick={()=> handleEdit(todo)}>Edit</button>
      <button>Delete</button>
      {/* <TodoPage edit={edit} data={data} update={update} setData={setData}/> */}
    </div>
  )
}

export default Todo
