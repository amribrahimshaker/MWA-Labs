import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListElementsComponent } from './list-elements/list-elements.component';
import { UpperDirective } from './upper.directive';
import { MyvisibilityDirective } from './myvisibility.directive';
import { MycolorDirective } from './mycolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListElementsComponent,
    UpperDirective,
    MyvisibilityDirective,
    MycolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
