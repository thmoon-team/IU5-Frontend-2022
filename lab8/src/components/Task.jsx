import React from 'react'
import deleteIcon from './icons/delete.png'

const Task = (props) => {
  return (
    <div key={props.id} className="task-item">
      <label>
        <input
          type="checkbox"
          id="checkbox-copleted"
          onChange={() => {
            props.completeTask(props.id)
          }}
        ></input>
      </label>
      <div
        onClick={() => {
          if (!props.checked) {
            props.editTask(props.id)
          }
        }}
        className={props.checked ? 'task-text strike' : 'task-text'}
      >
        {props.taskText}
      </div>
      <div className="item-delete" onClick={() => props.removeTask(props.id)}>
        <img src={deleteIcon} height="100%"></img>
      </div>
    </div>
  )
}
export default Task
