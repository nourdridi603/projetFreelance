import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContratComponent } from './contrat/contrat.component';
import { ProfilFreelancerComponent } from './profil-freelancer/profil-freelancer.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { InscriClientComponent } from './inscri-client/inscri-client.component';
import { InscriFreelancerComponent } from './inscri-freelancer/inscri-freelancer.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { LoginFreelancerComponent } from './login-freelancer/login-freelancer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChoixComponent } from './choix/choix.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AcceuilComponent,
    ContratComponent,
    ProfilFreelancerComponent,
    ProfilClientComponent,
    InscriClientComponent,
    InscriFreelancerComponent,
    LoginClientComponent,
    LoginFreelancerComponent,
    ChoixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
