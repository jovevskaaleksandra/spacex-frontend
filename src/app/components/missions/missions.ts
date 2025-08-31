import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missions.html',
  styleUrls: ['./missions.css'],
})
export class MissionsComponent {
  constructor(private router: Router, private authService: AuthService) {}

  goTo(type: string) {
    this.router.navigate([`/${type}`]);
  }

  logout() {
    this.authService.signOut();
    this.router.navigate(['/signin']);
  }
}
