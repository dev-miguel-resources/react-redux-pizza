import { useState } from 'react'
import Button from '../Button/Button'

// falta lógica asociada
const CreateUser = () => {
  function handleSubmit(e) {
    //
  }

  return (
    <form>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        Welcome!. Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={''}
        onChange={() => {}}
        className="input mb-8 w-72"
      />
    </form>
  )
}

export default CreateUser
