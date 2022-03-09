import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() librosPadre : Libro;
  @Input() parPadre = Boolean;
  @Output() eventoBorrar = new EventEmitter<Number>();

  constructor() { }

  public comprar(){}

  public borrar(id:number){
    this.eventoBorrar.emit(id);
  }

  ngOnInit(): void {
  }

}
