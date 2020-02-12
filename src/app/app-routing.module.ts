import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import appRoutes from './app-routing.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
