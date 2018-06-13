import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable, ViewChild} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import { ClientModel } from './../models/client.model';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { UserService } from '../../auth/user/user.service';
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
  id: string;
  name: string;
  index: number;
  firstname: string;
  lastname: string;
  address: string;
  phone: string;
  holding: string;
  company: string;
  nTVA: string;
  i: number;
  j: number;
  email: string;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
  filename: string;
  type: any;
  level: number;
  expandable: boolean;
  name: string;
  index: number;
  id: string;
  firstname: string;
  lastname: string;
  address: string;
  phone: string;
  holding: string;
  company: string;
  nTVA: string;
  i: number;
  j: number;
  email: string;
}

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
let TREE_DATA = [{
    "name": "Visian",
    "users": [
           {
            "id": 1,
            "firstname": "cyril",
            "lastname": "ferte",
            "company": "fertec",
            "holding": "fertec",
            "phone": "0675040927",
            "email": "c.ferte@hotmail.fr",
            "core": "ts",
            "compiler": "ts"
          },{
            "id": 2,
            "firstname": "cyril 2",
            "lastname": "ferte",
            "company": "fertec",
           "core": "ts",
           "compiler": "ts"
         },{
           "id": 3,
           "firstname": "cyril 3",
           "lastname": "ferte",
           "company": "fertec",
          "core": "ts",
          "compiler": "ts"
        },
        {
            "name": "SUBVisian",
            "users": [
                   {
                     "firstname": "cyril",
                     "lastname": "ferte",
                     "company": "fertec",
                    "core": "ts",
                    "compiler": "ts"
                  },{
                    "firstname": "cyril",
                    "lastname": "ferte",
                    "company": "fertec",
                   "core": "ts",
                   "compiler": "ts"
                 },{
                   "firstname": "cyril",
                   "lastname": "ferte",
                   "company": "fertec",
                  "core": "ts",
                  "compiler": "ts"
                }
              ]
            },
      ]
    },
    {"name": "Visian 2",
    "users": [
          {
           "firstname": "cyril",
           "lastname": "ferte",
           "company": "fertec",
           "core": "ts",
           "compiler": "ts"
         },{
           "firstname": "cyril",
           "lastname": "ferte",
           "company": "fertec",
          "core": "ts",
          "compiler": "ts"
        },{
          "firstname": "cyril",
          "lastname": "ferte",
          "company": "fertec",
         "core": "ts",
         "compiler": "ts"
       }
    ]},
    {"name": "Visian 3",
    "users": [
        {
          "firstname": "cyril",
          "lastname": "ferte",
          "company": "fertec",
         "core": "ts",
         "compiler": "ts"
       },{
         "firstname": "cyril",
         "lastname": "ferte",
         "company": "fertec",
        "core": "ts",
        "compiler": "ts"
      },{
        "firstname": "cyril",
        "lastname": "ferte",
        "company": "fertec",
       "core": "ts",
       "compiler": "ts"
     }
   ]}
 ];

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }


  public initialize() {
    // Parse the string to json object.
    const dataObject = TREE_DATA;

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(value: any, level: number): any[] {
    let data: any[] = [];
    let j = 0;
    for (let k of value) {

      let i = 0
      let v = k.users;
      let node = new FileNode();
      if(k.name) node.filename = `${k.name}`;
      if(k.firstname) node.firstname = `${k.firstname}`;
      if(k.lastname) node.lastname = `${k.lastname}`;
      if(k.company) node.company = `${k.company}`;
      if(k.holding) node.holding = `${k.holding}`;
      if(k.phone) node.phone = `${k.phone}`;
      if(k.address) node.address = `${k.address}`;
      if(k.email) node.email = `${k.email}`;
      if(k.nTVA) node.nTVA = `${k.nTVA}`;
      if(k.id) node.id = `${k.id}`;
      node.index = i;
      node.j = j;
      i++;
      j++;
      if (v === null || v === undefined) {
        // no actionn

      } else if (typeof v === 'object') {
        node.children = this.buildFileTree(v, level + 1);
      } else {
        node.type = v;
      }
      data.push(node);
    }
    return data;
  }
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [FileDatabase]
})
export class ClientsComponent  {
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
   @ViewChild('userForm') userForm;
   @ViewChild('groupForm') groupForm;
  treeControl: FlatTreeControl<FileFlatNode>;

treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;

dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;
public shouldRun: boolean = false;
public   showFiller = false;
submitted = false;
public formUser: FormGroup;
public formGroup: FormGroup;
constructor(database: FileDatabase, public formBuilder: FormBuilder, private snackbar: MatSnackBar, public userService: UserService) {
  this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
    this._isExpandable, this._getChildren);
  this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
  this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  database.dataChange.subscribe(data => {
    this.dataSource.data = data;
  });
  this.initForm();
}

public deleteClient(node, event){
  event.stopPropagation();
  console.log('send delete', node.id )
  let config = new MatSnackBarConfig();
  this.snackbar.open('can\'t delete client  ', "ok", config);
}

public deleteGroup(node, event){
  event.stopPropagation();
  console.log('send delete', node.id )
  let config = new MatSnackBarConfig();
  this.snackbar.open('can\'t delete group  ', "ok", config);
}
public editClient(node, event){
  event.stopPropagation();
  this.formUser.value.number = node.number;
  this.formUser.value.firstname = node.firstname;
  this.formUser.value.lastname = node.lastname;
  this.formUser.value.company = node.company;
  this.formUser.value.address = node.address;
  this.formUser.value.email = node.email;
  this.formUser.value.nTVA = node.nTVA;
  this.formUser.value.phone = node.phone;
  this.formUser.value.type = node.type;
  this.shouldRun=true;
  this.userForm.toggle();
  let config = new MatSnackBarConfig();
  this.snackbar.open('can\'t edit client  ', "ok", config);
}

public editGroup(node, event){
  event.stopPropagation();
  console.log(node)
  this.formGroup.value.name = node.filename;
  this.formGroup.value.admins = node.admins;
  this.shouldRun=true;
  this.groupForm.toggle();
  console.log(this.formGroup.value)
  let config = new MatSnackBarConfig();
  this.snackbar.open('can\'t edit group  ', "ok", config);
}

public initForm(): void {

    this.formUser = this.formBuilder.group({

      number: [
        '',
        [Validators.required]
      ],
      firstname: [
        '',
        [Validators.required]
      ],
      lastname: [
        '',
        [Validators.required]
      ],
      company: [
        '',
        [Validators.required]
      ],
      address: [
        '',
        [Validators.required]
      ],
      phone: [
        '',
        [Validators.required]
      ],
      email: [
        '',
        [Validators.required]
      ],
      nTVA: [
        '',
        [Validators.required]
      ],
      type: [
        ''
      ],

    });

    this.formGroup = this.formBuilder.group({


      name: [
        '',
        [Validators.required]
      ],
      admins: [
        null
      ],

    });
    // this.valve = this.form;
  }


transformer = (node: FileNode, level: number) => {
  let flatNode = new FileFlatNode();
  if(node.filename) flatNode.filename = node.filename;
  if(node.firstname) flatNode.firstname = node.firstname;
  if(node.lastname) flatNode.lastname = node.lastname;
  if(node.company) flatNode.company = node.company;
  if(node.holding) flatNode.holding = node.holding;
  if(node.phone) flatNode.phone = node.phone;
  if(node.address) flatNode.address = node.address;
  if(node.email) flatNode.email = node.email;
  if(node.nTVA) flatNode.nTVA = node.nTVA;
  if(node.id) flatNode.id = node.id;
  flatNode.index = node.index;
  flatNode.j = node.j;
  flatNode.type = node.type;
  flatNode.level = level;
  flatNode.expandable = !!node.children;
  return flatNode;
}

private _getLevel = (node: FileFlatNode) => { return node.level; };

private _isExpandable = (node: FileFlatNode) => { return node.expandable; };

private _getChildren = (node: FileNode): Observable<FileNode[]> => {
  return observableOf(node.children);
}

hasChild = (_: number, _nodeData: FileFlatNode) => { return _nodeData.expandable; };

public trackByFn(index, item) {
  console.log(index, item)
    return index; // or item.id
  }

  onSubmitUser() {
    this.submitted = true;
    console.log('nik', this.formUser.value)

    //TODO create api request

    console.log('nik', this.historic)
    this.historic.push(this.formUser.value)
    console.log('nik', this.historic)
    let config = new MatSnackBarConfig();
    this.snackbar.open('can\'t create client  ', "ok", config);
  }

  onSubmitGroup() {
    this.submitted = true;
    console.log('nik', this.formGroup.value)

    //TODO create api request

    console.log('nik', this.historic)
    this.historic.push(this.formGroup.value)
    console.log('nik', this.historic)
    let config = new MatSnackBarConfig();
    this.snackbar.open('can\'t create group  ', "ok", config);

  }



}
