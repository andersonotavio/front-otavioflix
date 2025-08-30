import { Component } from '@angular/core';
import { Header } from "../../../components/not-logged/header/header";
import { Register } from "../../../components/not-logged/register/register";


@Component({
  selector: 'app-sign-up',
  imports: [Header,  Register],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {

}
