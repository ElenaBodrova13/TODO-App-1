import React, { Component } from "react";

class Task extends Component {
  state = {
    complited: false,
  };
  taskDone = () => {
    this.setState((state) => {
      return { complited: !state.complited };
    });
  };
  render() {
    const { lable, time, id, onDelete } = this.props;
    const { complited } = this.state;
    let clasName = "";
    if (complited) {
      clasName = "completed";
    }
    return (
      <li key={id} className={clasName}>
        <div className="view">
          <input className="toggle" type="checkbox"></input>
          <label>
            <span className="description" onClick={this.taskDone}>
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
