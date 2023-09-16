import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AssureProfileComponent } from './components/assure-profile/assure-profile.component';
import { AssureurProfileComponent } from './components/assureur-profile/assureur-profile.component';
import { AjoutModalComponent } from './components/ajout-modal/ajout-modal.component';
import { DetailDemandeComponent } from './components/detail-demande/detail-demande.component';
import { BannerComponent } from './components/banner/banner.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { ProposComponent } from './components/propos/propos.component';
import { ServicesComponent } from './components/our-services/services.component';
import { ContacComponent } from './components/contac/contac.component';


const routes: Routes = [
  { path: '**', component: ErrorComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AssureProfileComponent,
    AssureurProfileComponent,
    AjoutModalComponent,
    DetailDemandeComponent,
    BannerComponent,
    ErrorComponentComponent,
    ProposComponent,
    ServicesComponent,
    ContacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
