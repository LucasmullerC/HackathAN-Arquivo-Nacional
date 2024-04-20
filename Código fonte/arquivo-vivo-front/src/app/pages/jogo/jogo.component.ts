import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

import { ChallengeComponent } from '../../layout/challenge/challenge.component';

@Component({
  selector: 'app-jogo',
  standalone: true,
  imports: [CommonModule,ChallengeComponent],
  templateUrl: './jogo.component.html',
  styleUrl: './jogo.component.css'
})
export class JogoComponent implements OnInit{
  logins:any;
  currentUser: any; 
  imageurl:any;

  constructor(private router: Router,){
  }

  ngOnInit(): void {
    const storedLoginsString = localStorage.getItem('login');
    this.logins = storedLoginsString ? JSON.parse(storedLoginsString) : [];

    this.currentUser = this.logins.find((user: { loggedIn: boolean }) => user.loggedIn);

    console.log(this.logins);
    if (this.currentUser && this.currentUser.loggedIn) {
      if (!this.currentUser.phase) {
        this.currentUser.phase = 1;
      }
      if (!this.currentUser.wins) {
        this.currentUser.wins = 0;
      }

      localStorage.setItem('login', JSON.stringify(this.logins));
    }
    else{
      this.router.navigate(['/login'])
    }

    switch(this.currentUser.phase){
      case 1:
        this.imageurl='../../assets/images/image1.png';
        break;
      case 2:
        this.imageurl='../../assets/images/image2.png';
        break;
      case 3:
        this.imageurl='../../assets/images/image4.png';
        break;
      case 4:
        this.imageurl='../../assets/images/image5.png';
        break;
    }
  }
  OnbuttonPress(btn:boolean){
    const challenge = document.querySelector('.challenge');
    if(challenge){
      challenge.setAttribute("style","display:none;");
    }
    this.currentUser.phase = this.currentUser.phase + 1;

    if(this.currentUser.phase == 5){
      this.currentUser.phase = 1;
      this.currentUser.wins = this.currentUser.wins + 1;
    }

    switch(this.currentUser.phase){
      case 1:
        this.imageurl='../../assets/images/image1.png';
        break;
      case 2:
        this.imageurl='../../assets/images/image2.png';
        break;
      case 3:
        this.imageurl='../../assets/images/image4.png';
        break;
      case 4:
        this.imageurl='../../assets/images/image5.png';
        break;
    }
    localStorage.setItem('login', JSON.stringify(this.logins));
  }

  startChallenge(): void{
    const challenge = document.querySelector('.challenge');
    if(challenge){
      challenge.setAttribute("style","display:block;");
    }
  }
}
