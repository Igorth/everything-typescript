import React from 'react';
import styles from './TaskForm.module.css';

type Props = {
  btnText: string;
};

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Task Title:" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Level</label>
        <input type="text" name="difficulty" placeholder="Task Level:" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
