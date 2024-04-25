import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

export const routes: Routes = [
    { path: 'login',component: LoginComponent },
    { path: 'register',component: RegisterComponent },
    { path: '', component: NavBarComponent},
    { path: 'property-detail',component: PropertyDetailComponent}
];
