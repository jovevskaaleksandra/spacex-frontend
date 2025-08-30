import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome';
import { SignUpComponent } from './components/sign-up/sign-up';

export const routes: Routes = [
  { path: '', component: WelcomeComponent }, // 👈
  { path: 'signup', component: SignUpComponent },
];
