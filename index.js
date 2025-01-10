import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import AppHeader from "./components/app-header";
import TaskList from "./components/task-list";
import NewTaskForm from "./new-task-form";
import Footer from "./components/footer";

class App extends Component {
  todoData = [
    {
      label: "Completed task",
      important: false,
      id: 1,
      time: "created 5 minutes ago",
    },
    {
      label: "Editing task",
      important: true,
      id: 2,
      time: "created 15 minutes ago",
    },
    {
      label: "Active task",
      important: false,
      id: 3,
      time: "created 5 minutes ago",
    },
  ];

  render() {
    return (
      <div className="todoapp">
        <AppHeader />
        <NewTaskForm />
        <section className="main">
          <TaskList todos={this.todoData} />
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
