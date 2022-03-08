import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistroUsuario } from 'src/app/models/registroUsuario';
import { Usuario } from 'src/app/models/usuario';
import { ToastService } from 'src/app/shared/toast.service';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {


  public usuario: Usuario;
  public registro: RegistroUsuario;
  
  constructor(public usuarioService:UsuarioService,private toastService:ToastService) { 
    this.usuario = new Usuario("","","","","")
    this.registro = new RegistroUsuario(this.usuario,"");
  }

  public onSubmit(form:NgForm):void{
    console.log(this.usuario)
    if(this.usuario.password != this.registro.password2){
      this.toastService.showError("Las contraseñas no coinciden","Error Password")
    }else{
      this.usuarioService.register(this.usuario).subscribe((datos:any)=>{
        this.toastService.showOk(datos.mensaje,datos.titulo);
      });
      
    }
  }

  ngOnInit(): void {
  }

}
