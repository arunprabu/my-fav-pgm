import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './pb.component.html',
  styles: [
    `
    .blue{
      color: blue;
    }
    .green{
      color: green;
    }
    .red{
      color: red;
    }
    `
  ]
})
export class PbComponent implements OnInit {

  //ts
  name: string = "Arun";
  

  constructor() { }

  ngOnInit() {
  }

  isLoggedIn(){
    return true;
  }

}
