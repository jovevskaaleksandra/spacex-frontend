import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css'],
})
export class SignInComponent {
  form: FormGroup;
  message = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.message = 'Please fill all required fields correctly.';
      return;
    }

    this.authService.signIn(this.form.value).subscribe({
      next: (res: any) => {
        if (res.success) {
          if (res.token) {
            localStorage.setItem('jwt', res.token);
          }

          this.router.navigate(['/missions']);
        } else {
          this.message = res.message;
        }
      },
      error: (err) => {
        if (err.error?.errors) {
          const allErrors = [];
          for (const key in err.error.errors) {
            allErrors.push(...err.error.errors[key]);
          }
          this.message = allErrors.join(' | ');
        } else {
          this.message = err.error?.message || 'Sign in failed';
        }
      },
    });
  }
}
