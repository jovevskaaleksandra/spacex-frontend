import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../../services/spacex.service';
import { LaunchCardComponent } from '../launch-card/launch-card';

@Component({
  selector: 'app-upcoming-launches',
  standalone: true,
  imports: [CommonModule, LaunchCardComponent],
  templateUrl: './upcoming-launches.html',
  styleUrls: ['./upcoming-launches.css'],
})
export class UpcomingLaunchesComponent implements OnInit {
  launches: any[] = [];
  loading = true;
  error = '';

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getUpcomingLaunches().subscribe({
      next: (data) => {
        this.launches = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load upcoming launches';
        this.loading = false;
      },
    });
  }
}
