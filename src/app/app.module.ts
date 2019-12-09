import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { InicialComponent } from './inicial/inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    /* --------- Componentes do Angular Material --------- */
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
    /* --------- Fim do componentes Do Angular Material ---------- */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
