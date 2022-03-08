export class Usuario {
    
    public id_usuario:number;
    public nombre:string;
    public apellidos:string;
    public correo:string;
    public url:string;
    public password:string;

    constructor(nombre:string,apellidos:string,
        correo:string,url:string,password:string){
            this.id_usuario = 0;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.correo = correo;
            this.url = url;
            this.password = password;
        }
}
