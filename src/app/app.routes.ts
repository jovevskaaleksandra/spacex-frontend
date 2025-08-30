import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/homepage/homepage';
import { SignUpComponent } from './components/sign-up/sign-up';
import { SignInComponent } from './components/sign-in/sign-in';
import { LatestLaunchComponent } from './components/latest-launch/latest-launch';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'latest', component: LatestLaunchComponent },
];
