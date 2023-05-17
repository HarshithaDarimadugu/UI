import { Component } from '@angular/core';
import {Sort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'srs hospital', weight: 'sam', symbol: 6},
  {position: 2, name: 'srs hospital', weight: 'sam', symbol: 6},
  
  
];


@Component({
  selector: 'app-ppresc',
  templateUrl: './ppresc.component.html',
  styleUrls: ['./ppresc.component.css']
})
export class PprescComponent {
  longText = ``;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  title='ui';
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(PprescComponent,{
      width:'350px',
    })
  }
}
