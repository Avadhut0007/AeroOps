import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit{
  resetPasswordForm: FormGroup;
  token: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private snakBar:MatSnackBar
  ) {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Getting the token from the URL
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid && this.token) {
      const newPassword = this.resetPasswordForm.get('newPassword')?.value;
      this.http.post('http://localhost:8080/user/resetPassword', { token: this.token, newPassword })
        .subscribe(
          response => {
            this.snakBar.open('Password reset successfully','Close',{
              duration:5000,
              verticalPosition:'top',
              horizontalPosition:'center'
            });
            // alert('Password reset successfully');
            this.router.navigate(['/login']);
          },
          error => {
            const snackBarRef = this.snakBar.open('Password reset successfully', 'Close', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
            snackBarRef.afterDismissed().subscribe(() => {
              this.router.navigate(['/login']);
            });
            // this.router.navigate(['/login']);
            console.error('Error:', error);
          }
        );
    }
  }
}
