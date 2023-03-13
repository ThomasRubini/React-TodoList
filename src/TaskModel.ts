class TaskModel{

  done: boolean
  desc: string

  constructor(done: boolean=false, desc: string=""){
    this.done = done;
    this.desc = desc;
  }
}

export default TaskModel;