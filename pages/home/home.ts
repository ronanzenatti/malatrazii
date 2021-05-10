import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GodzillaPage } from '../filmes/godzilla/godzilla';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  paginaGodzilla = GodzillaPage;

  constructor(public navCtrl: NavController) {

  }

}
