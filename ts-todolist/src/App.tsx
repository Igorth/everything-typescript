import React from 'react';
import styles from './App.module.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What will you do?</h2>
          <TaskForm btnText="Create task" />
        </div>
        <div>
          <h2>Your tasks</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
