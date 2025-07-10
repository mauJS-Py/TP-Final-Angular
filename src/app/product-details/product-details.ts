import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Price } from '../price/price';
import { BuyButton } from '../buy-button/buy-button';
import { ShowDiscount } from '../show-discount/show-discount';
import { InterestFree } from '../interest-free/interest-free';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface, ProductsService } from '../services/products.service';
import { NotFound } from '../not-found/not-found';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, FormsModule, Price, BuyButton, ShowDiscount, InterestFree, NotFound],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  product_id: string = '';
  private productService = inject(ProductsService)

  product_selected: ProductInterface | undefined=undefined

  loading : boolean = true

  tipo_de_pileta: string = 'Simple'
  medida_de_pileta: string = '52 × 32 × 15'

  precio_piletadoble: number = 35500;
  precio_piletadoble_usd: number = 36;
  pileta_simple: boolean = true;

  choice: string = ''

  shipping_collapsed: boolean = true;
  paymentmethod_collapsed: boolean = true;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.product_id = params.get('product_id') || ''
        const product_details_observable = this.productService.getProductById(Number(this.product_id))
        product_details_observable.subscribe(
          {
            next: (product_details) => {
              this.product_selected = product_details;
              this.loading = false;
            }
          }
        )
      }
    )
  }


  cambiarPileta(choice: string) {

    if(choice === 'simple') {
      this.pileta_simple = true;
    } else {
      this.pileta_simple = false;
    }

    
    if(!this.pileta_simple) {
      this.tipo_de_pileta = 'Doble'
      this.medida_de_pileta = '56 × 37 × 15'
    } else {
      this.tipo_de_pileta = 'Simple'
      this.medida_de_pileta = '52 × 32 × 15'
    }
  }


  mostrarOCollapsar (eleccion: string) {
    if (eleccion === "shipping") {
      this.shipping_collapsed = !this.shipping_collapsed;
    } else if (eleccion === "paymentmethod") {
      this.paymentmethod_collapsed = !this.paymentmethod_collapsed;
    }
  }
}
