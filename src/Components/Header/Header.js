import Button from '../UI/Button/Button';
import classes from './Header.module.css';

const Header = ({ showForm, toggleForm }) => {
  return (
    <header className={classes.Header}>
      <span className={classes.HeaderText}> Tasks Tracker</span>
      <Button
        clicked={toggleForm}
        text={showForm ? 'Close' : 'Add'}
        color={showForm ? 'red' : 'green'}
      />
    </header>
  );
};

export default Header;
