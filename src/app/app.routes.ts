import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OutboundComponent } from './components/outbound/outbound.component';
import { InboundComponent } from './components/inbound/inbound.component';
import { SiteComponent } from './components/site/site.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth-guard';
//import { AuthChildrenGuard } from './guards/auth-children-guard';
import { SearchComponent } from './components/search/search.component';
import { ReexpeditionComponent } from './components/reexpedition/reexpedition.component';
import { IropsvalidationsComponent } from './components/iropsvalidations/iropsvalidations.component';
import { IropsvalidationsDetailsComponent } from './components/iropsvalidations-details/iropsvalidations-details.component';

const APP_ROUTES: Routes = [
  {
    path: 'site', component: SiteComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent, outlet: 'route1' },
      { path: 'home', component: HomeComponent, outlet: 'route1' },
      { path: 'outbound', component: OutboundComponent, outlet: 'route1' },
      //{ path: 'outbound', component: OutboundComponent, outlet: 'route1', canActivate: [AuthChildrenGuard] },
      { path: 'inbound', component: InboundComponent, outlet: 'route1' },
      { path: 'search', component: SearchComponent, outlet: 'route1' },
      { path: 'reexpedition', component: ReexpeditionComponent, outlet: 'route1' },
      { path: 'iropsvalidations', component: IropsvalidationsComponent, outlet: 'route1' },
      { path: 'iropsvalidationsdetails/:id', component: IropsvalidationsDetailsComponent, outlet: 'route1' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
