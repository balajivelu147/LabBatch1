import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   formModel={
     userName:'',
     email:'',
     password:''
   }
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.formModel);
    this.service.login(this.formModel).subscribe(
      (data:any)=>{console.log(data)
        localStorage.setItem('token',data.token);
        this.router.navigate(['/home']);
      },
      
    )

  }

}
