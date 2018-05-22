import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import { ValveService } from './../../pages/services/valve.service';


@Component({
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;
  @Input() public table;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'type', 'mode', 'position', 'last_purge_date', 'last_error'];
  constructor( public valveService: ValveService) {

  }
  ngOnInit() {
    if (this.table){
      this.dataSource = new TableDataSource(this.paginator, this.sort, this.valveService, this.table);
    }

  }
}
