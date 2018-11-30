import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProgramService } from 'src/app/services/program.service';

declare var $: any;   //use jquery with in this component

@Component({
  selector: 'app-detail-program',
  templateUrl: './detail-program.component.html',
  styles: []
})
export class DetailProgramComponent implements OnInit {

  pgmId: number;
  pgmData: {}

  constructor(private pgmService: ProgramService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( (params) => {
      console.log(params);
      this.pgmId = params.id;
    });
  }

  ngOnInit() {
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
    $('#editModal').modal('show');
  }

}
