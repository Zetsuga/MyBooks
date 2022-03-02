import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

import{faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuario: Usuario;
  public mensaje: string;
  public toastClase: string;

  public faCoffee;

  constructor() { 
    this.usuario = new Usuario(1,"Jose","Ors","1@1.com","www.app.com","1235");
    this.faCoffee = faCoffee;
  }

  ngOnInit(): void {
  }

  public recogerDatos(nombre:string,apellido:string,correo:string,url:string,password:string):void{
      if(nombre =="" && apellido =="" && correo =="" && url =="" && password ==""){
        this.mensaje="No se han detectado cambios";
        this.toastClase = "toast--error";
        setTimeout(()=>{
          this.toastClase= "toast--oculto"
          this.mensaje=""
        }, 3000);
      }else{
        if(nombre =="")nombre = this.usuario.nombre;
        if(apellido =="")apellido = this.usuario.apellido;
        if(correo =="")correo = this.usuario.correo;
        if(url =="")url = this.usuario.url;
        if(password =="")password = this.usuario.password;

        this.usuario.nombre = nombre;
        this.usuario.apellido = apellido;
        this.usuario.correo = correo;
        this.usuario.url = url;
        this.usuario.password = password;
        this.mensaje="Usuario actualizado";
        this.toastClase = "toast--ok";
        setTimeout(()=>{
          this.toastClase= "toast--oculto"
          this.mensaje=""
        }, 3000);
      }
      
  }
}
