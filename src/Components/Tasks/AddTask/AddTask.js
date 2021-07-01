import { useRef, useState } from "react";
import { connect } from "react-redux";

import classes from "./AddTask.module.css";
import * as actions from "../../../store/actions/index";

const AddTask = ({ onAddNewTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [reminder, setReminder] = useState(false);
  const scheduleRef = useRef(null);

  // Add and change date value
  function changeScheduleHandler(e) {
    if (e.keyCode === 8) {
      return;
    }
    const withoutDash = e.target.value.split("-").join("");

    if (!/^\d*$/.test(withoutDash)) {
      scheduleRef.current.value = e.target.value.slice(0, -1);
      return;
    }

    scheduleRef.current.value = withoutDash.replace(
      /^(\d{2})-?(\d{2})?-?(\d*)$/,
      (m, a, b, c) => (b ? a + "-" + b + "-" + c : a + "-" + c)
    );
  }

  const onSubmitNewTaskHandler = (event) => {
    event.preventDefault();
    const scheduleAt = scheduleRef.current.value;

    if (!taskTitle && !scheduleAt) {
      return;
    }

    onAddNewTask({
      title: taskTitle,
      scheduleAt: scheduleAt,
      reminder: reminder,
    });
    setTaskTitle("");
    scheduleRef.current.value = "";
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
          placeholder="DD-MM-YYYY"
          ref={scheduleRef}
          onKeyUp={changeScheduleHandler}
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
