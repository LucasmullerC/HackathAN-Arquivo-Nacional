import { Component,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  constructor(private formBuilder: FormBuilder){
  }

  @Output() ButtonPressedSignup = new EventEmitter<boolean>();

  signupBuilder = this.formBuilder.group({
    name: ['', Validators.required], 
    email: ['', [Validators.required, Validators.email]], 
    password: ['', [Validators.required]], 
    confirmpassword: ['', Validators.required]
  });
  
  onSubmit(): void {
    if (this.signupBuilder.valid) {
      const formData = this.signupBuilder.value;
  
      if (formData.password !== formData.confirmpassword) {
        alert('As senhas não coincidem');
        return;
      }
  
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };
  
      let storedLoginsString = localStorage.getItem('login');
      let storedLogins = storedLoginsString ? JSON.parse(storedLoginsString) : [];

      if (storedLogins.some((login: { email: string | null | undefined; }) => login.email === formData.email)) {
        alert('Este email já está cadastrado');
        return;
      }

      storedLogins.push(userData);

      localStorage.setItem('login', JSON.stringify(storedLogins));
      
      this.signupBuilder.reset();
      
      alert('Cadastro realizado com sucesso!');
      this.ButtonPressedSignup.emit(true);
    }
  }
  
}
