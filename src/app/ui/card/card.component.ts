import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public card;
  chart = new Chart(<any>{
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: null,
        title: null,
        height: 100,
        type: 'pie'
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 55,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 35
        }, {
            name: 'Firefox',
            y: 15
        }, {
            name: 'Other',
            y: 5
        }]
    }]
    });

  // add point to chart serie
  // add() {
  //   this.chart.addPoint(Math.floor(Math.random() * 10));
  // }
  constructor() { }

  ngOnInit() {
  }

}
