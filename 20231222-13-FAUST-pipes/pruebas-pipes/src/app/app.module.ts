import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimePipe } from './prime.pipe';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ToStringPipePipe } from './to-string-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrimePipe,
    PruebasComponent,
    ToStringPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
