import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareils-service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.sass']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName!: string;
  @Input() appareilStatus! : string;
  @Input() indexAppareil!: number;
  @Input() id!: number;

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus
  }

  getColor(){
    if (this.appareilStatus === 'Allumer'){
      return 'green';
    }else{
      return 'red';
    }
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexAppareil)
  }
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexAppareil)
  }
}
