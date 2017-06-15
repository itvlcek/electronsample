import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ShipmentComponent } from './components/shipment/shipment.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { DataService } from './app.service';
    
import { AppRoutingModule } from './app.routing';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ShipmentComponent,
    HomeComponent
  ],
  providers: [
      DataService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
