import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRegistrationService } from '../../services/login-registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit{
  forgotPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: LoginRegistrationService,private snakBar:MatSnackBar) {
    this.forgotPasswordForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const emailId = this.forgotPasswordForm.get('emailId')?.value;
      this.authService.sendPasswordResetLink(emailId)
        .subscribe(
          response => {
            if (response.status === 200) {
              this.snakBar.open('Reset link sent successfully','Close',{
                duration:4000,
                verticalPosition:'top',
                horizontalPosition:'center'
              });
              // alert('Reset link sent successfully');
            }
          },
          error => {
            console.error('Error from server:', error);
            if (error.status === 500) {
              this.snakBar.open('Email Id Not Found','Close',{
                duration:4000,
                verticalPosition:'top',
                horizontalPosition:'center'
              });
              // alert('Email ID not found');
            } else {
              this.snakBar.open('Reset link sent successfully','Close',{
                duration:4000,
                verticalPosition:'top',
                horizontalPosition:'center'
              });
              // alert('Sucess');
            }
          }
        );
    } else {
      alert('Please enter a valid email ID');
    }
  }
  
  
  
  }

