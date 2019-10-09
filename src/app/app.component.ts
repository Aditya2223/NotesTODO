import { Component } from '@angular/core';
import { Todo } from './todo';
import {trigger, style, animate, transition} from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({opacity: 1}))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Application-1';

  todoValue:string;
  list:Todo[];
  constructor(){
    console.log("Constructor called");
  }

  ngOnInit(){
    this.list = [];
    this.todoValue = "";
  }

  addItem(){
    if(this.todoValue !== "")
    {
      const newEntry: Todo = {
        id:Date.now(),
        value:this.todoValue,
        isDone:false
      };
      this.list.push(newEntry);
    console.log(this.list);
    }
    this.todoValue="";
  }

  deleteItem(id:number){
    this.list=this.list.filter( item => item.id!==id );
  }
}
