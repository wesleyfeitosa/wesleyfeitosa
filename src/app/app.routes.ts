import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';

const appRoutes: Routes = [
    { path: '', component: InicialComponent },
];

export const routing = RouterModule.forRoot(appRoutes);