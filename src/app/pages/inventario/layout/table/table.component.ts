import { Component, ViewChild } from '@angular/core';
import { Producto } from '../../../../shared/interfaces/productos.interface';
import { productosMocks } from '../../../../shared/mocks/productos.mocks';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  dataSource = new MatTableDataSource<Producto>(productosMocks);
  columnas: string[] = ['ERP','EAN','TIPO', 'SKU', 'MEDIDA'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
  }
}
