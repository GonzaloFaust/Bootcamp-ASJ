import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListVideosComponent } from './components/list-videos/list-videos.component';
import { ShowVideoComponent } from './components/show-video/show-video.component';
import { FormVideoComponent } from './components/form-video/form-video.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { safeUrlPipe } from './safe-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListVideosComponent,
    ShowVideoComponent,
    FormVideoComponent,
    safeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
