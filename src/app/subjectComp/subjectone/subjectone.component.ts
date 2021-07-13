import { Component, OnInit } from '@angular/core';
import { MessageService } from './../services/message.service';

@Component({
  selector: 'app-subjectone',
  templateUrl: './subjectone.component.html',
  styleUrls: ['./subjectone.component.css']
})
export class SubjectoneComponent implements OnInit {

  constructor(private msgService:MessageService) { }

  ngOnInit(): void {}

    onclickMessage(item){
    this.msgService.sendMessage(item.value)
    }

}
