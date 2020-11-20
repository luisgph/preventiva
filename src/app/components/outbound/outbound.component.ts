import { Component, ViewChild, AfterContentInit, OnInit } from '@angular/core';
import { CallComponent } from '../call/call.component';
import { headerInfo, stateManagement, messageStateManagement, messageChangeStateManagement, messageChangeUserStateManagementToDisconect } from '../../models/models';
import { ApiService } from '../../services/api.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-outbound',
  templateUrl: './outbound.component.html',
  styles: []
})
export class OutboundComponent implements OnInit {
  reservationNumber: string;
  description: string;
  affectationType: string;
  @ViewChild('paramMenu') paramOption: CallComponent;
  objState: messageStateManagement;
  loading: boolean;
  state_id: string;

  constructor(private apiService: ApiService, private _tokenService: TokenService) {
  }

  ngOnInit() {
    sessionStorage.setItem('module', 'outbound');
    this.state_id = sessionStorage.getItem('stateManagement_id');
    this.paramOption.getOutbound(this.state_id);
  }

  getHeader(header: headerInfo) {
    if (header != null) {
      this.description = header.description;
      this.affectationType = header.affectationType;
      this.reservationNumber = header.reservationNumber;
    } else {
      this.description = '';
      this.affectationType = '';
      this.reservationNumber = '';
    }
  }
}
