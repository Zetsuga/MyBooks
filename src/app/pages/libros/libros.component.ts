import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public arrayLibros:Libro[];

  constructor() { 
    this.arrayLibros=[];

    for(let i=0;i<7;i++){
      let libro1 = new Libro("La decadencia del siglo XX","Tapa Dura","Yo mismo",
          26,"libro.jpg",203215,1)

      this.arrayLibros.push(libro1);
    }
    
  }

  public guardarLibro(idLibro:number,idUsuario:number,titulo:string,
    tipoLibro:string,autor:string,precio:number,photo:string):void{
      let libro = new Libro(titulo,tipoLibro,autor,precio,photo,idLibro,idUsuario);
      this.arrayLibros.push(libro);
      console.log(this.arrayLibros);
    }

    

  ngOnInit(): void {
  }

}
