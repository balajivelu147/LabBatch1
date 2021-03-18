import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpInterceptor} from '@angular/common/http';
import { Users } from '../register/register.component';
import { User } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  registerUrl='https://localhost:44316/api/auth/register';
  tokenloginUrl='https://localhost:44316/api/auth/token';

  registerUser(values:Users){
    return this.http.post(this.registerUrl,values)
  }
  

//   const httpheaders=new HttpHeaders({"authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuaXJhbmphbm12QGdtYWlsLmNvbSIsImp0aSI6IjcxN2JmNzIwLTA1YmYtNDNkMy05YzVjLWRjZjVhNzcwOGNhNyIsImVtYWlsIjoibmlyYW5qYW5tdkBnbWFpbC5jb20iLCJ1aWQiOiI4NGMyYjBkZC04MzU1LTRhN2ItOTlkZS0zNDY5M2JmYjc3MTUiLCJpcCI6IjE5Mi4xNjguNDMuNDQiLCJleHAiOjE2MTU4NzY1MjcsImlzcyI6IkF1dGhTZXJ2ZXIiLCJhdWQiOiJBdXRoU2VydmVyVXNlciJ9._SLmSaes2GUmKTzErQif3qFC5cDJib6uCddI1fe0ry0"})
// return this.http.post(this.registerUrl,val)

// var header={
//   headers:new HttpHeaders().set('Authorization','basic${btoa(Authservice.getToken())}')
// }
// this.http.get(url,header)

  
loginUser(value:User){
  return this.http.post(this.tokenloginUrl,value)
}

getToken(){
  return localStorage.getItem('token')
}
loggedIn(){
    return !!localStorage.getItem("token")
  }
authLogin(){
  return this.http.get('https://localhost:44316/api/user/get')
}
}
