export const addTask = (task) => ({
    type: "ADD_TASK",
    payload: task,
  });
  
  export const updateTask = (taskId, newTitle) => ({
    type: "UPDATE_TASK",
    payload: { taskId, newTitle },
  });
  
  export const deleteTask = (taskId) => ({
    type: "DELETE_TASK",
    payload: taskId,
  });
  