// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Todo> = (args) => {
//   return <Todo {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Todo from './Todo'

export const generated = () => {
  return <Todo />
}

export default {
  title: 'Components/Todo',
  component: Todo,
} as ComponentMeta<typeof Todo>
