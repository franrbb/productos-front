import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlEndPoint: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint);
  }

  getProducto(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${this.urlEndPoint}/detalle/${id}`);
  }
}
