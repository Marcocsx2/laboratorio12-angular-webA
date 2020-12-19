import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular14';
  lista: any = [];
  prod: any = {
    id: '',
    nombre: '',
    precio: '',
    imagen: '',
  };

  constructor(private productosServicio: ProductosService) {}
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): any {
    this.recuperarTodos();
  }
  recuperarTodos(): any {
    this.productosServicio.listar().subscribe((result: any) => {
      console.log(result);
      this.lista = result.data;
    });
  }
  nuevo(): any {
    this.productosServicio.nuevo(this.prod).subscribe((result) => {
      this.limpiar();
      this.recuperarTodos();
    });
  }

  eliminar(codigo: string): any {
    if (!confirm('Esta seguro que desea eliminar este registro?')) {
      return;
    }
    this.productosServicio.eliminar(codigo).subscribe((result) => {
      console.log('Eliminar', result);
      this.recuperarTodos();
    });
  }

  actualizar(): any {
    this.productosServicio.actualizar(this.prod).subscribe((result: any) => {
      console.log('Actualizar', result);

      this.limpiar();
      this.recuperarTodos();
    });
  }

  mostrar(codigo: string): any {
    this.productosServicio.mostrar(codigo).subscribe((result: any) => {
      console.log('Mostrar', result);
      this.prod = result.data;
    });
  }

  hayRegistros(): any {
    return true;
  }
  limpiar(): any {
    this.prod = {
      _id: null,
      descripcion: null,
      precio: null,
    };
  }
}
