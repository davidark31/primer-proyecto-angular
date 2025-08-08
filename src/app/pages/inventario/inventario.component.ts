import { Component, OnInit } from '@angular/core';
import { Producto } from '../../shared/interfaces/productos.interface';
import { CommonModule } from '@angular/common';
import { productosMocks } from '../../shared/mocks/productos.mocks';
import { TableComponent } from "./layout/table/table.component";
import { MatDialog } from '@angular/material/dialog';
import { modalConfirm } from '../../shared/layout/modal-confirm.component';

@Component({
  selector: 'app-inventario',
  imports: [CommonModule, TableComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss',
})
export class InventarioComponent implements OnInit{


  constructor(private dialog: MatDialog) {
  }

  rol:string|null="";
  isAdmin:boolean=false;

  // llena los productos con los datos de productosMocks
  productos: Producto[]=productosMocks
  
  //METODO que se ejecuta al iniciar 
  ngOnInit(){
    this.rol=localStorage.getItem('rol');
  }

  //deja en vacio los productos
  limpiar(){
    this.productos=[];
  }

  abrirModal() {
    const dialogRef = this.dialog.open(modalConfirm, {
      data: {
        mensaje: '¿Desea eliminar los productos?',
        btnNombre: 'Confirmar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Si el usuario confirma
        this.limpiar();
        console.log('Productos eliminados');
      } else {
        console.log('Acción cancelada');
      }
    });
  }
}
