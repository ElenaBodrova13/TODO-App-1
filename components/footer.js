import React, { Component } from "react";
import TaskFilter from "./tasks-filter";

class Footer extends Component {
  allDeletedChus = () => {
    this.props.deletComplited();
  };
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">{this.props.activ} items left</span>
        <TaskFilter
          filter={() => {
            this.props.filter();
          }}
          complit={() => {
            this.props.complit();
          }}
          allchosen={() => {
            this.props.allchosen();
          }}
          activchosen={() => {
            this.props.activchosen();
          }}
          todoData={this.props.todoData}
        />
        <button className="clear-completed" onClick={this.allDeletedChus}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
