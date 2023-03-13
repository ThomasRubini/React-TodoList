import * as React from 'react';
import './App.css';
import Task from './Task.tsx';
import TaskModel from './TaskModel.ts';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      taskModels: [
        new TaskModel(true, "Some random task"),
        new TaskModel(false, "Finishing this app")
      ]
    }
  }
  
  render(){
    return (
      <div className="App">
        <section id="tasks">
          { this.state.taskModels.map((task, i) => <Task key={i} model={task}></Task>)}
          <section id="add">
            <button>Add new task</button>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
