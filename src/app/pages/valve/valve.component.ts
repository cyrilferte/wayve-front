import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valve',
  templateUrl: './valve.component.html',
  styleUrls: ['./valve.component.css']
})
export class ValveComponent implements OnInit {

  public detail_cards:any = [
    {title: 'position et mode', content: 'Ouvert', content2: 'Auto' },
    {title: 'Batterie', content: '98', icon: 'battery', unit: '%' },
    {title: 'Index total', content: '34 658', unit: 'L' },
    {title: "Temperature interne", content: '16,5', unit: '°C', content2: '21,5' },
    {title: 'alertes', content: '386' },
    {title: 'qualité du signal', content: '14', unit: 'db', icon: 'wifi' },
    {title: 'dernière purge', content: '250', unit: 'db', icon: 'wifi' },
    {title: "Temperature externe", content: '16,5', unit: '°C', content2: '21,5' },
  ]
  public action_cards:any = [
    {title: 'Action envoyer', content: 'Ouvert', content2: 'Auto' },
    {title: 'Actions restante', content: '98', icon: 'battery', unit: '%' },
    {title: 'état actuel', type: 'triple', content: '34 658', unit: 'L' },
    {title: "Action à programmer", content: '16,5', unit: '°C', content2: '21,5' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
