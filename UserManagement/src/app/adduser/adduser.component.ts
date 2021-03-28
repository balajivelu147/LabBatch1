import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

export interface user{
  confirmPassword:string,
  email:string,
  emailConfirmed:true,
  id:string,
  password:string,
  phoneNumber:string,
  roleId:string,
  userId:string,
  userName:string
}

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
   public adduser:FormGroup;
   public response:any;
  constructor(private service:UserService,private router:Router,private route:ActivatedRoute,private formBuilder:FormBuilder) {
    this.adduser=this.formBuilder.group({
      userName: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      email: ["",[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ["",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]],
      emailConfirmed: ['true'],
      id: ["",Validators.required],
      phoneNumber: [,[Validators.required,Validators.maxLength(10)]],
      roleId: ["",Validators.required],
      userId: ['',Validators.required],
      confirmPassword: ["",Validators.required],
  },)

    
   }

  ngOnInit(): void {
    console.log(this.adduser);
    const id=this.route.snapshot.paramMap.get('id');
    this.service.getDataById(id).subscribe(
      res=>{console.log(res)
      return this.adduser.patchValue(res)}
    )
  }

  sendData(){
    this.service.postData(this.adduser.value).subscribe();
  }
  deleteData(){
    this.service.deleteData(this.adduser.value.id).subscribe(
      res=>console.log("success")
    )
  }
  get userName() {
    // console.log(this.username)
    return this.adduser.get('userName')
  };
  get username(){
    // console.log(this.registoration.get('userName')?.errors?.minLength)
    return !this.adduser.get('userName')?.errors?.required
  }

  get email(){
    return this.adduser.get('email')
  }

  get password(){
    return this.adduser.get('password');
  }
  get confirmPassword(){
    return this.adduser.get('confirmPassword');
  }
  get id(){
    return this.adduser.get('id');
  }
  get  phoneNumber(){
    return this.adduser.get('phoneNumber');
  }
  get userId(){
    return this.adduser.get('userId');
  }
  get roleId(){
    return this.adduser.get('roleId');
  }

  logOut(){
    this.router.navigateByUrl('/login')
    return localStorage.clear();
  }


}
