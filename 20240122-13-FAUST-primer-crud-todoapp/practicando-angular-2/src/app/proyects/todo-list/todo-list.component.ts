import { Component, OnInit } from '@angular/core';
import { TareasService } from './services/tareas.service';
import { Task } from './models/Task';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit{
  shownTasks: Task[] = [];
  tasks: Task[] = [];
  task: string = '';



  device: String  = "all"
  constructor(private tareasService: TareasService ){
    
  }
  ngOnInit(): void {
    this.shownTasks =[];
    this.getTasks();
    this.device="all";
  }

  getTasks(){
    this.tasks=[];
    this.tareasService.getTareas().subscribe(data=>{
      this.tasks=data;
      this.shownTasks=this.tasks;
    });
  }

  

  addTask() {
    this.tareasService.createTarea({nombre: this.task.split(" ")[0], descripcion: this.task, finalizado: false })
    .subscribe(task=> this.tasks.push(task))
    this.task = '';
    this.device="all"
  }

  removeTask(id: number) {
    this.tareasService.deleteTarea(id).subscribe(()=> this.getTasks());

  }

  doneTask(tarea: Task) {
    tarea.finalizado =!tarea.finalizado;
    this.tareasService.updateTarea(tarea.id, tarea).subscribe(()=> this.getTasks())
    // this.tasks.filter(t => t.id === id)[0].finalizado = State.completec
    // this.filter()
  }

  filter() {
    let newValue: boolean | undefined;
  
    switch (this.device) {
  
      case  "complete":
        newValue = true;
        break;
      case "uncomplete":
        newValue = false;
        break;
      case "deleted":
        newValue = undefined;
        break;
      default:
        newValue = undefined;
        break;
    }
    if (newValue === undefined) this.shownTasks = this.tasks
    else
      this.shownTasks = this.tasks.filter(t => t.finalizado == newValue)
    
    if (this.device === "deleted") {
      this.shownTasks = this.tasks.filter(t => t.eliminado);
    }
}

}
