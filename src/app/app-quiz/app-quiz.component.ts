import { Component } from '@angular/core';

@Component({
  selector: 'app-app-quiz',
  templateUrl: './app-quiz.component.html',
  styleUrls: ['./app-quiz.component.css']
})
export class AppQuizComponent {
  isButtonClicked = [false, false, false];


  toggleButton(index: number) {
    this.isButtonClicked[index] = !this.isButtonClicked[index];
  }

}


