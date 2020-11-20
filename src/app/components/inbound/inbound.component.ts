import { Component, OnInit, ViewChild } from '@angular/core';
import { CallComponent } from '../call/call.component';
import { headerInfo } from '../../models/models';


@Component({
  selector: 'app-inbound',
  templateUrl: './inbound.component.html',
  styles: []
})
export class InboundComponent implements OnInit {
  pnr: string;
  @ViewChild('paramPNR') searchPNR: CallComponent;

  description: string;
  affectationType: string;
  notified: string;
  notifiedDate: string;
  isValidPNR: string;
  isValidate: boolean;

  constructor() {
  }

  ngOnInit() {
    sessionStorage.setItem('module', 'inbound');
  }

  get_Search() {
    this.isValidate = true;
    if (this.pnr == "" || this.pnr == undefined) {
      this.isValidPNR = "is-invalid";
      this.isValidate = false;
    } else {
      this.isValidPNR = "";
    }

    if (this.isValidate) {
      this.searchPNR.get_PNR(this.pnr);
    }
  }

  getHeader(header: headerInfo) {
    if (header != null) {
      this.description = header.description;
      this.affectationType = header.affectationType;
      this.notified = header.notified;
      this.notifiedDate = header.notifiedDate;
    } else {
      this.description = '';
      this.affectationType = '';
      this.notified = '';
      this.notifiedDate = '';
      this.pnr = '';
    }
  }
}
