import * as React from 'react';

class Task extends React.Component<any, any> {

  constructor(props: any){
    super(props);
    this.state = {
      done: props.model.done,
      desc: props.model.desc,
      onDelete: props.onDelete,
      onChange: props.onChange,
    };
  }

  onTaskDescEdit(e) {
    this.setState({desc: e.target.value}, ()=>{
      this.state.onChange(this);
    });
  }

  render() {
    return (
      <section>
        <input type="checkbox" defaultChecked={this.state.done} onChange={(e) => this.onCheckChange(e)}></input>
        <input type="text" value={this.state.desc} onChange={(e) => this.onTaskDescEdit(e)}></input>
        <button onClick={() => this.state.onDelete()}>-</button>
      </section>
    )
  }

  onCheckChange(e) {
    this.setState({done: e.target.value}, ()=>{
      this.state.onChange(this);
    });
  }

}

export default Task;