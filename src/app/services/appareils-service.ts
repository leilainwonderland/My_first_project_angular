export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'Eteint',
    },
    {
      name: 'Télévision',
      status: 'Allumer',
    },
    {
      name: 'Ordinateur',
      status: 'Eteint',
    },
  ];

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'Allumer';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'Eteint';
    }
  }

  switchOnOne(index: number){
      this.appareils[index].status = 'Allumer'
  }
  switchOffOne(index: number){
      this.appareils[index].status = 'Eteint'
  }
}
