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
          { this.state.taskModels.map((task, i) => <Task key={i} model={task} onDelete={()=>this.deleteTask(i)}/>)}
          <section id="add">
            <button onClick={(e)=>this.addNewTask(e)}>Add new task</button>
          </section>
        </section>
      </div>
    );
  }

  addNewTask(e){
    let taskModels = this.state.taskModels;
    taskModels.push(new TaskModel());
    this.setState({
      taskModels: taskModels
    })
  }

  deleteTask(i: number){
    let taskModels = this.state.taskModels;
    taskModels.splice(i, 1);
    this.setState({
      taskModels: taskModels
    })
  }
}

export default App;
