import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css'],
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  goToSignUp() {
    this.router.navigate(['/signup']);
  }

  goToSignIn() {
    this.router.navigate(['/signin']);
  }
}
