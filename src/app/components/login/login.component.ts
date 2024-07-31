import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRegistrationService } from '../../services/login-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  signupForm!: FormGroup;
  loginForm!:FormGroup;
  isActive: boolean = false;

  toggleActive(state: boolean): void {
    this.isActive = state;
  }

user={
  firstName:'',
  emailId:'',
  userPassword:''
};

constructor(private loginRe:LoginRegistrationService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      firstName:['',Validators.required],
      emailId:['',[Validators.required,Validators.email]],
      userPassword:['',[Validators.required,Validators.minLength(6)]]
    })

    this.loginForm=this.formBuilder.group({
      emailId:['',[Validators.required,Validators.email]],
      userPassword:['',[Validators.required,Validators.minLength(6)]]
    })
  }

//on submit method
onSubmit(){
  if (this.signupForm.valid) {
    this.loginRe.registerUser(this.signupForm.value)
      .subscribe(response => {
        alert("User registered successfully");
        console.log('User registered successfully', response);
      }, error => {
        if(error.status === 409){
          console.error('User already registered', error);
          alert("User already registered")
        }else{
          console.log('Fine');
        }
      });
  }
}
//add user service
// saveUser(user:any){
//   this.loginRe.post('http://localhost:8080/user/register',user).subscribe(Response=>{
//     console.log("User Saved Succesfuly",Response);
//     alert("Data Saved Successfully")
//   },error=>{
//     console.error ('Error saving user',error)
//     alert("Please enter valid info")
//   });
// }

onLoginSubmit(){
if(this.loginForm.valid){
  const emailId=this.loginForm.get('emailId')?.value;
  const userPassword=this.loginForm.get('userPassword')?.value;

  this.loginRe.loginUser(emailId,userPassword).
  subscribe(Response=>{
    if(Response.status === 200){
      alert("User logged in succesfully")
      console.log('User logged in successfully',Response.body);
    }else{
      alert('Invalid email or password');
      console.log('Failed to login', Response);
    }
    },
    error =>{
      alert("Failed to login")
      console.error('Failed to login',error);
    }
    
  )};
}

}
