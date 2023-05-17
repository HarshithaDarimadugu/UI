import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { PatientdbComponent } from './patientdb/patientdb.component';
import { RegisterComponent } from './register/register.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { DoctordbComponent } from './doctordb/doctordb.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NursedbComponent } from './nursedb/nursedb.component';
import { AdminComponent } from './admin/admin.component';
import {MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { PprescComponent } from './doctordb/ppresc/ppresc.component';
import { PprofileComponent } from './doctordb/pprofile/pprofile.component';
import { NgForm } from '@angular/forms';
import { AdddoctorComponent } from './admin/adddoctor/adddoctor.component';
import { ReactiveFormsModule} from '@angular/forms';
import { UserguideComponent } from './userguide/userguide.component';
import {MatStepperModule} from '@angular/material/stepper';
import { VpatientComponent } from './admin/vpatient/vpatient.component';
import { VdlistComponent } from './admin/vdlist/vdlist.component';
import { VnlistComponent } from './admin/vnlist/vnlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientdbComponent,
    RegisterComponent,
    DoctordbComponent,
    NursedbComponent,
    AdminComponent,
    PprescComponent,
    PprofileComponent,
    AdddoctorComponent,
    UserguideComponent,
    VpatientComponent,
    VdlistComponent,
    VnlistComponent,
  ],
  imports: [
    BrowserModule,MatStepperModule,
    AppRoutingModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    DatePipe,
    MatDialogModule,
    FormsModule,

    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
