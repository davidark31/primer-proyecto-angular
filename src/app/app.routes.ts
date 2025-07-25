import { Routes } from '@angular/router';
import { Inventario } from './pages/inventario/inventario';
import { Home } from './pages/home/home';

export const routes: Routes = 
[{ path: '', component: Home },
{ path: 'inventario', component: Inventario }
];

