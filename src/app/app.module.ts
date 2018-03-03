import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { appRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
