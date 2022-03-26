import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortInformationServiceService {

  constructor( public ht:HttpClient) { }
  
  getdata(){
    return this.ht.get("http://localhost:3000/counntry");
  }
  getPortdata(){
    return this.ht.get("http://localhost:3000/port");
  }
  sendPost(data:any){
    return this.ht.post("http://localhost:3000/port",data);
  }
  
}
