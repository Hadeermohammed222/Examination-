import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit 
{
  users:any;
  user_reg:any;
  password:any;
  email:any;
  constructor (private router: Router,private auth:AuthService) { }
  
  ngOnInit(): void {
    this.auth.getUsers().subscribe((res:any)=>{
       this.users = res;
    })
  }
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]/)]),
    reset_password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]/)]),
  });
  

  submitRegisterForm(registerForm:FormGroup){
    
    this.user_reg = this.users.find((user:any) => {user.email === this.email && user.password === this.password});
  
    if(registerForm.valid && this.user_reg === undefined){
      this.auth.addUsers(registerForm.value).subscribe({
            next:(data)=>{
           this.router.navigate(['/login']);
            }
      });
  }

}
}