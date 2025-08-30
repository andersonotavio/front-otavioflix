import { Routes } from '@angular/router';
import { SignIn } from './pages/not-logged/sign-in/sign-in';
import { Home } from './pages/logged/home/home';
import { SignUp } from './pages/not-logged/sign-up/sign-up';

export const routes: Routes = [
{ path: 'home', component: Home },
{ path: 'signin', component: SignIn },
{ path: 'signup', component: SignUp }
];
