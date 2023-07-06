import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppQuizComponent } from './app-quiz/app-quiz.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { TopbannerComponent } from './topbanner/topbanner.component';

@NgModule({
  declarations: [
    AppComponent,
    AppQuizComponent,
    ChatboxComponent,
    TopbannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
