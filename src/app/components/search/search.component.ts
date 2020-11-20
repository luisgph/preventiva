import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {
  flagInicial: boolean = true;
  flagPNR: boolean = false;
  flagVuelo: boolean = false;
  colorTheme = 'theme-red';
  bsConfig: Partial<BsDatepickerConfig>;
  isValidOpcion: string;
  isValidDate: string;
  opcionBuscar: string = '0';
  valorBuscar: string;
  isValidate: boolean;
  dateRangePickerModel: Date[];

  constructor(private localeService: BsLocaleService) {
    localeService.use('es');
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme, dateInputFormat: 'DD/MM/YYYY' });
  }

  ngOnInit() {
  }

  search() {
    this.isValidate = true;
    if (this.valorBuscar == "" || this.valorBuscar == undefined) {
      this.isValidOpcion = "is-invalid";
      this.isValidate = false;
    } else {
      this.isValidOpcion = "";
    }

    if (this.dateRangePickerModel == undefined) {
      this.isValidDate = "is-invalid";
      this.isValidate = false;
    } else {
      this.isValidDate = "";
    }

    if (this.isValidate) {
      //PNR
      if (this.opcionBuscar == "1") {
        this.flagInicial = false;
        this.flagPNR = true;
        this.flagVuelo = false;
      } else if (this.opcionBuscar == "2") {
        this.flagInicial = false;
        this.flagPNR = false;
        this.flagVuelo = true;
      }
    }
  }

  getTipoConsulta() {
    if (this.opcionBuscar == "0") {
      this.valorBuscar = "";
      this.dateRangePickerModel = undefined;
      this.flagInicial = true;
      this.flagPNR = false;
      this.flagVuelo = false;
    }
  }
}
