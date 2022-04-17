import React, { useState } from 'react'

const TaskInput = ({ addTask, delInput, editId, editTask, editText}) => {
    let text = editText !== '' ? editText : 'Введите задачу...'
  const [taskInput, setTaskInput] = useState('')

  const handleChange = (e) => {
    setTaskInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editId !== '') {
      editTask(editId, taskInput)
    } else {
      addTask(taskInput)
    }
    delInput()
    setTaskInput('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="task-input"
        value={taskInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder={text}
      />
      <button className="task-button">Сохранить</button>
    </form>
  )
}

export default TaskInput
