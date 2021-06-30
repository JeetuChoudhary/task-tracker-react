import classes from './Button.module.css';

const Button = ({ text, color, clicked }) => {
  return (
    <button
      onClick={clicked}
      className={classes.Button}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Add',
  color: 'green',
};
export default Button;
