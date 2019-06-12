import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { Mapa1Page } from '../mapa1/mapa1';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Mapa1Page;
  tab3Root = 'Mapa3Page';
  tab4Root = 'Mapa4Page';

  constructor() {

  }
}
