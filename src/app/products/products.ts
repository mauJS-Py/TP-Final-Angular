import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Price } from '../price/price';
import { ShowDiscount } from '../show-discount/show-discount';
import { InterestFree } from '../interest-free/interest-free';
import { ProductInterface, ProductsService } from '../services/products.service';

interface FavIcon {
  id: number,
  icono_activo: boolean,
}

interface ListaFavoritos {
  id: number,
}

@Component({
  selector: 'app-products',
  imports: [RouterLink, Price, ShowDiscount, InterestFree],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products : ProductInterface[] = []
  loading : boolean = true
  private productsService = inject(ProductsService)

  ngOnInit(){
    const products_observable = this.productsService.getProducts()
    products_observable.subscribe(
      {
        next: (products) => {
          this.products = products
          this.loading = false

          this.products.map(product => this.agregarEstadoFav(product.id));
        },
        error: (error) => {
          console.log("Se ha producido un error: " + error)
        }
      }
    )
  }

  stateFav: FavIcon[] = [];
  favList: ListaFavoritos[] = [];

  agregarEstadoFav(id: number) {
      this.stateFav.push(
        {
          id: id,
          icono_activo: false,
        }
      )
  }

  favoritosOnOff(id: number) {
    const registro = this.stateFav.find(registro => registro.id === id)

    if (registro) {
      registro.icono_activo = !registro.icono_activo

      if(registro.icono_activo === true) {
        this.favList.push(
          {
            id: id,
          }
        )
      } else {
        if (this.favList.find(elemento_seleccionado => elemento_seleccionado.id === id)) {
          const registro = this.favList.findIndex(elemento_seleccionado => elemento_seleccionado.id === id)
          this.favList.splice(registro, 1)
        } else {
          
        }
      }
      console.log('Lista de FAVORITOS:', this.favList)
    }
  }

  getFavState(id: number) {
    const registro = this.stateFav.find(registro => registro.id === id)

    if (registro) {
      return registro.icono_activo
    } else {
      return false
    }
  }
}
