import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styles: []
})
export class ProgramsComponent implements OnInit, OnDestroy {

  pgmList: [];

  constructor( private programService: ProgramService ) {
    console.log("Inside Constructor");
  }

  //lifecycle hook
  ngOnInit() {
    console.log("Inside ngOnInit");
    //1. send the req to service
    this.programService.getPrograms()
            .subscribe( (resp) => { //2.get the resp from service 
              console.log(resp);
              this.pgmList = resp;
            });        
    
  }

  //called when you navigate away from this component
  ngOnDestroy(){
    console.log("Destroying");
    //TODO: clear the array
    //TODO: unsubscribe
  }
}
