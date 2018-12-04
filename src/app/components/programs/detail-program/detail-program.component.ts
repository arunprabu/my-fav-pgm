import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProgramService } from 'src/app/services/program.service';
import { IProgram } from 'src/app/models/iprogram';

declare var $: any;   //use jquery with in this component

@Component({
  selector: 'app-detail-program',
  templateUrl: './detail-program.component.html',
  styles: []
})
export class DetailProgramComponent implements OnInit {

  pgmId: number;
  pgmData: IProgram;
  editablePgmData: IProgram;

  statusMsg: string;
  isSaved: boolean = false;

  constructor(private pgmService: ProgramService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( (params) => {
      console.log(params);
      this.pgmId = params.id;
    });
  }

  ngOnInit() {
    this.getPgmData();
  }

  getPgmData(){
    //get the id param from the url 
    //send the same to service
    this.pgmService.getProgramById(this.pgmId)
              .subscribe( (resp) => {
                console.log(resp);
                this.pgmData = resp;
              });
  }

  launchEditModal(){
    //to make bootstrap modal work thru jquery
    this.editablePgmData = JSON.parse(JSON.stringify(this.pgmData)); //duplicate obj
    $('#editModal').modal('show');
  }

  updateProgram(){
    console.log(this.editablePgmData);

    //1. connect to service and send the updatable data 
    this.pgmService.update(this.editablePgmData)
                  .subscribe( (resp) => {  //2. receive resp from service 
                    console.log(resp);
                    // if status is success 
                    //if(resp){
                      this.statusMsg = "Thanks! Saved successfully.";
                      this.isSaved = true;
                      setTimeout( () =>{
                        $('#editModal').modal('hide');
                        this.pgmData = resp;
                        //this.getPgmData();
                        //#1 page refresh
                      }, 3000 );
                      
                    //}
                    
                  })
    
  }

  

}

