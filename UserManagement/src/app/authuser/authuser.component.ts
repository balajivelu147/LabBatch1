import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authuser',
  templateUrl: './authuser.component.html',
  styleUrls: ['./authuser.component.scss']
})
export class AuthuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.service.authLogin()
    .subscribe(
     res => this.data=res
    )
  }

}
