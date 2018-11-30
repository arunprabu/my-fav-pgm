import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styles: []
})
export class AddProgramComponent implements OnInit {

  //should be changed with interface later
  programData: {} = {  
    pgmName: '',
    tvChannel: ''
  }

  isSaved: boolean = false;
  //Dependency Injection
  constructor( private programService: ProgramService  ) { }

  ngOnInit() {
  }

  //works for form approach #1
  // addProgramHandler(){
  //   console.log(this.programData)
  // }

  //#works for form approach #2
  submitHandler( formData: NgForm){ // 1. receive form data from comp html 
    console.log(formData.value);
    
    // 2. send the formdata to service
    this.programService.create(formData.value)
                        .subscribe( ( resp ) => { // 3. receive response from the service
                          console.log(resp);
                          // 4. channelize it to the comp html
                          if(resp){
                            this.isSaved = true;
                          }
                        })

  }
}
