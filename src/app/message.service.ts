import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }


  // 新增留言到push到陣列上
  add(message:string):void{
    this.messages.push(message)
  }

  clear():void{
    this.messages = [];

  }
}
