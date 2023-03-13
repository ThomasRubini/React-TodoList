import * as React from 'react';
import './App.css';
import Task from './Task';
import TaskModel from './TaskModel';

class App extends React.Component<any, any> {

  constructor(props: any){
    super(props);

    this.state = {
      taskModels: this.getLocalStorage()
    }
  }
  
  getLocalStorage() : Array<TaskModel> {
    let tasksStr = localStorage.getItem("tasks");
    if(!tasksStr)return [];

    return JSON.parse(tasksStr);
  }

  setLocalStorage(tasksModels: Array<TaskModel>) {
    localStorage.setItem("tasks", JSON.stringify(tasksModels));
  }

  render(){
    return (
      <div className="App">
        <section id="tasks">
          { this.state.taskModels.map((task, i) =>
            <Task
              key={i}
              model={task}
              onDelete={()=>this.deleteTask(i)}
              onChange={(task)=>this.onTaskChange(i, task)}
            />
          )}
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

    this.setLocalStorage(taskModels);
    this.setState({
      taskModels: taskModels
    })
  }

  deleteTask(i: number){
    let taskModels = this.state.taskModels;
    taskModels.splice(i, 1);

    this.setLocalStorage(taskModels);
    this.setState({
      taskModels: taskModels
    })
  }

  onTaskChange(i: number, task: Task){
    let taskModels = this.state.taskModels;
    
    taskModels[i].desc = task.state.desc;
    taskModels[i].done = task.state.done;

    this.setLocalStorage(this.state.taskModels);
  }
}

export default App;
