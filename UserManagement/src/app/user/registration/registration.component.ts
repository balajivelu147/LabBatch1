import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  implements OnInit{


  registrationForm: FormGroup;
  usersList: any;
  msgTrue: boolean | undefined;
  UserService: any;
  constructor(public service: UserService, private formbuilder: FormBuilder) {


    this.registrationForm = this.formbuilder.group({
    
      userName: ['', Validators.required],
      Email: ['', Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)],
      Password: ['', Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')],
      confirmPassword: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.service.getusers().subscribe(data => {
      this.usersList = data;
    });
  }

  addNewUsers(form: { value: { id: 0; userName: 'alluthaf'; Email: 'allu@123'; Password: 'allu'; confirmPassword: 'allu'; }; }){
    //mock the form data that we will get from the form 

    
// const newFormData= {id:8,userName:'sabina',Email:'sabina@123',
//   Password:'samsung',confirmPassword:'samsung'};
  

const newFormData= {id:form.value.id,userName:form.value.userName,Email:form.value.Email,
  Password:form.value.Password,confirmPassword:form.value.confirmPassword};
 
console.log(form.value.id);
console.log(form.value.userName);
console.log(form.value.Email);
console.log(form.value.Password);
console.log(form.value.confirmPassword);

this.service.createUsers(newFormData).subscribe(data=>{
  console.log(data);
  this.msgTrue=true;
});
}

onsubmit() {
  console.log(this.registrationForm);


}
  }





