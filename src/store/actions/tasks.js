import * as actionTypes from '../action-types';
import axios from 'axios';

const fetchTaskStart = () => {
  return {
    type: actionTypes.FETCH_TASKS_START,
  };
};

const fetchTaskSuccess = (tasks) => {
  return {
    type: actionTypes.FETCH_TASKS_SUCCESS,
    tasks: tasks,
  };
};

const fetchTaskFail = (error) => {
  return {
    type: actionTypes.FETCH_TASKS_FAIL,
    error: error,
  };
};

export const fetchTask = () => {
  return (dispatch) => {
    dispatch(fetchTaskStart());
    axios
      .get('http://localhost:5000/tasks')
      .then((taskResponse) => {
        dispatch(fetchTaskSuccess(taskResponse.data));
      })
      .catch((error) => {
        dispatch(fetchTaskFail(error));
      });
  };
};

export const showAddForm = () => {
  return {
    type: actionTypes.SHOW_ADD_FORM,
  };
};

const deleteTaskStart = () => {
  return {
    type: actionTypes.DELETE_TASK_START,
  };
};

const deleteTaskSuccess = (taskId) => {
  return {
    type: actionTypes.DELETE_TASK_SUCCESS,
    taskId: taskId,
  };
};

const deleteTaskFail = (error) => {
  return {
    type: actionTypes.DELETE_TASK_FAIL,
    error: error,
  };
};

export const deleteTask = (taskId) => {
  return (dispatch) => {
    dispatch(deleteTaskStart());
    axios
      .delete(`http://localhost:5000/tasks/${taskId}`)
      .then(() => {
        dispatch(deleteTaskSuccess(taskId));
      })
      .catch((error) => {
        dispatch(deleteTaskFail(error));
      });
  };
};

const addTaskStart = () => {
  return {
    type: actionTypes.ADD_TASK_START,
  };
};
const addTaskSuccess = (task) => {
  return {
    type: actionTypes.ADD_TASK_SUCCESS,
    task: task,
  };
};
const addTaskFail = (error) => {
  return {
    type: actionTypes.ADD_TASK_FAIL,
    error: error,
  };
};

export const addTask = (task) => {
  return (dispatch) => {
    dispatch(addTaskStart());
    axios
      .post('http://localhost:5000/tasks', task)
      .then((res) => {
        dispatch(addTaskSuccess(res.data));
      })
      .catch((error) => {
        dispatch(addTaskFail(error));
      });
  };
};

const toggleReminderStart = () => {
  return {
    type: actionTypes.TOGGLE_REMINDER_START,
  };
};

const toggleReminderSuccess = (task) => {
  return {
    type: actionTypes.TOGGLE_REMINDER_SUCCESS,
    task: task,
  };
};

const toggleReminderFail = (error) => {
  return {
    type: actionTypes.TOGGLE_REMINDER_FAIL,
    error: error,
  };
};

export const toggleReminder = (task) => {
  return (dispatch) => {
    dispatch(toggleReminderStart());
    axios
      .put(`http://localhost:5000/tasks/${task.id}`, task)
      .then((res) => {
        dispatch(toggleReminderSuccess(res.data));
      })
      .catch((error) => {
        dispatch(toggleReminderFail(error));
      });
  };
};
