import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { NursedbComponent } from '../nursedb/nursedb.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AdddoctorComponent);
  }
 
}
  

