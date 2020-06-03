import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriClientComponent } from './inscri-client/inscri-client.component';
import { InscriFreelancerComponent } from './inscri-freelancer/inscri-freelancer.component';

import { LoginClientComponent } from './login-client/login-client.component';
import { LoginFreelancerComponent } from './login-freelancer/login-freelancer.component';

import { AcceuilComponent } from './acceuil/acceuil.component';

import { ChoixComponent } from './choix/choix.component';

const routes: Routes = [
  
  { path: '', component: AcceuilComponent },
  { path: 'LoginClient', component: LoginClientComponent },
  { path: 'choix', component: ChoixComponent },
  { path: 'LoginFreelancer', component: LoginFreelancerComponent },
  { path: 'inscriClient', component: InscriClientComponent },
  { path: 'inscriFreelancer', component: InscriFreelancerComponent},

   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
