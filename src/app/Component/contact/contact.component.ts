import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  contactForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
