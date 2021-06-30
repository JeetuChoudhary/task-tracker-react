import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';
import AddTask from '../Tasks/AddTask/AddTask';

import * as actions from '../../store/actions/index';

const Layout = ({ showForm, onToggleForm }) => {
  const onToggleFormHandler = () => {
    onToggleForm();
  };

  return (
    <div className={classes.Layout}>
      <Header toggleForm={onToggleFormHandler} showForm={showForm} />
      {showForm && <AddTask />}

      <Tasks />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showForm: state.tks.showAddForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleForm: () => dispatch(actions.showAddForm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
