export const schema = gql`
  type Todo {
    id: Int!
    name: String
  }

  type Query {
    todos: [Todo!]! @skipAuth
    todo(id: Int!): Todo @skipAuth
  }

  input CreateTodoInput {
    name: String
  }

  input UpdateTodoInput {
    name: String
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo! @skipAuth
    updateTodo(id: Int!, input: UpdateTodoInput!): Todo! @skipAuth
    deleteTodo(id: Int!): Todo! @skipAuth
  }
`
