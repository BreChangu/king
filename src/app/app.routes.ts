import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing';
import { ProductDetailComponent } from './features/product-detail/product-detail';
import { NosotrosComponent } from './features/nosotros/nosotros';
import { CatalogoComponent } from './features/catalogo/catalogo';

export const routes: Routes = [

    {path: '', component: LandingComponent},
    { path: 'producto/:id', component: ProductDetailComponent },
    { path: 'nosotros', component: NosotrosComponent },
    {path: "catalogo", component: CatalogoComponent},

    { path: '**', redirectTo: '' }
];
