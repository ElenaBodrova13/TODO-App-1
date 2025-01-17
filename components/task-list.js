import React from 'react'

import Task from './task'

function TaskList(props) {
  const { todos, onDelete, onToggleComplited } = props

  const elements = todos.map((item) => (
    <Task
      label={item.label}
      time={item.time}
      key={item.id}
      complited={item.complited}
      onDelete={() => {
        onDelete(item.id)
      }}
      onToggleComplited={() => {
        onToggleComplited(item.id)
      }}
    />
  ))

  return <ul className="todo-list">{elements} </ul>
}

export default TaskList
