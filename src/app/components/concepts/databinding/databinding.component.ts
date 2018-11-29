import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: []
})
export class DatabindingComponent implements OnInit, AfterViewInit {

  @ViewChild(CebComponent) cebData;
  
  loggedInUserName = "Arun";

  lastLoggedInTime: string;


  skillsetList;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.cebData);    
  }

  receiveMsg(evt){
    console.log(evt);
    this.lastLoggedInTime = evt;

  }


  isLoggedIn(){
    return false;
  }
}
