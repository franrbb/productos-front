import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: Producto[];

  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this._productoService.getProductos().subscribe(resp => {
      this.productos = resp;
      console.log(resp);
    })
  }

}
