import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonPremierComponentComponent } from './mon-premier-component/mon-premier-component.component';
import { AppareilComponent } from './appareil/appareil.component';

import { AppareilService } from './services/appareils-service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';

const appRoute: Routes = [
  {path: 'appareils', component: AppareilViewComponent},
  {path:'appareils/:id', component: SingleAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AppareilViewComponent},
];

@NgModule({
  declarations: [AppComponent, MonPremierComponentComponent, AppareilComponent, AuthComponent, AppareilViewComponent, SingleAppareilComponent],
  imports: [BrowserModule, NgbModule, FormsModule, RouterModule.forRoot(appRoute)],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
