import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpaceXService {
  private apiUrl = 'http://localhost:5273/api/SpaceX';

  constructor(private http: HttpClient) {}

  // Latest Launch
  getLatestLaunch(): Observable<any> {
    return this.http.get(`${this.apiUrl}/latest`);
  }

  // Upcoming Launches
  getUpcomingLaunches(): Observable<any> {
    return this.http.get(`${this.apiUrl}/upcoming`);
  }

  // Past Launches
  getPastLaunches(): Observable<any> {
    return this.http.get(`${this.apiUrl}/past`);
  }
}
