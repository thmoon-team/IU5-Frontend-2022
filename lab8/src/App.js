import React, { useState } from 'react'
import ButtonAdd from './components/ButtonAdd'
import Navbar from './components/Navbar'
import Task from './components/Task'
import TaskInput from './components/taskInput'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputTask, setInputTask] = useState([])

  const editTask = (id, editInput = '') => {
    setTasks([
      ...tasks.map((task) => {
        if (task.id === id) {
          if (editInput !== '') {
            return { ...task, edit: !task.edit, taskText: editInput }
          }
          return { ...task, edit: !task.edit }
        }
        return { ...task }
      }),
    ])
  }
  const completeTask = (id) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : { ...task },
      ),
    ])
  }
  const addInput = () => {
    setInputTask([1])
  }
  const addTask = (taskInput) => {
    if (taskInput) {
      const newTask = {
        id: (Math.random() + 1).toString(36).substring(2),
        taskText: taskInput,
        checked: false,
        edit: false,
      }
      setTasks([...tasks, newTask])
    }
  }

  const delInput = () => {
    setInputTask([])
  }

  const removeTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  }

  return (
    <div>
      <Navbar />
      <div className="main-content">
        {tasks.map((task) => {
          if (task.edit) {
            return (
              <TaskInput
                addTask={addTask}
                delInput={delInput}
                editId={task.id}
                editTask={editTask}
                editText={task.taskText}
              />
            )
          }
          return (
            <Task
              id={task.id}
              taskText={task.taskText}
              checked={task.checked}
              editTask={editTask}
              completeTask={completeTask}
              removeTask={removeTask}
            />
          )
        })}
        {inputTask.map(() => {
          return (
            <TaskInput
              addTask={addTask}
              delInput={delInput}
              editId=""
              editText=""
            />
          )
        })}
        <ButtonAdd addInput={addInput} />
      </div>
    </div>
  )
}

export default App

