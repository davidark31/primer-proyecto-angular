import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    constructor(private readonly _ruteo:Router){      
    }

  guardarRol(rol:string) {
    localStorage.setItem('rol', rol);
    this._ruteo.navigate(["inventario"])
  } 
}
