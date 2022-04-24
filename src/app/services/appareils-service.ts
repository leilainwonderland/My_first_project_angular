export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'Eteint',
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'Allumer',
    },
    { 
      id: 3,
      name: 'Ordinateur',
      status: 'Eteint',
    },
  ];

  getAppareilById(id : number){
    const appareil = this.appareils.find(
      (appareilObjec) => {
        return appareilObjec.id === id
      }
    );
    return appareil;
  }

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
