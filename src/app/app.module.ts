import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { ToasterService } from '../services/toaster.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProvinceList } from '../providers/lists/province';
import { DestinationList } from '../providers/lists/destination';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'

import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
import { ExcelService } from '../services/excel.service';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxMaskModule.forRoot(),
    GoogleChartsModule.forRoot(),
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService,
    ToasterService,
    AuthService,
    ProvinceList,
    DestinationList,
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
