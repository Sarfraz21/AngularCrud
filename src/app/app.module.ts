import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { HomeComponent } from './pages/home/home.component';
import {EmployeeSerService} from './pages/services/employee-ser.service';
import { EditComponent } from './pages/employee/edit/edit.component';
import { SubjectoneComponent } from './subjectComp/subjectone/subjectone.component';
import { SubjectTwoComponent } from './subjectComp/subject-two/subject-two.component';
import { MessageService } from './subjectComp/services/message.service';
import { ParentSubjectComponent } from './subjectComp/parent-subject/parent-subject.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    EditComponent,
    SubjectoneComponent,
    SubjectTwoComponent,
    ParentSubjectComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeeSerService ,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
