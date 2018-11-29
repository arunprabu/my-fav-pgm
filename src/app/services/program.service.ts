import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

//Decorator
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  //Dependency Injection
  constructor( private http: Http ) { }

  create( pgmData ){   //1. get the data from comp 
    console.log(pgmData);
    //2. send the data to rest api 
    return this.http.post("https://jsonplaceholder.typicode.com/posts", pgmData)
            .pipe(map(function( resp ){ //3. receive resp from rest api 
              console.log(resp);
              return resp.json(); //4. send the resp back to comp 
            }))
    
    
  }

  
  


}
