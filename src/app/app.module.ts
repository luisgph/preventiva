import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { FormatoPipe } from './pipe/formato.pipe';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxIntlTelInputModule } from "ngx-intl-tel-input"; 

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { CustomerService } from '../app/services/customer.service';
import { ApiService } from '../app/services/api.service';
import { AuthGuard } from './guards/auth-guard';
import { ErrorInterceptor } from './helpers/error-interceptor';
//import { AuthChildrenGuard } from './guards/auth-children-guard';
import { TokenService } from '../app/services/token.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { OutboundComponent } from './components/outbound/outbound.component';
import { InboundComponent } from './components/inbound/inbound.component';
import { CallComponent } from './components/call/call.component';
import { LoginComponent } from './components/login/login.component';
import { SiteComponent } from './components/site/site.component';
import { SearchComponent } from './components/search/search.component';
import { GridComponent } from './components/grid/grid.component';
import { GridPNRComponent } from './components/grid-pnr/grid-pnr.component';
import { GridVueloProteccionComponent } from './components/grid-vuelo-proteccion/grid-vuelo-proteccion.component';
import { ReexpeditionComponent } from './components/reexpedition/reexpedition.component';
import { IropsvalidationsComponent } from './components/iropsvalidations/iropsvalidations.component';
import { IropsvalidationsDetailsComponent } from './components/iropsvalidations-details/iropsvalidations-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OutboundComponent,
    InboundComponent,
    CallComponent,
    LoginComponent,
    SiteComponent,
    SearchComponent,
    GridComponent,
    FormatoPipe,
    GridPNRComponent,
    GridVueloProteccionComponent,
    ReexpeditionComponent,
    IropsvalidationsComponent,
    IropsvalidationsDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    TooltipModule,
    ProgressSpinnerModule,
    BsDatepickerModule.forRoot(),
    NgxIntlTelInputModule 
  ],
  providers: [
    AuthGuard,
  //  AuthChildrenGuard,
    ApiService,
    CustomerService,
    TokenService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
