import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortInformationServiceService } from '../port-information-service.service';

@Component({
  selector: 'app-login-componant',
  templateUrl: './login-componant.component.html',
  styleUrls: ['./login-componant.component.css']
})
export class LoginComponantComponent implements OnInit {

  data:any;

  User = {
    username:'',
    password:''
  }

  constructor( private ps:PortInformationServiceService,
    private router:Router) { }

  ngOnInit(): void {
    
  }

  loginData(){
    if(this.User.username === 'admin' && this.User.password === 'admin'){
      this.router.navigate(['home'])
    }
  }

}
