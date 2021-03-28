import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   userProfile;
   userDetailList:any ;
  

   constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.service.authLogin().subscribe(
      response => this.userDetailList=response,
      err=>{console.log(err);},
    );
  }
  logOut(){
    this.router.navigateByUrl('/login');
    return localStorage.clear();
  }

}
