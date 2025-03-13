import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Menu, Divider, Provider } from "react-native-paper";
import Icon from "../../components/VectorIcon"; 
import styles from "./style";
import ScreenHeader from '../../components/ScreenHeader';

const HomeView = ({ taskTitle, setTaskTitle, handleAddTask, tasks, updateTask, deleteTask }) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [visibleMenu, setVisibleMenu] = useState(null);

  const openMenu = (taskId) => setVisibleMenu(taskId);
  const closeMenu = () => setVisibleMenu(null);

  const handleUpdate = (task) => {
    setEditTaskId(task.id);
    setUpdatedTitle(task.title);
    closeMenu();
  };

  const handleSaveUpdate = () => {
    if (updatedTitle.trim() !== "") {
      updateTask(editTaskId, updatedTitle);
      setEditTaskId(null);
      setUpdatedTitle("");
    }
  };

  const handleDelete = (taskId) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", onPress: () => deleteTask(taskId) },
    ]);
    closeMenu();
  };

  return (
    <Provider>
      <View style={styles.container}>
        <ScreenHeader headerTitle = {"Task Details"}/>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Task"
            value={taskTitle}
            onChangeText={setTaskTitle}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>Create Task</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              {editTaskId === item.id ? (
                <TextInput
                  style={styles.editInput}
                  value={updatedTitle}
                  onChangeText={setUpdatedTitle}
                  onBlur={handleSaveUpdate}
                />
              ) : (
                <Text style={styles.taskText}>{item.title}</Text>
              )}

              <Menu
                visible={visibleMenu === item.id}
                onDismiss={closeMenu}
                anchor={
                  <TouchableOpacity onPress={() => openMenu(item.id)}>
                    <Icon iconName="dots-three-vertical" iconType="entypo" color="black" iconSize={20} />
                  </TouchableOpacity>
                }
              >
                <Menu.Item onPress={() => handleUpdate(item)} title="Update" />
                <Divider />
                <Menu.Item onPress={() => handleDelete(item.id)} title="Delete" />
              </Menu>
            </View>
          )}
        />
      </View>
    </Provider>
  );
};

export default HomeView;
