import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";
class NewTaskForm extends Component {
  state = {
    label: "",
    time: "",
  };

  onEnter = (e) => {
    if (e.key === "Enter") {
      this.props.addItem(this.state.label, this.state.time);
      this.setState({
        label: "",
      });
    }
  };
  onLabelCange = (e) => {
    this.setState({
      label: e.target.value,
      time: formatDistanceToNow(new Date()).toString(),
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
