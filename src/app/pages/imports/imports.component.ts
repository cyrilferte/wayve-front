import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  styleUrls: ['./imports.component.css']
})
export class ImportsComponent implements OnInit {
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
  public shouldRun: boolean = false;
  public   showFiller = false;
  constructor() { }

  ngOnInit() {
  }

  public changeListener(files: FileList){
  console.log(files);
  if(files && files.length > 0) {
     let file : File = files.item(0);
       console.log(file.name);
       console.log(file.size);
       console.log(file.type);
       let reader: FileReader = new FileReader();
       reader.readAsText(file);
       reader.onload = (e) => {
          let csv: string = reader.result;
          console.log(csv);
          this.sendCSV(csv)
       }
    }
}

  public sendCSV(csv){
    console.log(csv);
    this.historic.push({id: '11', name: 'Import', type: 'Import', mode: 'automatique', position: 'ouvert', last_purge_date: Date()})
  }


}
