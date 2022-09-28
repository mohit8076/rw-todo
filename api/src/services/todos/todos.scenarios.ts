import type { Prisma, Todo } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TodoCreateArgs>({
  todo: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<Todo, 'todo'>
