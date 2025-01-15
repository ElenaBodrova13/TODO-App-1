import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import AppHeader from "./components/app-header";
import TaskList from "./components/task-list";
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";

class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Completed task"),
      this.createTodoItem("Editing task"),
      this.createTodoItem("Active task"),
    ],
    newTodo: [],
  };
  createTodoItem(label) {
    return {
      label,
      complited: false,
      id: this.maxId++,
      filtered: "all",
      time: "created 5 minutes ago",
    };
  }
  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
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

  onToggleComplited = (id) => {
    this.setState(({ todoData }) => {
      const ind = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[ind];
      const newItem = JSON.parse(JSON.stringify(oldItem));
      newItem.complited = !oldItem.complited;

      const newArray = todoData.toSpliced(ind, 1, newItem);

      return {
        todoData: newArray,
      };
    });
  };
  allchosen = () => {
    this.setState(({ todoData }) => {
      const newItem = JSON.parse(JSON.stringify(todoData));

      newItem.forEach((element) => (element.filtered = "all"));
      return { todoData: newItem };
    });
  };
  complit = () => {
    this.setState(({ todoData }) => {
      const newItem = JSON.parse(JSON.stringify(todoData));

      newItem.forEach((element) => (element.filtered = "complited"));
      return { todoData: newItem };
    });
  };
  activchosen = () => {
    this.setState(({ todoData }) => {
      const newItem = JSON.parse(JSON.stringify(todoData));

      newItem.forEach((element) => (element.filtered = "activ"));
      return { todoData: newItem };
    });
  };

  deletComplited = () => {
    this.setState(({ todoData }) => {
      const newTodo = JSON.parse(JSON.stringify(todoData));
      let newArr;
      newArr = newTodo.filter((el) => !el.complited);
      return { todoData: newArr };
    });
  };
  filter = () => {
    this.setState(({ todoData }) => {
      const newTodo = JSON.parse(JSON.stringify(todoData));
      let newArr;
      newTodo.forEach((element) => {
        if (element.filtered === "all") {
          newArr = todoData;

          return newArr;
        }
        if (element.filtered === "complited") {
          newArr = newTodo.filter((el) => el.complited);

          return newArr;
        }
        if (element.filtered === "activ") {
          newArr = newTodo.filter((el) => !el.complited);
          return newArr;
        }
      });
      return { newTodo: newArr };
    });
  };
  chusTodo = (todoData, newTodo) => {
    if (todoData[0].filtered === "all") {
      return todoData;
    } else {
      return newTodo;
    }
  };
  render() {
    const todos = this.chusTodo(this.state.todoData, this.state.newTodo);

    const todoComplited = this.state.todoData.filter(
      (el) => el.complited
    ).length;
    const activ = this.state.todoData.length - todoComplited;
    return (
      <div className="todoapp">
        <AppHeader />
        <NewTaskForm todos={this.state.todoData} addItem={this.addItem} />
        <section className="main">
          <TaskList
            todos={todos}
            onDelete={this.onDelete}
            onToggleComplited={this.onToggleComplited}
          />
        </section>

        <Footer
          todoComplited={todoComplited}
          activ={activ}
          filter={this.filter}
          allchosen={this.allchosen}
          todos={this.state.todoData}
          complit={this.complit}
          activchosen={this.activchosen}
          deletComplited={this.deletComplited}
          onAllDell={this.onAllDell}
        />
      </div>
    );
  }
}
const el = <App />;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(el);
