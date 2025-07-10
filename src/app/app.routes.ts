import { Routes } from '@angular/router';
import { Products } from './products/products';
import { ProductDetails } from './product-details/product-details';
import { Login } from './login/login';
import { Register } from './register/register';
import { NotFound } from './not-found/not-found';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {
        path : '',
        component : Products
    },
    {
        path : 'product_details/:product_id',
        component : ProductDetails
    },
    {
        path : 'iniciar_sesion',
        component : Login
    },
    {
        path : 'registro',
        component : Register
    },
    {
        path : 'contacto',
        component : Contact
    },
    {
        path : '**',
        component : NotFound
    },
];
