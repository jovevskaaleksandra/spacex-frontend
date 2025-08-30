import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUpComponent {
  form: FormGroup;
  message = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.message = 'Please correct the form errors.';
      return;
    }

    this.authService.signUp(this.form.value).subscribe({
      next: (res: any) => {
        this.message = res.message || 'User created successfully';
        setTimeout(() => {
          this.router.navigate(['/signin']);
        }, 1500);
      },
      error: (err) => {
        if (err.error?.errors) {
          const allErrors = [];
          for (const key in err.error.errors) {
            allErrors.push(...err.error.errors[key]);
          }
          this.message = allErrors.join(' | ');
        } else {
          this.message = err.error?.message || 'Sign up failed';
        }
      },
    });
  }
}
