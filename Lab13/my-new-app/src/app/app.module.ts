import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { myRoutes } from './app-routing.module';
// import { myRoutes } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FarmsComponent } from './farms/farms.component';
import { DbService } from './db.service';
import { FarmDetailsComponent } from './farm-details/farm-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FarmsComponent,
    FarmDetailsComponent
  ],
  imports: [
    BrowserModule,
    myRoutes,
    // AppRoutingModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
