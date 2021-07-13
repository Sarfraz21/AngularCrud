import { Component, OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { EmployeeSerService } from './../../services/employee-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:number;
header:string;
employee:Employee ={
  id:0,
  name:'',
  email:'',
  phone:0,
};
  constructor( private router:Router ,private route:ActivatedRoute , private employeSer:EmployeeSerService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.header = this.id === 0 ? 'Add Employee' : 'Edit Employee';

    if(this.id != 0){
    this.employee = this.employeSer.onGetEmployee(this.id);
    }
  }
onSubmit(form:NgForm){
  console.log(form.value);
    let employee:Employee ={
    id:Number(form.value.id),
    name:form.value.name,
    email:form.value.email,
    phone:(form.value.phone)
    
    
};
if(this.id === 0){
  this.employeSer.onAdd(employee);
}
else{
  this.employeSer.onUpdate(employee);
}

this.router.navigateByUrl('');
}
}
