import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public card;
  public chart = new Chart(<any>{
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
        name: 'valve type',
        colorByPoint: true,
        data: []
    }]
    });

  // add point to chart serie
  // add() {
  //   this.chart.addPoint(Math.floor(Math.random() * 10));
  // }
  constructor() { }

  ngOnInit() {
    if (this.card.content === 'pieChart' && this.card.data){
      let types_list = this.sortValveType(this.card.data);
      this.generateChart(types_list, this.card.data.length);

    }
  }

  public sortValveType(valve_data){
    let types = [];

    for (let valve of valve_data){
         types[valve.type] = types[valve.type] ? types[valve.type] + 1 : 1;
    }


    return types
  }

  public generateChart(types_list, total_valve){
    let data = [];
    for (let valve_type in types_list){
      data.push({name: valve_type, y: types_list[valve_type]/total_valve})
    }
    this.chart.options.series[0].data = data

  }

}
