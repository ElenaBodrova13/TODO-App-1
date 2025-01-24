import React from 'react'

import Task from '../task'

function TaskList(props) {
  const { todos, onDelete, onToggleComplited, editItem, edition } = props

  const elements = todos.map((item) => (
    <Task
      edit={item.edit}
      label={item.label}
      time={item.time}
      key={item.id}
      complited={item.complited}
      onDelete={() => {
        onDelete(item.id)
      }}
      editItem={() => {
        editItem(item.id, item.label)
      }}
      edition={() => {
        edition(item.id)
      }}
      onToggleComplited={() => {
        onToggleComplited(item.id)
      }}
    />
  ))

  return <ul className="todo-list">{elements} </ul>
}

export default TaskList
