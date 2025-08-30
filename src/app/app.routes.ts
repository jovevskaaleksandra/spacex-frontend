import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome';
import { SignUpComponent } from './components/sign-up/sign-up';
import { SignInComponent } from './components/sign-in/sign-in';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
];
