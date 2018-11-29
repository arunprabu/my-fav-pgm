import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {

  //ts
  featureTitle: string = "String Interpolation";
  developedIn: number = 2018;
  developedBy: string = "Arun";

  constructor() { }

  ngOnInit() {
  }
 
  getDeveloperName() :string {   // specifying return type 
    return this.developedBy;
  }
  
}
