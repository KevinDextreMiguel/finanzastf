
import { Cliente } from "./cliente";

export class Prestamo{
    idPrestamo:number=0
    montoPrestamo:number=0.0
    tipoInteres:string=""
    plazoPrestamo:Date=new Date()
    cliente: Cliente = new Cliente()
}