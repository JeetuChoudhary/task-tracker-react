import { MdClose } from 'react-icons/md';
import classes from './Task.module.css';

const Task = ({ task, onToggleReminder, onDelete }) => {
  return (
    <div
      className={`${classes.Task} ${task.reminder ? classes.reminder : ''}`}
      onDoubleClick={() => onToggleReminder(task.id)}
    >
      <div>
        <h4 className={classes.taskHeading}>{task.title}</h4>
        <p className={classes.taskDesc}>{task.scheduleAt}</p>
      </div>
      <MdClose
        onClick={() => onDelete(task.id)}
        style={{ color: 'red', cursor: 'pointer' }}
      />
    </div>
  );
};
export default Task;
