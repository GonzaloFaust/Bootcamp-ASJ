import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RegProductoComponent } from './components/reg-producto/reg-producto.component';
import { VistaProductoComponent } from './components/vista-producto/vista-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    RegProductoComponent,
    VistaProductoComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
