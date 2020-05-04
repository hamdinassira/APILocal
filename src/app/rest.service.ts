import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  products:any =[];

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("assets/data.json");
   
  }
}
