import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'

class NewTaskForm extends Component {
  date = new Date()

  state = {
    label: '',
    time: this.date,
  }

  onEnter = (e) => {
    const { todos, addItem, editItem } = this.props
    const { label, time } = this.state
    if (e.key === 'Enter') {
      const even = (el) => el.edit === true
      const flag = todos.some(even)

      if (flag) {
        const ind = todos.find((el) => el.edit)
        const idEl = ind.id

        editItem(idEl, label, time)
      } else {
        addItem(label, time)
      }
      this.setState({
        label: '',
      })
    }
  }

  onLabelCange = (e) => {
    this.setState({
      label: e.target.value,
      // eslint-disable-next-line react/no-unused-state
      time: formatDistanceToNow(new Date()).toString(),
    })
  }

  render() {
    const { label } = this.state
    return (
      <input
        placeholder="What needs to be done?"
        className="new-todo"
        onKeyUp={this.onEnter}
        onChange={this.onLabelCange}
        value={label}
      />
    )
  }
}

export default NewTaskForm
