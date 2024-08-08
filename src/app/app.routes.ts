
import { Routes } from '@angular/router';
import { DisplayPackageComponent } from './components/display-package/display-package.component';
import { HomeComponetComponent } from './components/home-componet/home-componet.component';

export const routes: Routes = [
    { path: '', component: HomeComponetComponent },
    { path: 'view-details', component: DisplayPackageComponent }
];
