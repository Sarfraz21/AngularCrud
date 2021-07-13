import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeSerService {
  employees:Employee[]=[
    {
      id:1,
      name:'Sara',
      email:'h.sara@taa.com',
      phone:70045678
    },
    {
      id:2,
      name:'Husiaia',
      email:'S.hudsssdds.com',
      phone:70456780
    },
  ];
  constructor() { }

  onGetEmployee(id){
    return this.employees.find( x=> x.id === id)
  }

  getData(){
   return this.employees;
  }

  onAdd(employee:Employee){
    this.employees.push(employee)
  }

  onUpdate(employee:Employee){
  let oldEmployee = this.employees.find(x=>x.id === employee.id)
  oldEmployee.name=employee.name;
  oldEmployee.email=employee.email;
  oldEmployee.phone = employee.phone;
  }

  onDelete(id:number){
  let  employee = this.employees.find(x=>x.id === id);
  let index = this.employees.indexOf(employee,0)
  this.employees.splice(index,1)
  }
}
