import { Component, OnInit } from '@angular/core';
import { adminFlight } from '../../models/models';

@Component({
  selector: 'app-grid-pnr',
  templateUrl: './grid-pnr.component.html',
  styles: []
})
export class GridPNRComponent implements OnInit {
  cols: any[];

  datos: adminFlight[] = [{
    proteccion: "prueba 1",
    vuelo: "prueba 2",
    reserva: "prueba 3",
    fechaVuelo: "prueba 4",
    horaVuelo: "prueba 5",
    motivo: "prueba 6",
    ruta: "prueba 7",
    fechaIdentificacion: "prueba 8",
    horaIdentificacion: "prueba 9",
    estado: "prueba 10",
    procesamiento: "prueba 11",
    contactabilidad: "prueba 12",
    vueltas: "prueba 13",
    medio: "prueba 14",
    canal:"prueba 15"
  },
    {
      proteccion: "prueba 1",
      vuelo: "prueba 2",
      reserva: "prueba 3",
      fechaVuelo: "prueba 4",
      horaVuelo: "prueba 5",
      motivo: "prueba 6",
      ruta: "prueba 7",
      fechaIdentificacion: "prueba 8",
      horaIdentificacion: "prueba 9",
      estado: "prueba 10",
      procesamiento: "prueba 11",
      contactabilidad: "prueba 12",
      vueltas: "prueba 13",
      medio: "prueba 14",
      canal: "prueba 15"
    }];

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'proteccion', header: 'Protección' },
      { field: 'vuelo', header: 'Vuelo' },
      { field: 'reserva', header: 'Reserva' },
      { field: 'fechaVuelo', header: 'Fecha de vuelo' },
      { field: 'horaVuelo', header: 'Hora de vuelo' },
      { field: 'motivo', header: 'Motivo de afectación' },
      { field: 'ruta', header: 'Ruta (OD)' },
      { field: 'fechaIdentificacion', header: 'Fecha de identificación en fuente' },
      { field: 'horaIdentificacion', header: 'Hora de identidicación en fuente' },
      { field: 'estado', header: 'Estado de la protección' },
      { field: 'procesamiento', header: 'Procesamiento' },
      { field: 'contactabilidad', header: 'Contactabilidad' },
      { field: 'vueltas', header: 'Vueltas' },
      { field: 'medio', header: 'Medio de notificación' },
      { field: 'canal', header: 'Canal de notificación' }
    ];
  }

}
