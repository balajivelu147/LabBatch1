import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  public data:any;
  
  constructor(private service:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.service.getDataById(id).subscribe(
      res=>{
        console.log("success")
        return this.data=res
      },
      err=>console.log("failed")
    )
  }

}
