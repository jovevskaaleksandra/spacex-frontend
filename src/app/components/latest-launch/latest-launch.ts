import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../../services/spacex.service';

@Component({
  selector: 'app-latest-launch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-launch.html',
  styleUrls: ['./latest-launch.css'],
})
export class LatestLaunchComponent implements OnInit {
  launch: any;
  loading = true;
  error = '';

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getLatestLaunch().subscribe({
      next: (data) => {
        this.launch = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load latest launch';
        this.loading = false;
      },
    });
  }
}
