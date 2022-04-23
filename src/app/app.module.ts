import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonPremierComponentComponent } from './mon-premier-component/mon-premier-component.component';
import { AppareilComponent } from './appareil/appareil.component';

import { AppareilService } from './services/appareils-service';

@NgModule({
  declarations: [AppComponent, MonPremierComponentComponent, AppareilComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [AppareilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
