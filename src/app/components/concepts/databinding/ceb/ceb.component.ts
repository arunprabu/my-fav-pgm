import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  //// step 1: creating custom event in the name of findLastVisit
  @Output() findLastVisit = new EventEmitter<string>();

  age:number = 30;

  constructor() { }

  ngOnInit() {
    
  }

  sendDataToParent(){
    // step 2: emit that event 
    // step 3: send the data within that emitted event 
    this.findLastVisit.emit("Yesterday") ;
    console.log("emitted event")
  }
}
