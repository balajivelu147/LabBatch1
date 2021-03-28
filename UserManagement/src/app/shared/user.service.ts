import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{HttpClient, HttpHeaders} from '@angular/common/http'; 
import { user } from '../adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }

  readonly BaseURI="https://localhost:44316/api";

  formModel=this.fb.group({
    userName:['',Validators.required],
    email:['',Validators.email],
    password:['',Validators.required],
    ConfirmPassword:['',Validators.required]
    
  });
  register(){
    var body={
      userName:this.formModel.value.userName,
      email:this.formModel.value.email,
      password:this.formModel.value.password,
      ConfirmPassword:this.formModel.value.ConfirmPassword,
    };
    return this.http.post(`https://localhost:44316/api/auth/register`,body);
  }
  login(formData){
    console.log(`${this.BaseURI}/auth/token`);
    return this.http.post(`https://localhost:44316/api/auth/token`,formData);
  }
  getToken(){
    return localStorage.getItem("token");
  }
  loggedIn(){
    return !!localStorage.getItem("token");
  }
  authLogin(){
    return this.http.get('https://localhost:44316/api/user/get');
  }
  postData(val:user){
    return this.http.post('https://localhost:44316/api/user/insertWithRole',val);
  }
  deleteData(id:any){
    return this.http.delete(`https://localhost:44316/api/user/delete/${id}`)
  }
  getDataById(id:any){
    return this.http.get(`https://localhost:44316/api/user/get/${id}`);
  }


}
