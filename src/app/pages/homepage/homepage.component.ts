import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public cards:any = [
    {title: 'Objet communicant', content: '113 / 115' },
    {title: 'Consomation total', content: '104 259 L' },
    {title: 'Type de vane', content: 'camembert' },
    {title: "Nombre d'alerte", content: '87' },
    {title: 'nombre de purges totales', content: '386' },
    {title: 'Texte', content: 'Texte' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
