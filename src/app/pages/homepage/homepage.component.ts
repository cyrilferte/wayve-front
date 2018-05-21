import { Component, OnInit } from '@angular/core';
import { ValveService } from './../services/valve.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public cards:any = [
    {title: 'Objet communicant', content: '113 / 115' },
    {title: 'Consomation total', content: '104 259 L' },
    {title: 'Type de vane', content: 'pieChart', type: 'pieChart' },
    {title: "Nombre d'alerte", content: '87' },
    {title: 'nombre de purges totales', content: '386' },
    {title: 'Texte', content: 'Texte' },
  ]
  constructor(public valveService: ValveService) {
    for (let card of this.cards){
      if (card.content === 'pieChart'){
        card.data = this.valveService.valveList
      }
    }
   }

  ngOnInit() {
    console.log(this.valveService.valveList)

  }

}
