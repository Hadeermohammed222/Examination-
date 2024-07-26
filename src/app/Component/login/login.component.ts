import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  data:any[]=[];
  username:string ='';
  password:string='';
  users:any;
  loginForm:FormGroup = new FormGroup({
    first_name:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
  });
    

  
  constructor( private authService: AuthService, // Specify the type here
               private router: Router
             ) { }

  ngOnInit(): void {
    this.authService.getUsers().subscribe((res:any)=>{
      this.data = res;
  });
  }

    formsignin(form:FormGroup):void{
      if(form.valid){
      this.users = this.data.find(user => user.first_name === this.username && user.password === this.password);
      if(this.users && this.users.first_name == "admain"){
        this.router.navigate(['/admain']);
      }
      else if(this.users){
        this.router.navigate(['/home']);
      }
      else{
        this.router.navigate(['/register']);
      }
     } 
    }
   
}
