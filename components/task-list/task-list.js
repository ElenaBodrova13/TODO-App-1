import React from 'react'

import Task from '../task'

function TaskList(props) {
  const { todos, onDelete, onToggleComplited, editItem, edition, onChecked } = props

  const elements = todos.map((item) => (
    <Task
      todos={todos}
      edit={item.edit}
      label={item.label}
      time={item.time}
      key={item.id}
      complited={item.complited}
      cheked={item.cheked}
      onDelete={() => {
        onDelete(item.id)
      }}
      editItem={editItem}
      edition={() => {
        edition(item.id)
      }}
      onToggleComplited={() => {
        onToggleComplited(item.id)
      }}
      onChecked={() => {
        onChecked(item.id)
      }}
    />
  ))

  return <ul className="todo-list">{elements} </ul>
}

export default TaskList
