import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-reexpedition',
  templateUrl: './reexpedition.component.html',
  styles: []
})
export class ReexpeditionComponent implements OnInit {
  env = environment;

  constructor() { }

  ngOnInit() {
      window.location.href = this.env.reexpedicionesUrl + '?uid=' + sessionStorage.getItem('user_id');
  }
}
