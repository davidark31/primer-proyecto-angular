import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonHomeComponent } from '../components/buttonHome/buttonHome.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule,ButtonHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class Home {
    constructor(private readonly _ruteo:Router){      
    }

  guardarRol(rol:string) {
    localStorage.setItem('rol', rol);
    this._ruteo.navigate(["inventario"])
  } 
}
