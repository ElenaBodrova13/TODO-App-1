import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Task extends Component {
  changeClass = (complited) => {
    let clasName = ''

    if (complited === true) {
      clasName = 'completed'
    }
    return clasName
  }

  editionTodo = () => {
    const { edition } = this.props

    edition()
  }

  render() {
    const { label, time, id, onDelete, onToggleComplited, complited, cheked } = this.props

    return (
      <li key={id} className={this.changeClass(complited)}>
        <div className="view">
          <input className="toggle" type="checkbox" id={id} checked={cheked} />
          <label htmlFor={id}>
            <span className="description" role="presentation" onClick={onToggleComplited}>
              {label}
            </span>
            <span className="created">{time}</span>
          </label>
          <button type="button" className="icon icon-edit" aria-label="icon-edit" onClick={this.editionTodo} />
          <button type="button" className="icon icon-destroy" aria-label="icon-destroy" onClick={onDelete} />
        </div>
      </li>
    )
  }
}
Task.defaultProps = {
  label: 'New task',
  complited: false,
}

Task.propTypes = {
  label: PropTypes.string,
  complited: PropTypes.bool,

  onDelete: PropTypes.func.isRequired,
}
export default Task

/* <span style={style}> {lable}</span> */
