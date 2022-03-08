import { Usuario } from "./usuario";

export class RegistroUsuario {
    
    public usuario : Usuario;
    public password2:string;

    constructor(usuario:Usuario,password2:string){
            this.usuario = usuario;
            this.password2 = password2;
        }
}
