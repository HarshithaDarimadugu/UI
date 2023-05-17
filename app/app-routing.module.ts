import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientdbComponent } from './patientdb/patientdb.component';
import { RegisterComponent } from './register/register.component';
import { DoctordbComponent } from './doctordb/doctordb.component';
import { NursedbComponent } from './nursedb/nursedb.component';
import { AdminComponent } from './admin/admin.component';
import { PprescComponent } from './doctordb/ppresc/ppresc.component';
import { PprofileComponent } from './doctordb/pprofile/pprofile.component';
import { AdddoctorComponent } from './admin/adddoctor/adddoctor.component';
import { UserguideComponent } from './userguide/userguide.component';
import { VpatientComponent } from './admin/vpatient/vpatient.component';
import { VdlistComponent } from './admin/vdlist/vdlist.component';
import { VnlistComponent } from './admin/vnlist/vnlist.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'patientdb',component:PatientdbComponent},
  {path:'doctordb',component:DoctordbComponent},
  {path:'nursedb',component:NursedbComponent},
  {path:'admin',component:AdminComponent},
  {path:'ppresc',component:PprescComponent},
  {path:'pprofile',component:PprofileComponent},
  {path:'adddoctor',component:AdddoctorComponent},
  {path:'userguide',component:UserguideComponent},
  {path:'vpatient',component:VpatientComponent},
  {path:'vdlist',component:VdlistComponent},
  {path:'vnlist',component:VnlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
