import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
//{ path: 'path/:routeParam', component: MyComponent },
//{ path: 'staticPath', component: ... },
//{ path: 'oldPath', redirectTo: '/staticPath' },
//{ path: ..., component: ..., data: { message: 'Custom' }

export default appRoutes;