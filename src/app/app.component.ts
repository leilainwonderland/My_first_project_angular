import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareils-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  isAuth = false;

  lastUpdate: Promise<Date> = new Promise(
   (resolve, rejects) => {
      const date = new Date();

      setTimeout(
       () => {
          resolve(date)
        }, 2000
      );
    }
  )
  appareils!: any[]

  constructor(private appareilService: AppareilService) {
    setTimeout(
    () => {
        this.isAuth = true;
      }, 4000
    );
  };
  ngOnInit(): void {
    this.appareils = this.appareilService.appareils
  }

  onAllumer(){
    this.appareilService.switchOnAll()
  };
  OnEteindre(){
    this.appareilService.switchOffAll()
  }
};

