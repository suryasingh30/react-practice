import React from 'react'

export default function Setting({data, handleChange}) {
  return (
    <div>
      <h2>Settings</h2>
      <label>verify</label>
      <input type='text' name='verify' value={data.verify} onChange={handleChange}></input>
    </div>
  )
}
