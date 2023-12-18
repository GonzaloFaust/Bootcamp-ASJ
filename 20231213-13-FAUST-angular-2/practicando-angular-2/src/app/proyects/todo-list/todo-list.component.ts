import { Component } from '@angular/core';

interface Task {
  id: number,
  desc: string,
  state: State
}

enum State {
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

  task: string = '';
  idCount = 0;
  device: string = "all"
  addTask() {
    this.tasks.push({ id: this.idCount++, desc: this.task, state: State.uncomplete })
    this.task = '';
    this.filter();
  }

  removeTask(id: number) {
    this.tasks.filter(t => t.id === id)[0].state = State.deleted
    this.filter()
  }

  doneTask(id: number) {
    this.tasks.filter(t => t.id === id)[0].state = State.complete
    this.filter()
  }

  filter() {
    let newValue: number;
    switch (this.device) {
      case "deleted":
        newValue = 2;
        break;
      case "complete":
        newValue = 0;
        break;
      case "uncomplete":
        newValue = 1;
        break;
      default:
        newValue = -1;
        break;
    }
    if (newValue === -1) this.shownTasks = this.tasks
    else
      this.shownTasks = this.tasks.filter(t => t.state === newValue)
  }
  shownTasks: Array<Task> = []
  tasks: Array<Task> = []
}
