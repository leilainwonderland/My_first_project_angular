import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.sass']
})
export class AppareilComponent implements OnInit {

  appareilName = 'Machine à laver';
  appareilStatus = 'Èteint';

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){//Méthode
    return this.appareilStatus
  }
}
