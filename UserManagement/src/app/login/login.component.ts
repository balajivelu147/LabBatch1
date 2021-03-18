import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


export type User={
  username:string,
  email:any,
  password:any,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public user:User={
  username:"",
  email:"",
  password:""}
  contactForm1!: FormGroup;


  constructor(private service:AuthService, private router:Router,    
    private formBuilder:FormBuilder
    ) { }
  
  ngOnInit(): void {
    this.contactForm1=this.formBuilder.group({
      username:['',[Validators.required]],
        email:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(8) ]]
    })
  }

userData(){
  this.service.loginUser(this.user).subscribe((data:any) =>{
     console.log(data),
  localStorage.setItem("token",data.token)})
  this.router.navigate(['/authuser'])
    }
}
