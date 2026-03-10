import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing';
import { ProductDetailComponent } from './features/product-detail/product-detail';

export const routes: Routes = [

    {path: '', component: LandingComponent},
    { path: 'producto/:id', component: ProductDetailComponent },


    { path: '**', redirectTo: '' }
];
