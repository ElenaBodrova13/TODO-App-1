import React, { Component } from "react";

export default class TaskFilter extends Component {
  all = () => {
    this.props.allchosen();
    this.props.filter();
  };
  compliting = () => {
    this.props.complit();
    this.props.filter();
  };
  active = () => {
    this.props.activchosen();
    this.props.filter();
  };
  render() {
    let clasName = "";

    if (this.props.filtered === "all") {
      clasName = "selected";
    } else {
      clasName = "";
    }
    return (
      <ul className="filters">
        <li>
          <button className={clasName} onClick={this.all}>
            All
          </button>
        </li>
        <li>
          <button onClick={this.active}>Active</button>
        </li>
        <li>
          <button onClick={this.compliting}>Completed</button>
        </li>
      </ul>
    );
  }
}
