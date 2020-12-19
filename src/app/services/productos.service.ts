import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  url = 'http://localhost:3000/productos';
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  listar() {
    return this.http.get(`${this.url}/list`);
  }
  // tslint:disable-next-line:typedef
  nuevo(producto: object) {
    return this.http.post(`${this.url}/create`, producto);
  }
  // tslint:disable-next-line:typedef
  eliminar(codigo: string) {
    return this.http.delete(`${this.url}/delete/${codigo}`);
  }
  // tslint:disable-next-line:typedef
  mostrar(codigo: string) {
    return this.http.get(`${this.url}/list/${codigo}`);
  }
  // tslint:disable-next-line:typedef
  actualizar(producto: object) {
    console.log('Producto', producto);
    return this.http.put(`${this.url}/update`, producto);
  }
}
