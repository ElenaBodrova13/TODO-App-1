import React, { Component } from "react";

class Task extends Component {
  render() {
    const { lable, time, id } = this.props;

    return (
      <li key={id}>
        <div className="view">
          <input className="toggle" type="checkbox"></input>
          <label>
            <span className="description">{lable}</span>
            <span className="created">{time}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
    );
  }
}

export default Task;

/* <span style={style}> {lable}</span> */
