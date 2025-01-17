import React, { Component } from "react";
import TaskFilter from "./tasks-filter";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <TaskFilter />
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

export default Footer;
