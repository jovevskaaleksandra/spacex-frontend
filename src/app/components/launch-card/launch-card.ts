import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-launch-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './launch-card.html',
  styleUrls: ['./launch-card.css'],
})
export class LaunchCardComponent {
  @Input() launch!: any;
  showFull = false;

  toggleDescription() {
    this.showFull = !this.showFull;
  }
}
const showFull = false;
