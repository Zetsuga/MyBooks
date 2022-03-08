import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Toast } from 'ngx-toastr';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  constructor(private usuarioService:UsuarioService,private router:Router,private toastService:ToastService) {
    this.usuario = new Usuario("","","","","");
  }

  public onSubmit(form:NgForm){
    this.usuarioService.login(this.usuario).subscribe((datos:any)=>{
      if(datos.error==true){
        this.usuarioService.logueado = false;
        this.usuarioService.usuario = null;
        this.toastService.showError(datos.mensaje,datos.titulo);
      }else{
        this.usuarioService.logueado = true;
        this.usuarioService.usuario = datos.resultado[0];
        this.toastService.showOk(datos.mensaje,datos.titulo)
        this.router.navigateByUrl('/');
      }
    });
  }


  ngOnInit(): void {
  }

}
