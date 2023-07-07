import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppQuizComponent } from './app-quiz/app-quiz.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    AppQuizComponent,
    TopbannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
