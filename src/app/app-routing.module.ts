import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AssureProfileComponent } from './components/assure-profile/assure-profile.component';
import { AjoutModalComponent } from './components/ajout-modal/ajout-modal.component';
import { DetailDemandeComponent } from './components/detail-demande/detail-demande.component';
import { AssureurProfileComponent } from './components/assureur-profile/assureur-profile.component';
import { ServicesComponent } from './components/our-services/services.component';
import { ProposComponent } from './components/propos/propos.component';
import { ContacComponent } from './components/contac/contac.component';


const routes: Routes = [
  // http://localhost:4200/
  { path: "", component: HomeComponent },
  // http://localhost:4200/login
  { path: "login", component: LoginComponent },
  // http://localhost:4200/register
  { path: "signup", component: RegisterComponent },
  // http://localhost:4200/assure-profile
  { path: "assure-profile", component: AssureProfileComponent },
  // http://localhost:4200/assureur-profile
  { path: "assureur-profile", component: AssureurProfileComponent },
  // http://localhost:4200/ajout-modal
  { path: "ajout-modal", component: AjoutModalComponent },
  // http://localhost:4200/detail-demande
  { path: "detail-demande/:id", component: DetailDemandeComponent },
    // http://localhost:4200/nos-services
    { path: "nos-services", component: ServicesComponent },
      // http://localhost:4200/propos
  { path: "propos", component: ProposComponent },
    // http://localhost:4200/contact
    { path: "contacter-nous", component: ContacComponent },
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
