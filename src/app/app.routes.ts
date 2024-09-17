
import { Routes } from '@angular/router';
import { DisplayPackageComponent } from './components/display-package/display-package.component';
import { HomeComponetComponent } from './components/home-componet/home-componet.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsPageComponent } from './components/contact-us-page/contact-us-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponetComponent },  // Default route (home page)
    { path: 'view-details', component: DisplayPackageComponent },
    { path: 'about-us', component: AboutUsComponent },  // Route for Destinations page
    { path: 'plans', component: PackagesComponent },  // Route for Destinations page
    { path: 'contact', component: ContactUsPageComponent },  // Route for Destinations page

    { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirect any invalid route to home

];
