import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { SobreComponent } from './sobre/sobre.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'sobre', component: SobreComponent},
    {path: '', component: HomeComponent}
]