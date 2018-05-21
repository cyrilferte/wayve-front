import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-valve',
  templateUrl: './valve.component.html',
  styleUrls: ['./valve.component.css']
})
export class ValveComponent implements OnInit {

  public detail_cards:any = [
    {title: 'position et mode', type: 'double-top', content1: 'Position', value1: 'Ouvert', content2: 'mode', value2: 'Automatique'  },
    {title: 'Batterie', content: '98', icon: 'battery_charging_full', unit: '%' },
    {title: 'Index total', content: '34 658', unit: 'L' },
    {title: "Temperature interne",  unit: '°C', type: 'double-top', content1: 'Position', value1: '16,5', content2: 'mode', value2: '21,5'  },
    {title: 'alertes', type: 'double-top', content1: 'mois actuel', value1: '6', content2: 'nombre total', value2: '16'   },
    {title: 'qualité du signal', content: '14', unit: 'db', icon: 'wifi' },
    {title: 'dernière purge', content: '250', unit: 'L', details: Date() },
    {title: "Temperature externe",  unit: '°C', type: 'double-top', content1: 'Position', value1: '16,5', content2: 'mode', value2: '21,5'   },
  ]
  public action_cards:any = [
    {title: 'Action envoyer', type: 'single-top', content1: 'mois de janvier', value1: '3' },
    {title: 'Actions restante', type: 'single-top', content1: 'mois de janvier', value1: '2' },
    {title: 'état actuel', type: 'triple-card', content1: 'mois actuel', value1: '6', content2: 'nombre total', value2: '16', content3: 'nombre total', value3: '16' },
    {title: "Action à programmer", content: '16,5', unit: '°C', content2: '21,5' },
  ]
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
  constructor() { }

  ngOnInit() {
  }

}
