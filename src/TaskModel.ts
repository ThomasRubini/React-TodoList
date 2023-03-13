class TaskModel{

  static key: number = 0;

  key: number
  done: boolean
  desc: string

  constructor(done: boolean=false, desc: string=""){
    this.key = TaskModel.key++;
    this.done = done;
    this.desc = desc;
  }
}

export default TaskModel;