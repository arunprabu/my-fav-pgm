import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styles: []
})
export class AddProgramComponent implements OnInit {

  pgmName: string;
  tvChannel: string;

  constructor() { }

  ngOnInit() {
  }

  addProgramHandler(){
    console.log(this.pgmName);
    console.log(this.tvChannel);
  }
}
