import { Component,Output,EventEmitter, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ FormsModule,ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(private formBuilder: FormBuilder,private router: Router){
  }

  loginBuilder = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]], 
    password: ['', Validators.required], 
  });

  @Output() ButtonPressed = new EventEmitter<boolean>();

  onSubmit(): void {
    if (this.loginBuilder.valid) {
      const formData = this.loginBuilder.value;
      const storedLoginsString = localStorage.getItem('login');

      const storedLogins = storedLoginsString ? JSON.parse(storedLoginsString) : '';
      if (storedLogins && Array.isArray(storedLogins)) {
        const matchedLogin = storedLogins.find(login => login.email === formData.email && login.password === formData.password);
  
        if (matchedLogin) {
          matchedLogin.loggedIn = true;
          localStorage.setItem('login', JSON.stringify(storedLogins));
          this.router.navigate(['/jogo']);
        } else {
          const overlay = document.querySelector('.overlay');
          if (overlay) {
            overlay.setAttribute("style","display:flex;");
          }
          document.body.style.overflow = 'hidden';
        }
      } else {
        const overlay = document.querySelector('.overlay');
        if (overlay) {
          overlay.setAttribute("style","display:flex;");
        }
        document.body.style.overflow = 'hidden';
      }
    }
  }

  onSubmitFail(): void{
    alert("Funcionalidade indisponivel no momento. :(");
  }

  onSubmitSignup():void {
    this.ButtonPressed.emit(true);
  }
}
