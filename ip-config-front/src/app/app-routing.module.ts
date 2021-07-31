import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component'; 
import { IpsComponent } from './components/ips/ips.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: '', component: IpsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: SigninComponent},
  {path: 'register', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
