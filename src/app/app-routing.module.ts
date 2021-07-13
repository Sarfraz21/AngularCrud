import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
// import { HomeComponent } from './pages/home/home.component';
import { EditComponent } from './pages/employee/edit/edit.component';
import { ParentSubjectComponent } from './subjectComp/parent-subject/parent-subject.component';


const routes: Routes = [
    {path:'' , component:EmployeeComponent},
    {path:'employee/add/:id' , component:EditComponent},
    {path:'employee/edit/:id' , component:EditComponent},
    {path:'subject' , component:ParentSubjectComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
