import React from 'react'
import { Form } from 'react-router-dom'

export default function Profile({data, handleChange}) {
  return (
    <div>
      <h2>Profile</h2>
      <label>Name: </label>
      <input type='text' name='name' value={data.name} onChange={handleChange}></input>
      <label>Age: </label>
      <input type='number' name='age' value={data.age} onChange={handleChange}></input>
    </div>
  )
}
