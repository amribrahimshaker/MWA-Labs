import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
// use ReactiveFormsModule Only when using Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserServiceService } from './user-service.service';

import { HttpClientModule } from '@angular/common/http';
import { ThankyouComponent } from './thankyou/thankyou.component';

import { myRoutes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    myRoutes // add it to imports
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
