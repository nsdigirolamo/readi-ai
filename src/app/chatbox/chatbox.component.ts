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
    let message: Message = {
      message: this.messageForm.value.message!,
      response: ""
    }
    this.sendMessage(message.message);
    this.httpService.post<string>(this.POST_ENDPOINT, message).subscribe(
      incomingMessage => {
        console.log("Recieved Response: " + incomingMessage)
        this.recieveMessage(JSON.parse(incomingMessage).response);
      }
    );
    this.messageForm.reset();
  }

  sendMessage(message: string): void {
    this.outgoingMessages.push(message);
    this.incomingMessages.push("...");
    console.log(this.outgoingMessages);
  }

  recieveMessage(message: string): void {
    this.incomingMessages.pop();
    this.incomingMessages.push(message);
  }

}

export interface Message {
  message: string
  response: string
} 
