import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  list = [
    {
      name: 'Drip Brew.',
      desc: 'Ground coffee is added to a brew basket and placed in an automatic coffee machine for this brewing style.'
    },
    {
      name: 'Pour Over.',
      desc: 'This brewing style is achieved by pouring boiling water slowly through coffee grounds as they sit in a filter basket.'
    },
    {
      name: 'Cold Brew.',
      desc: 'For this method, coarsely ground coffee is placed in room temperature water and allowed to steep for an extended period of time.'
    },
    {
      name: 'Espresso.',
      desc: 'To achieve an espresso brew, pressurized hot water is passed through a filter containing finely ground dark roasted beans using a cappuccino or espresso machine.'
    },
    {
      name: 'Ristretto. ',
      desc: 'Brewed in a similar method to the espresso, pressurized water is passed through the coffee grounds.'
    }

  ]

  ngOnInit(): void {
  }

}
