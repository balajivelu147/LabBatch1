import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public service:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.register().subscribe(
      (res:any)=>{
        this.service.formModel.reset();});
      
  }

}
