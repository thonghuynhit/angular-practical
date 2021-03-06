import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { Bindingcomponent } from './bindingcomponent/bindingcomponent.component';
import { Eventbindingcomponent } from './eventbinding/eventbindingcomponent.component'

@NgModule({
  declarations: [
    AppComponent,
    SecondcomponentComponent,
    Bindingcomponent,
    Eventbindingcomponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
