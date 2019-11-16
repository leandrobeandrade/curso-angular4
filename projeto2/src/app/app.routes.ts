import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { SobreComponent } from './sobre/sobre.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'diversao', component: DiversaoComponent},
    {path: 'oferta', component: OfertaComponent},
    {path: 'oferta/:id', component: OfertaComponent},
    {path: 'sobre', component: SobreComponent},
    {path: '', component: HomeComponent}
]