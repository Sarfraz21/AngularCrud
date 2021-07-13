import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class MessageService{
    public subject = new BehaviorSubject<string>('burger');
    constructor(){}

    sendMessage(message:string){
    this.subject.next(message)
    }

    recievedMessage():Observable<string>{
      return  this.subject.asObservable()
    }
}