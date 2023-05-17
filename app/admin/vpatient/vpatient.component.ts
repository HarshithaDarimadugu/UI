import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  No: number;
  Contact : number;
  Emailid: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {No: 1, name: 'Bobby sursh', Contact: 3123464366, Emailid: 'bobbysursh@gmail.com'},
  {No: 2, name: 'Sam jin', Contact: 9647484858, Emailid: 'sam@gmail.com'},
  {No: 3, name: 'Jack', Contact: 9694167584, Emailid: 'jack@gmail.com'},
  {No: 4, name: 'Mike raj', Contact: 9012298674, Emailid: 'mike@gmail.com'},
  {No: 5, name: 'John', Contact: 1081178490, Emailid: 'john@gmail.com'},
 
];
@Component({
  selector: 'app-vpatient',
  templateUrl: './vpatient.component.html',
  styleUrls: ['./vpatient.component.css']
})
export class VpatientComponent {
  displayedColumns: string[] = ['No','name','Emailid','Contact'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
