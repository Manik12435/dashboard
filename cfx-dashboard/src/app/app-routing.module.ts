import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: environment.routerPath.login, component: LoginComponent},
  { path: environment.routerPath.landing, component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
