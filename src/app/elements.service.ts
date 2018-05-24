import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ElementsService {

  constructor(private http: Http) { }
  
  // Make a function that will make the API call
  getElements(): Promise<Response[]> {
   // const url = "http://167.99.184.138/periodic.json";
      const url = "https://my-json-server.typicode.com/shkats/demo/db";
      //"http://167.99.184.138/avengers.json";
    return this.http.get(url).toPromise().then(response => response.json() as Response[]);  
      
    /*
    this.http.get(url).toPromise().then(response => response.json() as Response[]); 
    */
  }
}
