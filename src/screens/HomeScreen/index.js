import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, updateTask, deleteTask } from "../../actions/taskActions";
import HomeView from "./view";


const HomeScreen = ({ tasks, addTask, updateTask, deleteTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim() === "") {
      alert("Task title cannot be empty!");
      return;
    }
    const newTask = { id: Date.now().toString(), title: taskTitle };
    addTask(newTask);
    setTaskTitle("");
  };

  return (
    <HomeView
      taskTitle={taskTitle}
      setTaskTitle={setTaskTitle}
      handleAddTask={handleAddTask}
      tasks={tasks}
      updateTask={updateTask}
      deleteTask={deleteTask}
    />
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  updateTask,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
