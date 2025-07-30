import { Component, OnInit } from '@angular/core';
import { Producto } from '../../shared/interfaces/productos.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario',
  imports: [CommonModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss',
})
export class InventarioComponent implements OnInit{

  rol:string|null="";
  isAdmin:boolean=false;

  productos: Producto[]=[{
    nombre:"Nescafe tradicion 24x170g",
    cantidad:32
  },{
    nombre:"Leche Evaporada  48x386g",
    cantidad:983
  },{
    nombre:"Kuky Clasica 30x126g",
    cantidad:489
  },{
    nombre:"Chocolate Trencito 21x80g",
    cantidad:329
  },{
    nombre:"Alteza Helado 24x125g",
    cantidad:4458
  }]
  
  ngOnInit(){
    this.rol=localStorage.getItem('rol');
  }

  limpiar(){
    this.productos=[];
  }


}
