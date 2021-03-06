import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);


