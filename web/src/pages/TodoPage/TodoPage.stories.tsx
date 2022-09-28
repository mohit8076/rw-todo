import type { ComponentMeta } from '@storybook/react'

import TodoPage from './TodoPage'

export const generated = () => {
  return <TodoPage />
}

export default {
  title: 'Pages/TodoPage',
  component: TodoPage,
} as ComponentMeta<typeof TodoPage>
