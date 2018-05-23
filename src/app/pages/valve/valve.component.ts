import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-valve',
  templateUrl: './valve.component.html',
  styleUrls: ['./valve.component.css']
})
export class ValveComponent implements OnInit {

  public detail_cards:any = [
    {title: 'Position et mode', type: 'double-top', content1: 'Position', value1: 'Ouvert', content2: 'mode', value2: 'Automatique'  },
    {title: 'Batterie', content: '98', icon: 'battery_charging_full', unit: '%' },
    {title: 'Index total', content: '34 658', unit: 'L' },
    {title: "Temperature interne",  unit: '°C', type: 'double-top', content1: 'Position', value1: '16,5', content2: 'mode', value2: '21,5'  },
    {title: 'Alertes', type: 'double-top', content1: 'mois actuel', value1: '6', content2: 'nombre total', value2: '16'   },
    {title: 'Qualité du signal', content: '14', unit: 'db', icon: 'wifi' },
    {title: 'Dernière purge', content: '250', unit: 'L', details: Date() },
    {title: "Temperature externe",  unit: '°C', type: 'double-top', content1: 'Position', value1: '16,5', content2: 'mode', value2: '21,5'   },
  ]
  public action_cards:any = [
    {title: 'Actions envoyer', type: 'single-top', content1: 'mois de janvier', value1: '3' },
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

  public historic =[
    {id: '1', name: 'Hydrogen', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date()},
    {id: '2', name: 'Helium', type: 'v2', mode: 'automatique', position: 'ouvert', last_purge_date: Date()},
    {id: '3', name: 'Lithium', type: 'v2', mode: 'automatique', position: 'ouvert', last_purge_date: Date()},
    {id: '4', name: 'Beryllium', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date()},
    {id: '5', name: 'Boron', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date()},
    {id: '6', name: 'Carbon', type: 'v3', mode: 'automatique', position: 'ouvert', last_purge_date: Date()},
    {id: '7', name: 'Nitrogen', type: 'v3', mode: 'automatique', position: 'ouvert', last_purge_date: Date()},
    {id: '8', name: 'Oxygen', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date()},
    {id: '9', name: 'Fluorine', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date()},
    {id: '10', name: 'Neon', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date()},
  ];

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
  constructor() { }

  ngOnInit() {
  }

}
