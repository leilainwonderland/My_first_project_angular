import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareils-service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.sass']
})
export class SingleAppareilComponent implements OnInit {

  name: string | undefined = 'Appareil';
  status: string | undefined = 'Statut';

  constructor(private appareilService: AppareilService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id)?.name;
    this.status = this.appareilService.getAppareilById(+ id)?.status;
  }

}
