import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './../services/message.service';

@Component({
  selector: 'app-subject-two',
  templateUrl: './subject-two.component.html',
  styleUrls: ['./subject-two.component.css']
})
export class SubjectTwoComponent implements OnInit ,OnDestroy{
  message:string;
  $sub:Subscription
  constructor(private msgService:MessageService) { }

  ngOnInit(): void {
   this.$sub = this.msgService.recievedMessage().subscribe((data)=>{
      this.message=data;
    })
  }
  ngOnDestroy(){
    this.$sub.unsubscribe()
  }


}
