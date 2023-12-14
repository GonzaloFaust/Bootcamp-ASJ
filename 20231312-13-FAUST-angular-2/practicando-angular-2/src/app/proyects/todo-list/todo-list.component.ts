import { Component } from '@angular/core';

interface Task {
  id:number,
  desc:string,
  state:State
}

enum State{
  'complete',
  'uncomplete',
  'deleted'
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {

  task:string='';
  idCount=0;
  addTask(){
    this.tasks.push({id:this.idCount++,desc:this.task, state:State.uncomplete})
    this.task='';
  }

  removeTask(id:number){
    this.tasks=this.tasks.filter(t=>t.id!==id)
  }
  tasks:Array<Task> = []
}
