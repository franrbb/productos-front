import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  producto: Producto;

  constructor(private activatedRoute: ActivatedRoute, private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id'];

      if(id){
        this._productoService.getProducto(id).subscribe( resp => {
          this.producto = resp;
          console.log(resp);
        });
      }
    });
  }

}
