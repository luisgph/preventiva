import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: []
})
export class GridComponent implements OnInit {
  datos: Datos[];
  cols: any[];

  constructor(private http: HttpClient) { }

  
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((data: any[]) =>{ 
      this.datos = data;
    });

  this.cols = [
    { field: 'name', header: 'Nombre' },
    { field: 'username', header: 'Usuario' },
    { field: 'email', header: 'Correo' },
    { field: 'phone', header: 'Teléfono' },
    { field: 'website', header: 'Sitio web' }
  ];
  }

}

export interface Datos {
  name:string;
  username:string;
  email:string;
  phone:string;
  website:string;
  // company:Compania;
}

export interface Compania{
  name:string;
  catchPhrase:string;
  bs:string;
}
