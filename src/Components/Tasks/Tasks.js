import { useEffect } from 'react';
import { connect } from 'react-redux';
import Task from './Task/Task';
import * as actions from '../../store/actions';

const Tasks = ({ tasks, onFetchTasks, onDeleteTask, onToggleReminder }) => {
  useEffect(() => {
    onFetchTasks();
  }, [onFetchTasks]);

  const onDeleteTaskHandler = (taskId) => {
    onDeleteTask(taskId);
  };

  const onToggleReminderHandler = (taskId) => {
    if (!taskId) return;
    const toggleTask = tasks.find((task) => task.id === taskId);
    const updatedTask = { ...toggleTask, reminder: !toggleTask.reminder };

    onToggleReminder(updatedTask);
  };

  return (
    <div style={{ margin: '30px 0' }}>
      {tasks && tasks.length ? (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDelete={onDeleteTaskHandler}
              onToggleReminder={onToggleReminderHandler}
            />
          );
        })
      ) : (
        <p style={noItemStyle}>There is no tasks to show</p>
      )}
    </div>
  );
};

const noItemStyle = { margin: '30px 0', fontSize: '1.1rem' };

const mapStateToProps = (state) => {
  return {
    tasks: state.tks.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTasks: () => dispatch(actions.fetchTask()),
    onDeleteTask: (taskId) => dispatch(actions.deleteTask(taskId)),
    onToggleReminder: (task) => dispatch(actions.toggleReminder(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
