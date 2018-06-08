import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import { ClientModel } from './../models/client.model'

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
}

/** Flat node with expandable and level information */
export class FileFlatNode {
  filename: string;
  type: any;
  level: number;
  expandable: boolean;
  name: string;
  index: number;
}

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
const TREE_DATA = [{
    "name": "Visian",
    "users": [
           {
            "firstname": "cyril",
            "lastname": "ferte",
            "core": "ts",
            "compiler": "ts"
          },{
            "firstname": "cyril 2",
            "lastname": "ferte",
           "core": "ts",
           "compiler": "ts"
         },{
           "firstname": "cyril 3",
           "lastname": "ferte",
          "core": "ts",
          "compiler": "ts"
        },
        {
            "name": "SUBVisian",
            "users": [
                   {
                     "firstname": "cyril",
                     "lastname": "ferte",
                    "core": "ts",
                    "compiler": "ts"
                  },{
                    "firstname": "cyril",
                    "lastname": "ferte",
                   "core": "ts",
                   "compiler": "ts"
                 },{
                   "firstname": "cyril",
                   "lastname": "ferte",
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
           "name": "cyril",
           "core": "ts",
           "compiler": "ts"
         },{
          "name": "cyril 2",
          "core": "ts",
          "compiler": "ts"
        },{
         "name": "cyril 3",
         "core": "ts",
         "compiler": "ts"
       }
    ]},
    {"name": "Visian 3",
    "users": [
        {
         "name": "cyril",
         "core": "ts",
         "compiler": "ts"
       },{
        "name": "cyril 2",
        "core": "ts",
        "compiler": "ts"
      },{
       "name": "cyril 3",
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

  initialize() {
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
    console.log('value', value);
    for (let k of value) {
      let i = 0
      console.log('k', k);
      let v = k.users;
      let node = new FileNode();
      node.filename = `${k.name}`;
      node.index = i;
      console.log(i)
      i++;
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
  treeControl: FlatTreeControl<FileFlatNode>;

treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;

dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

constructor(database: FileDatabase) {
  this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
    this._isExpandable, this._getChildren);
  this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
  this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  database.dataChange.subscribe(data => {
    this.dataSource.data = data;
  });
}

transformer = (node: FileNode, level: number) => {
  let flatNode = new FileFlatNode();
  flatNode.filename = node.filename;
  flatNode.index = node.index;
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
}
