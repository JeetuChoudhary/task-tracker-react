import * as actionTypes from '../action-types';

const initialState = {
  tasks: null,
  loading: false,
  error: null,
  showAddForm: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS_START:
      return start(state);

    case actionTypes.FETCH_TASKS_SUCCESS:
      return fetchTasksSuccess(state, action.tasks);

    case actionTypes.FETCH_TASKS_FAIL:
      return fail(state, action.error);

    case actionTypes.SHOW_ADD_FORM:
      return showAddForm(state);

    case actionTypes.ADD_TASK_START:
      return start(state);

    case actionTypes.ADD_TASK_SUCCESS:
      return addTaskSuccess(state, action.task);

    case actionTypes.ADD_TASK_FAIL:
      return fail(state, action.error);

    case actionTypes.DELETE_TASK_START:
      return start(state);

    case actionTypes.DELETE_TASK_SUCCESS:
      return deleteTaskSuccess(state, action.taskId);

    case actionTypes.DELETE_TASK_FAIL:
      return fail(state, action.error);

    case actionTypes.TOGGLE_REMINDER_START:
      return start(state);

    case actionTypes.TOGGLE_REMINDER_SUCCESS:
      return toggleReminderSuccess(state, action.task);

    case actionTypes.TOGGLE_REMINDER_FAIL:
      return fail(state, action.error);

    default:
      return state;
  }
};

const start = (state) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fail = (state, error) => {
  return {
    ...state,
    loading: false,
    error: error,
  };
};
const fetchTasksSuccess = (state, tasks) => {
  return {
    ...state,
    loading: false,
    tasks: tasks,
  };
};

const showAddForm = (state) => {
  return {
    ...state,
    showAddForm: !state.showAddForm,
  };
};

const addTaskSuccess = (state, task) => {
  return {
    ...state,
    tasks: state.tasks.concat(task),
    loading: false,
  };
};

const deleteTaskSuccess = (state, taskId) => {
  return {
    ...state,
    loading: false,
    tasks: state.tasks.filter((task) => task.id !== taskId),
  };
};

const toggleReminderSuccess = (state, task) => {
  const updatedTask = state.tasks.map((tsk) => {
    if (tsk.id === task.id) {
      return { ...task };
    }
    return tsk;
  });

  return {
    ...state,
    loading: false,
    tasks: updatedTask,
  };
};

export default taskReducer;
