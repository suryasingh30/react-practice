import React from 'react'

export default function Interest({data, handleChange}) {
  return (
    <div>
      <h2>Interest</h2>
      <label>Notification</label>
      <input type='text' name='notification' value={data.notification} onChange={handleChange}></input>
    </div>
  )
}
