import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {

  messageForm = this.formBuilder.group({
    message: ''
  })

  outgoingMessages: string[] = [];
  incomingMessages: string[] = [];

  POST_ENDPOINT = "http://localhost:8000/ask_question/"
  
  constructor(
    private httpService: HttpService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    let message: string = this.messageForm.value.message!
    this.sendMessage(message);
    this.httpService.post<string>(this.POST_ENDPOINT, message).subscribe(
      incomingMessage => {console.log("Recieved Response: " + incomingMessage)}
    );
    this.messageForm.reset();
  }

  sendMessage(message: string): void {
    this.outgoingMessages.push(message);
    this.incomingMessages.push("..."); // TODO: Remove me
    console.log(this.outgoingMessages);
  }

  recieveMessage(message: string): void {

  }

}
