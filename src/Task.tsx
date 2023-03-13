import * as React from 'react';

class Task extends React.Component<any, any> {

  constructor(props: any){
    super(props);
    this.state = {
      done: props.model.done,
      desc: props.model.desc
    };
  }

  onTaskDescEdit(e) {
    this.setState({desc: e.target.value});
  }

  render() {
    return (
      <section>
        <input type="checkbox" defaultChecked={this.state.done} onChange={(e) => this.onCheckChange(e)}></input>
        <input type="text" value={this.state.desc} onChange={(e) => this.onTaskDescEdit(e)}></input>
      </section>
    )
  }

  onCheckChange(e) {
    this.setState({done: e.target.value});
  }

}

export default Task;