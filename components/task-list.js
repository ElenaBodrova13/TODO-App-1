import React, { Component } from "react";
import Task from "./task";

class TaskList extends Component {
  render() {
    const { todos, onDelete } = this.props;

    const elements = todos.map((item) => {
      return (
        <Task
          lable={item.label}
          time={item.time}
          key={item.id}
          onDelete={() => {
            onDelete(item.id);
          }}
        />
      );
    });
    return <ul className="todo-list">{elements} </ul>;
  }
}

export default TaskList;
