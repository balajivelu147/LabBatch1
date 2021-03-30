import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // userName:string;
  // service: any;
  // msgTrue: boolean;

  constructor(private userService:UserService) { }
// userList:any;
//   ngOnInit(): void {
// this.userService.getusers().subscribe(data=>{

//   this.userList=data;
// });
//   }

// addNewUsers(){
//   const newFormData= {id:6,userName:'shaheen',Email:'shaheen@147',Password:'motto4',confirmPassword:'motto4'};
   
//     this.userService.createusers(newFormData).subscribe(data=> {
//     console.log(data);
//   this.msgTrue=true;
//   });
  // }
}
