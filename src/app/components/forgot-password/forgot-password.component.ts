import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRegistrationService } from '../../services/login-registration.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit{
  forgotPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: LoginRegistrationService) {
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
            if (response.success) {
              alert('Reset link sent successfully');
            } else {
              alert('Email ID not found');
            }
          },
          error => {
            console.error('Error from server:', error);
            if (error.status === 200 && error.error === 'Email ID not found') {
              alert('Email ID not found');
            } else {
              alert('Sucess');
            }
          }
        );
    } else {
      alert('Please enter a valid email ID');
    }
  }
  
  
  
  }

