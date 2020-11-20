import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ViewChild } from '@angular/core';
import { CallComponent } from '../call/call.component';
import { headerInfo } from '../../models/header';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-iropsvalidations-details',
  templateUrl: './iropsvalidations-details.component.html',
  styles: []
})
export class IropsvalidationsDetailsComponent implements OnInit {
  id: string;
  @ViewChild('paramValidators') param: CallComponent;
  reservationNumber: string;
  description: string;
  affectationType: string;
  motiveDescription: string;
  flightNumber: string;
  flightDate: Date;

  constructor( private activateRoute: ActivatedRoute ) {
   
   }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.param.getValidators(this.id);
  }

  getHeader(header: headerInfo) {
    if (header != null) {
      this.description = header.description;
      this.affectationType = header.affectationType;
      this.reservationNumber = header.reservationNumber;
      this.motiveDescription = header.motiveDescription;
      this.flightNumber = header.flightNumber;
      this.flightDate = header.flightDate;
    } else {
      this.description = '';
      this.affectationType = '';
      this.reservationNumber = '';
      this.motiveDescription = '';
      this.flightNumber = '';
      this.flightDate = null;
    }
  }
}
