import { Component } from '@angular/core';
import { LoginFormComponent } from '../../forms/login-form/login-form.component';
import { SignupFormComponent } from '../../forms/signup-form/signup-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent,SignupFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  OnbuttonPress(signupbtn:boolean){
    const signup = document.querySelector('.signup-form');
    const login = document.querySelector('.login-form');
    if (signup) {
      signup.setAttribute("style","display:block;");
    }
    if(login){
      login.setAttribute("style","display:none;");
    }

    document.body.style.overflow = 'auto';
  }

  OnbuttonPressSignup(signupbtn:boolean){
    const signup = document.querySelector('.signup-form');
    const login = document.querySelector('.login-form');
    if (signup) {
      signup.setAttribute("style","display:none;");
    }
    if(login){
      login.setAttribute("style","display:block;");
    }
    
    document.body.style.overflow = 'auto';
  }
}
