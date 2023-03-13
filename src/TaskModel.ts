class TaskModel{

  done: boolean
  desc: string

  constructor(done: boolean, desc: string){
    this.done = done, 'boolean';
    this.desc = desc, 'string';
  }
}

export default TaskModel;