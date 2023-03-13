import * as React from 'react';
import './App.css';

function ensureVar(arg, type){
  if(arg===null||arg===undefined){
    throw new Error("argument is not defined");
  }
  if (type){
    if(typeof(arg) !== type){
      throw new Error("argument type is invalid");
    }
  }
  return arg;
}

class TaskModel{
  constructor(done, desc){
    this.done = ensureVar(done, 'boolean');
    this.desc = ensureVar(desc, 'string');
  }
}

class Task extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      done: ensureVar(this.props.model.done, 'boolean'),
      desc: ensureVar(this.props.model.desc, 'string')
    };
  }

  onTaskDescEdit(e) {
    this.setState({desc: e.target.value});
  }

  render() {
    return (
      <section key={this.key}>
        <input type="checkbox" defaultChecked={this.state.done} onChange={(e) => this.onCheckChange(e)}></input>
        <input type="text" value={this.state.desc} onChange={(e) => this.onTaskDescEdit(e)}></input>
      </section>
    )
  }

  onCheckChange(e) {
    this.setState({done: e.target.value});
  }

}

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
