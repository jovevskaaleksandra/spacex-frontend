import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missions.html',
  styleUrls: ['./missions.css'],
})
export class MissionsComponent {
  constructor(private router: Router) {}

  goTo(type: string) {
    this.router.navigate([`/${type}`]);
  }
}
