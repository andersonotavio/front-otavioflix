import { Component } from '@angular/core';
import { Header } from '../../../components/not-logged/header/header';
import { Login } from '../../../components/not-logged/login/login';

@Component({
  selector: 'app-sign-in',
  imports: [Header, Login],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {

}
