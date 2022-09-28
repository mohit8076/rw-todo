import { render } from '@redwoodjs/testing/web'

import TodoForm from './TodoForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TodoForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodoForm />)
    }).not.toThrow()
  })
})
