import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRegistrationService } from '../../services/login-registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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

constructor(private loginRe:LoginRegistrationService,
            private formBuilder:FormBuilder, 
            private snackBar:MatSnackBar,
            private router : Router){}

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      firstName:['',Validators.required],
      emailId:['',[Validators.required,Validators.email]],
      userPassword:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    })

    this.loginForm=this.formBuilder.group({
      emailId:['',[Validators.required,Validators.email]],
      userPassword:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    })
  }

//on submit method for registration 
onSubmit(){
  if (this.signupForm.valid) {
    this.loginRe.registerUser(this.signupForm.value)
      .subscribe(response => {
        if(response.status === 201){
          this.snackBar.open('User registered successfully','Close',{
            duration:5000,
            verticalPosition:'top',
            horizontalPosition:'center'
          });
          
        }else{
          alert("Please try again")
        }
        console.log('User registered successfully', response);
      }, error => {
        if(error.status === 409){
          console.error('User already registered', error);
          this.snackBar.open('User already registered','Close',{
            duration:5000,
            verticalPosition:'bottom',
            horizontalPosition:'center'
          });
        }else{
          this.snackBar.open('User Registered Succesfully','Close',{
            duration:5000,
            verticalPosition:'top',
            horizontalPosition:'center'
          });
          console.log('User Registered Successfully',error);
          // window.location.reload();
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
      this.router.navigate(['/flight-search']);
      this.snackBar.open('User logged in successfully','Close',{
        duration:4000,
        verticalPosition:'bottom',
        horizontalPosition:'center'
      });
      console.log('User logged in successfully',Response.body);
    }
    },
    error =>{
      this.snackBar.open("Incorrect useranme or password",'Close',{
        duration:4000,
        verticalPosition:'bottom',
        horizontalPosition:'center'
      });
      console.error('Failed to login',error);
    }
    
  )};
}

}
