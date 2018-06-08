import { Component, OnInit } from '@angular/core';
import { ValveService } from './../services/valve.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public cards:any = [
    {title: 'Objets communicants', content: '113 / 115' },
    {title: 'Consommation totale', content: '104 259 L' },
    {title: 'Types de vannes', content: 'pieChart', type: 'pieChart' },
    {title: "Nombre d'alertes", content: '87' },
    {title: 'Nombre de purges totales', content: '386' },
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
  constructor(public valveService: ValveService, private snackbar: MatSnackBar, public viewContainerRef: ViewContainerRef) {
    for (let card of this.cards){
      if (card.content === 'pieChart'){
        card.data = this.valveService.valveList
      }
    }
    let config = new MatSnackBarConfig();
    this.snackbar.open('Alerte Vanne n°42', "voir l'erreur", config);

   }

  ngOnInit() {
    console.log(this.valveService.valveList)

  }

}
