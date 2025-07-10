import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  imports: [],
  templateUrl: './price.html',
  styleUrl: './price.css'
})
export class Price {
  @Input() precio : number = 0
  @Input() oferta : number = 0
  @Input() cuotas : number = 0
  @Input() porcentaje_recargo_cuotas: number = 0
  @Input() dolares: boolean = false;

  precioConOferta(precio: number, oferta: number): number {
    let precio_con_oferta = precio * (100 - oferta) / 100;
    precio_con_oferta = Math.round(precio_con_oferta)

    return precio_con_oferta
  }

  calcularRecargo(porcentaje_recargo_cuotas:number): number {
    let recargo:number = (porcentaje_recargo_cuotas / 100) + 1

    return recargo
  }

  redondeoCuotas(precio: number, oferta: number, cuotas:number, porcentaje_recargo_cuotas:number): number {
    let precio_oferta: number = this.precioConOferta(precio, oferta);
    let recargo: number = this.calcularRecargo(porcentaje_recargo_cuotas)    

    let precio_cuota = (precio_oferta * recargo / cuotas)
    precio_cuota = Math.round(precio_cuota)


    return precio_cuota;
  }
}
