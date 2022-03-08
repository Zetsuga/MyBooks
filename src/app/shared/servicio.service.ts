import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url =`http://127.0.0.1:3000/libros`;

  constructor(private http: HttpClient,public usuarioService: UsuarioService) {}

  public getAll():Observable<object>{
    return this.http.get(this.url + "?id_usuario=" + this.usuarioService.usuario.id_usuario);
  }

  public getOne(id_libro:number):Observable<object>{
    return this.http.get(this.url + "?id_libro="+id_libro+"&id_usuario="+this.usuarioService.usuario.id_usuario);
  }

  public add(libro:Libro):Observable<object>{
    return this.http.post(this.url,libro);
  }

  public edit(libro:Libro):Observable<object>{
    return this.http.put(this.url,libro);
  }

  public delete(id_libro:number):Observable<object>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id_libro: id_libro
      },
    };
    return this.http.delete(this.url,options);
  }
}