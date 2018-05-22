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
