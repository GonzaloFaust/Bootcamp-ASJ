import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { LosSinsoComponent } from './los-sinso/los-sinso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HayTablaComponent } from './hay-tabla/hay-tabla.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    LosSinsoComponent,
    FormularioComponent,
    HayTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
