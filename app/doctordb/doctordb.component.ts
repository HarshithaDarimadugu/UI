import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { PprescComponent } from './ppresc/ppresc.component';
@Component({
  selector: 'app-doctordb',
  templateUrl: './doctordb.component.html',
  styleUrls: ['./doctordb.component.css']
})

export class DoctordbComponent {
  title='ui';
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(PprescComponent,{
      width:'350px',
    })
  }
}
