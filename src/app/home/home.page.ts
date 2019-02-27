import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav:NavController){

  }

  flutter(){
    this.nav.navigateForward('flutter');
  }

  clima(){
    this.nav.navigateForward('clima');
  }

  panda(){
    this.nav.navigateForward('panda');
  }
  tabs(){
    this.nav.navigateForward('menu');
  }

  randomly(){
    this.nav.navigateForward('randomly');
  }

}
