import React from 'react'
import { Form, Label, Submit, TextField, useForm } from '@redwoodjs/forms'

export const TodoForm = ({ onSubmit, defaultState, isEdit, formMethods }) => {
  return (
    <Form
      className="m-auto mt-12 flex w-1/3 flex-col justify-center rounded-md bg-emerald-100 p-3"
      onSubmit={onSubmit}
      formMethods={formMethods}
    >
      <Label
        name="name"
        className="w-full p-3 text-center text-3xl font-bold"
        errorClassName="rw-label rw-label-error"
      >
        Todo App
      </Label>
      <div className='flex flex-row'>
        <TextField
          name="name"
          defaultValue={defaultState}
          className="mr-3 py-2 w-4/5 rounded-md bg-gray-50 border-orange-900 border-2 px-4"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <button className="bg-orange-300 font-medium text-md px-4 rounded-md">{!isEdit ? 'Add' : 'Edit'}</button>
      </div>
    </Form>
  )
}
