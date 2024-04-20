import { Component,Input, Output, EventEmitter } from '@angular/core';
import { ChallengeFormComponent } from '../../forms/challenge-form/challenge-form.component';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [ChallengeFormComponent],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.css'
})
export class ChallengeComponent {
  @Input()imageurl: any;

  @Output() ButtonPressedChallenge = new EventEmitter<boolean>();

  OnbuttonPress(btn:boolean){
    this.ButtonPressedChallenge.emit(true);
  }
}
