import { useState } from 'react';
import { connect } from 'react-redux';

import classes from './AddTask.module.css';
import * as actions from '../../../store/actions/index';

const AddTask = ({ onAddNewTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [scheduleAt, setScheduleAt] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmitNewTaskHandler = (event) => {
    event.preventDefault();

    if (!taskTitle && !scheduleAt) {
      return;
    }

    onAddNewTask({
      title: taskTitle,
      scheduleAt: scheduleAt,
      reminder: reminder,
    });
    setTaskTitle('');
    setScheduleAt('');
    setReminder(false);
  };

  return (
    <form
      className={classes.AddTask}
      onSubmit={(event) => onSubmitNewTaskHandler(event)}
    >
      <div className={classes.FormControl}>
        <label>Task</label>
        <input
          type="text"
          value={taskTitle}
          placeholder="Task Title"
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>
      <div className={classes.FormControl}>
        <label>Schedule At</label>
        <input
          type="text"
          value={scheduleAt}
          placeholder="ScheduledAt"
          onChange={(e) => setScheduleAt(e.target.value)}
        />
      </div>
      <div className={`${classes.FormControl} ${classes.FormControlCheck}`}>
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        value="Save Task"
        className={classes.AddTaskButton}
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNewTask: (newTask) => dispatch(actions.addTask(newTask)),
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
