import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


export interface ProductInterface {
  measures: string,
  material: string,
  color: string,
  img: string,
  origin: string,
  price: number,
  us_dollars: boolean,
  discount: number,
  installments: number,
  surcharge_percentage: number,
  free_shipping_day: string,
  id: number
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsURL = 'assets/products.json'

  constructor(private http : HttpClient) {}

  getProducts () : Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.productsURL)
  }

  getProductById(product_id: number): Observable<ProductInterface | undefined> {
    return this.http.get<ProductInterface[]>(this.productsURL).pipe(
      map(products => products.find(product => product.id === product_id))
    )
  }
}
