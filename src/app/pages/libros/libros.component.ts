import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ServicioService } from 'src/app/shared/servicio.service';
import{faSearch} from '@fortawesome/free-solid-svg-icons';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public faSearch;
  public libros:Libro[];
  public libro:Libro;

  constructor(public servicioService:ServicioService,public usuarioService:UsuarioService) {
    this.faSearch = faSearch; 
    this.servicioService.getAll().subscribe((datos:any)=>{
      this.libros = datos.resultado;
    });
    this.libro = new Libro("","Tapa Dura","",null,"",null,usuarioService.usuario.id_usuario);
  }

  public buscarLibro(id_libro:string):void{
    if(id_libro == ""){
      this.servicioService.getAll().subscribe((datos:any)=>{
          this.libros = datos.resultado;
      }); 
    }else{
      this.servicioService.getOne(Number(id_libro)).subscribe((datos:any)=>{

        if(datos.resultado.length>0){
          this.libros = [datos.resultado[0]];
        }else{
          this.libros = []
        }
      });
    }
  }

  public guardarLibro(form:NgForm):void{
          
          this.servicioService.add(this.libro).subscribe((datos:any)=>{
            console.log(datos);
            this.libro.id_libro = datos.resultado;
            this.libros.push(this.libro);
            console.log(this.libros);
          });
  }

    public modificarLibro(form:NgForm):void{
      console.log(this.libro);
      this.servicioService.edit(this.libro).subscribe((datos:any)=>{
        
        for(let atributo in this.libros){
          if(this.libros[atributo].id_libro==this.libro.id_libro){
            this.libros[atributo] = this.libro;
          }
        }
      });
    }

    public borrarLibro(idLibro:number):void{
      this.servicioService.delete(idLibro).subscribe((datos:any)=>{
        let contador = 0;
        this.libros.forEach((libro)=>{
          if(libro.id_libro === idLibro){
            this.libros.splice(contador,1);
          }else{
            contador++;
          }
        })
      });
    }

  ngOnInit(): void {
  }

}
