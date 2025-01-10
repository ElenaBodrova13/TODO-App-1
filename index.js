import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import AppHeader from "./components/app-header";
import TaskList from "./components/task-list";
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";

class App extends Component {
  state = {
    todoData: [
      {
        label: "Completed task",
        complited: false,
        id: 1,
        time: "created 5 minutes ago",
      },
      {
        label: "Editing task",
        complited: false,
        id: 2,
        time: "created 15 minutes ago",
      },
      {
        label: "Active task",
        complited: false,
        id: 3,
        time: "created 5 minutes ago",
      },
    ],
  };

  onDelete = (id) => {
    this.setState(({ todoData }) => {
      const ind = todoData.findIndex((el) => el.id === id);
      const newArr = todoData.toSpliced(ind, 1);
      return {
        todoData: newArr,
      };
    });
  };

  render() {
    return (
      <div className="todoapp">
        <AppHeader />
        <NewTaskForm />
        <section className="main">
          <TaskList todos={this.state.todoData} onDelete={this.onDelete} />
        </section>

        <Footer />
      </div>
    );
  }
}
const el = <App />;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(el);
