import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {

  questions: string[] = [
    "Test Question 1",
    "Test Question 2",
    "Test Question 3",
    "Test Question 4",
    "Test Question 5",
    "Test Question 6"
  ];

  answers: string[] = [
    "Answer 1",
    "Answer 2",
    "Answer 3",
    "Answer 4",
    "Answer 5",
    "Answer 6"
  ];

  askQuestion(question: string): void {
    this.questions.push(question);
  }

  addAnswer(response: string): void {
    this.answers.push(response);
  }

}
