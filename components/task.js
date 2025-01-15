import React, { Component } from "react";

class Task extends Component {
  render() {
    const { lable, time, id, onDelete, onToggleComplited, complited } =
      this.props;

    let clasName = "";

    if (complited === true) {
      clasName = "completed";
    }
    return (
      <li key={id} className={clasName}>
        <div className="view">
          <input className="toggle" type="checkbox"></input>
          <label>
            <span className="description" onClick={onToggleComplited}>
              {lable}
            </span>
            <span className="created">{time}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDelete}></button>
        </div>
      </li>
    );
  }
}

export default Task;

/* <span style={style}> {lable}</span> */
