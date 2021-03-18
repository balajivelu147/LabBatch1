


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

export type Users = {
  userName:string,
  email:any,
  password:any,
  confirmPassword:any,
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

public users:Users={
  userName:"",
  email:"",
  password:"",
  confirmPassword:""};
  public Response:any;
  contactForm!: FormGroup;

  // contactForm=new FormGroup({
  //   userName:new FormControl('',[Validators.required,]),
  //   email:new FormControl('',[Validators.required,]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(8) ]),
  //   confirmPassword:new FormControl('',[Validators.required,])
  // })


  constructor(private service:AuthService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.contactForm=this.formBuilder.group({
      userName:['',[Validators.required]],
        email:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(8) ]],
        confirmPassword:['',[Validators.required,Validators.minLength(8)]]

    })
  }
sendData(){
  console.log(this.contactForm.value);
  this.service.registerUser(this.users).subscribe()
}
}