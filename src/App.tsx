import * as React from 'react';
import './App.css';
import Task from './Task';
import TaskModel from './TaskModel';

class App extends React.Component<any, any> {

  constructor(props: any){
    super(props);

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
          { this.state.taskModels.map((task, i) => <Task model={task}/>)}
          <section id="add">
            <button>Add new task</button>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
