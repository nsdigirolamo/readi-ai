import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    console.log(this.messageForm.value);
    this.sendMessage(this.messageForm.value.message!);
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
