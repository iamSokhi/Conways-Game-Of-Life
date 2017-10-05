import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { ControlsComponent } from './controls.component';
import { GridComponent } from './grid.component';
import { TipComponent } from './tip.component';
import { PlayService } from './play.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    GridComponent,
    TipComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule.forRoot()
  ],
  providers: [
    PlayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
