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
  selector: 'app-patientdb',
  templateUrl: './patientdb.component.html',
  styleUrls: ['./patientdb.component.css']
})
export class PatientdbComponent {
  longText = ``;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
