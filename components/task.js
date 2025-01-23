import React from 'react'
import PropTypes from 'prop-types'

function Task(props) {
  const { label, time, id, onDelete, onToggleComplited, complited, cheked } = props

  let clasName = ''

  if (complited === true) {
    clasName = 'completed'
  }
  let chek
  if (cheked) chek = true
  return (
    <li key={id} className={clasName}>
      <div className="view">
        <input className="toggle" type="checkbox" id={id} checked={chek} />
        <label htmlFor={id}>
          <span className="description" role="presentation" onClick={onToggleComplited}>
            {label}
          </span>
          <span className="created">{time}</span>
        </label>
        <button type="button" className="icon icon-edit" aria-label="icon-edit" />
        <button type="button" className="icon icon-destroy" aria-label="icon-destroy" onClick={onDelete} />
      </div>
    </li>
  )
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
