import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

import{faCoffee} from '@fortawesome/free-solid-svg-icons';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public user: Usuario;
  public mensaje: string;
  public toastClase: string;
  public usuario : Usuario;
  public faCoffee;

  constructor(public usuarioService:UsuarioService) { 
    this.faCoffee = faCoffee;
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
  }

  public recogerDatos(nombre:string,apellidos:string,correo:string,url:string,password:string):void{
      if(nombre =="" && apellidos =="" && correo =="" && url =="" && password ==""){
        this.mensaje="No se han detectado cambios";
        this.toastClase = "toast--error";
        setTimeout(()=>{
          this.toastClase= "toast--oculto"
          this.mensaje=""
        }, 3000);
      }else{
        nombre = (nombre =="")?null:nombre;
        apellidos = (apellidos =="")?null:apellidos;
        correo = (correo =="")?null:correo;
        url = (url =="")?null:url;
        password = (password =="")?null:password;

        this.user = new Usuario(nombre,apellidos,correo,url,password);
        this.user.id_usuario = this.usuarioService.usuario.id_usuario;
        
        this.usuarioService.edit(this.user).subscribe((datos:any)=>{
          console.log(this.usuario)
            if(datos.error == false){
              this.mensaje="Usuario actualizado";
              this.toastClase = "toast--ok";
              setTimeout(()=>{
                this.toastClase= "toast--oculto"
                this.mensaje=""
              }, 3000);
            }
            for(let atributo in this.user){
              if(this.user[atributo] !=null){
                this.usuario[atributo] = this.user[atributo];
              }
            }

        });

        
      }
      
  }
}
