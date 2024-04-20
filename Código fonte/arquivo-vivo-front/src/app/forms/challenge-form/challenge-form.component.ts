import { Component, EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-challenge-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './challenge-form.component.html',
  styleUrl: './challenge-form.component.css'
})
export class ChallengeFormComponent {
  constructor(private formBuilder: FormBuilder){
  }
  @Output() ButtonPressed = new EventEmitter<boolean>();

  challengeBuilder = this.formBuilder.group({
    data: ['', Validators.required], 
    title: ['', [Validators.required]], 
    content: ['', [Validators.required]], 
    accesspoint: ['', Validators.required]
  });

  onSubmit(): void {
    this.ButtonPressed.emit(true);
    this.challengeBuilder.reset();
  }

}
