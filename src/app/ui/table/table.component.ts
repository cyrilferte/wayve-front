import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import { ValveService } from './../../pages/services/valve.service';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';

 import 'rxjs/Rx' ;


@Component({
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  @Input() public table;
  @Input() public searchValve: Boolean = false;
  @Input() public downloadData: Boolean = false;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'type', 'mode', 'position', 'last_purge_date', 'last_error'];
  constructor( public valveService: ValveService, router: Router) {

  }
  ngOnInit() {
    if (this.table){

      this.dataSource = new TableDataSource(this.paginator, this.sort, this.valveService, this.table);
      this.stateCtrl = new FormControl();
      this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(table => table ? this.filterStates(table) : this.table.slice())
      );
    }


  }



  public filterStates(name: string) {
    return this.table.filter(table =>
      table.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

    public redirectToValve(id: string){
      console.log(id)
    }

    public onDownloadData(){
      console.log(this.table)
      var blob = new Blob([this.convertToCSV(this.table)], { type: 'text/csv' });
    var url= window.URL.createObjectURL(blob);
    window.open(url);
    }
     convertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';

        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }

            str += line + '\r\n';
        }

        return str;
    }
}
