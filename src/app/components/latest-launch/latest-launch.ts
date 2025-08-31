import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../../services/spacex.service';
import { LaunchCardComponent } from '../launch-card/launch-card';
import { Location } from '@angular/common';

@Component({
  selector: 'app-latest-launch',
  standalone: true,
  imports: [CommonModule, LaunchCardComponent],
  templateUrl: './latest-launch.html',
  styleUrls: ['./latest-launch.css'],
})
export class LatestLaunchComponent implements OnInit {
  launch: any;
  loading = true;
  error = '';

  constructor(private spaceXService: SpaceXService, private location: Location) {}

  ngOnInit(): void {
    this.spaceXService.getLatestLaunch().subscribe({
      next: (data) => {
        this.launch = data;
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

  goBack() {
    this.location.back();
  }
}
