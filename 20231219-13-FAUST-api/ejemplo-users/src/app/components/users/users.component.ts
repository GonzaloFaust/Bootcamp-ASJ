import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  constructor(public userService: UserService) { }

  usuarios: any = []
  message=""
  ngOnInit(): void {
    this.list()
    // console.log(this.getById(2))
    this.getById(7)
  }

  //metodos privados
  private list() {
    this.userService.getUsers().subscribe(res => this.usuarios = res.data)
  }

  private resetForm(form: NgForm) {
    form.reset();
    this.userService.usuarioDatos = {
      id: -1,
      name: "",
      job: ""
    };
  }

  private info(status:string, message:string ){
    this.message=message;
    setTimeout(()=>this.message="",2500)
  }
  //metodos crud
  create(form: NgForm) {
    if (form.value.id != -1) {
      this.userService.updateUser(form.value).subscribe(res => {if(res!==undefined)this.info("ok","usuario actualizado con exito");})
    }
    else {
      if (!form.valid) {
        console.log("error formulario")
      }
      else {
        this.userService.createUser(form.value).subscribe(res => {if(res!==undefined)this.info("ok","usuario creado con exito");})
      }
    }
    this.resetForm(form)
    this.list();
  }

  delete(id: any) {
    const confirmacion = confirm("Desea eliminar el usuario?")
    if (confirmacion) {
      this.userService.deleteUser(id).subscribe(data => console.log(data))//habria que encontrar alguna manera de saber el status que devolvio la llamada a la api
      this.list()
    }
  }

  update(user: any) {
    this.userService.usuarioDatos = {
      id: user.id,
      name: user.first_name,
      job: "desempleado"
    }
  }
  getById(id:number){
    this.userService.getUserById(id).subscribe((res:any)=>console.log(res));
  } 
}
