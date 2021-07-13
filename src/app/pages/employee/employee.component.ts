import { Component, OnInit } from '@angular/core';
import { EmployeeSerService } from '../services/employee-ser.service';
import { Employee } from '../module/employee.module';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[]
  constructor(private employeeSer:EmployeeSerService) { }

  ngOnInit(): void {
    this.employees=this.employeeSer.getData()
  }

  onDelete(id:Number){
  this.employeeSer.onDelete(id)
  }
}
