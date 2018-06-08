import { Component, OnInit, ViewChild } from '@angular/core';
import { ValveModel } from '../../pages/models/valve.model';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms/src/model';
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
  submitted = false;
  public   valve:ValveModel;
  public form: FormGroup;
 @ViewChild('table') tableau;


  constructor(protected formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  public changeListener(files: FileList){
  // console.log(files);
  if(files && files.length > 0) {
     let file : File = files.item(0);

       let reader: FileReader = new FileReader();
       reader.readAsText(file);
       reader.onload = (e) => {
          let csv: string = reader.result;
          // console.log(csv);
          this.sendCSV(csv)
       }
    }
}
protected initForm(): void {

    this.form = this.formBuilder.group({

      number: [
        '',
        [Validators.required]
      ],
      name: [
        '',
        [Validators.required]
      ],
      type: [
        ''
      ],
      mode: [
        null
      ],
      localisation: [
        ''
      ],

    });
    // this.valve = this.form;
  }

  public sendCSV(csv){
    // console.log(csv);
    this.historic.push({id: '11', name: 'Import', type: 'Import', mode: 'automatique', position: 'ouvert', last_purge_date: Date()})
  }

  onSubmit() {
    this.submitted = true;
    console.log('nik', this.form.value)

    //TODO create api request

    console.log('nik', this.historic)
    this.historic.push(this.form.value)
    console.log('nik', this.historic)
    this.tableau.reloadData();
  }



}
