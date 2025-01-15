import React, { Component } from "react";

class NewTaskForm extends Component {
  state = {
    label: "",
  };

  onEnter = (e) => {
    if (e.key === "Enter") {
      this.props.addItem(this.state.label);
      this.setState({
        label: "",
      });
    }
  };
  onLabelCange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  render() {
    return (
      <input
        placeholder="What needs to be done?"
        autoFocus
        className="new-todo"
        onKeyUp={this.onEnter}
        onChange={this.onLabelCange}
        value={this.state.label}
      />
    );
  }
}

export default NewTaskForm;
