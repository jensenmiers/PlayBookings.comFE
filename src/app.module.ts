
////////////////////////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { LocationsComponent } from './locations/locations.component';
// import { LocationService } from './services/location.service';

@NgModule({
  declarations: [
    AppComponent,
    // LocationsComponent  // Declare your LocationsComponent
    // Any other components that you generate will also need to be declared here
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Import HttpClientModule if your service will make HTTP calls
    AppRoutingModule  // Your routing module if you are using routing
    // Any other modules that you create or import will also need to be included here
  ],
  providers: [
    // LocationService // Provide your LocationService
    // Any other services you create will also need to be provided here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


//////////////
/////////////
/////////////
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // other components go here
  ],
  imports: [
    BrowserModule
    // other modules go here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
