import { Component, OnInit, ViewChild } from '@angular/core';
import { ValveModel } from '../../pages/models/valve.model';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { UserService } from '../../auth/user/user.service';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  styleUrls: ['./imports.component.css']
})
export class ImportsComponent implements OnInit {
  public historic =[
    {id: '1', name: 'Hydrogen', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date(), actions: ['delete', 'edit']},
    {id: '2', name: 'Helium', type: 'v2', mode: 'automatique', position: 'ouvert', last_purge_date: Date(), actions: ['delete', 'edit']},
    {id: '3', name: 'Lithium', type: 'v2', mode: 'automatique', position: 'ouvert', last_purge_date: Date(), actions: ['delete', 'edit']},
    {id: '4', name: 'Beryllium', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date(), actions: ['delete', 'edit']},
    {id: '5', name: 'Boron', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date(), actions: ['delete', 'edit']},
    {id: '6', name: 'Carbon', type: 'v3', mode: 'automatique', position: 'ouvert', last_purge_date: Date(), actions: ['delete', 'edit']},
    {id: '7', name: 'Nitrogen', type: 'v3', mode: 'automatique', position: 'ouvert', last_purge_date: Date(), actions: ['delete', 'edit']},
    {id: '8', name: 'Oxygen', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date(), actions: ['delete', 'edit']},
    {id: '9', name: 'Fluorine', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date(), actions: ['delete', 'edit']},
    {id: '10', name: 'Neon', type: 'v1', mode: 'automatique', position: 'ouvert', last_purge_date: Date(), actions: ['delete', 'edit']},
  ];
  public shouldRun: boolean = false;
  public   showFiller = false;
  submitted = false;
  public valve: ValveModel;
  public formValve: FormGroup;
 @ViewChild('table') public  tableau;
 @ViewChild('drawer') public  valveForm;


  constructor(public formBuilder: FormBuilder, private snackbar: MatSnackBar, public userService: UserService) { }

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
public initForm(): void {

    this.formValve = this.formBuilder.group({

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
    console.log('tamer')
    // this.valve = this.form;
  }

  public sendCSV(csv){
    // console.log(csv);
    this.historic.push({id: '11', name: 'Import', type: 'Import', mode: 'automatique', position: 'ouvert', last_purge_date: Date(), actions: ['delete', 'edit']})
  }

  onSubmit() {
    this.submitted = true;
    console.log('nik', this.formValve.value)

    //TODO create api request

    console.log('nik', this.historic)
    this.historic.push(this.formValve.value)
    console.log('nik', this.historic)
    this.tableau.reloadData();
  }

  deleteValve(valveIdToRemove){
    let i =0;
    for (let valve of this.historic){
       if(valve.id == valveIdToRemove){
         this.historic.splice(i,1);
        //  TODO make api call .delete
          break;
       }
       i++
    }
    let config = new MatSnackBarConfig();
    // this.snackbar.open('imposible de supprimer la vanne', "ok", config);
  }

  public editValve(valveToEdit){
    this.formValve.patchValue({
      number:valveToEdit.id,
      name: valveToEdit.name,
      type: valveToEdit.type,
      mode: valveToEdit.mode,
      localisation: valveToEdit.localisation
    })
    this.shouldRun = true;
    this.valveForm.toggle();
    // this.redirectToValve(valveToEdit.id);

  }

  public redirectToValve(id: string){
    console.log(id)
  }



}
