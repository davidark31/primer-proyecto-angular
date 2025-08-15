import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { Home } from '../pages/home/layout/home.component';
import { InventarioComponent } from '../pages/inventario/inventario.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { PokemonComponent } from '../pages/pokemon/layout/pokemon.component';


export const LayoutRoutes: Routes = [
    { path: '', component: LayoutComponent,
    children:[
        {path:'', component:Home},
        {path:'inventario', component:InventarioComponent},
        {path:'contact', component:ContactComponent},
        {path:'pokemon', component:PokemonComponent},
    ]
}

];

