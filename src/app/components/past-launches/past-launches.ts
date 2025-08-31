import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../../services/spacex.service';
import { LaunchCardComponent } from '../launch-card/launch-card';

@Component({
  selector: 'app-past-launches',
  standalone: true,
  imports: [CommonModule, LaunchCardComponent],
  templateUrl: './past-launches.html',
  styleUrls: ['./past-launches.css'],
})
export class PastLaunchesComponent implements OnInit {
  launches: any[] = [];
  loading = true;
  error = '';

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getPastLaunches().subscribe({
      next: (data) => {
        this.launches = data;
        this.loading = false;
      },
      error: (err) => {
        if (err.error?.message) {
          this.error = err.error.message;
        } else {
          this.error = `Error ${err.status}: ${err.statusText}`;
        }
        this.loading = false;
      },
    });
  }
}
