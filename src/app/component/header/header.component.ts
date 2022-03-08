import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usuarioService : UsuarioService) { 
  }

  ngOnInit(): void {
  }

  public getLogueado():boolean{
    return  this.usuarioService.logueado;
  }
}
