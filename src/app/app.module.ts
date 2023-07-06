import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppQuizComponent } from './app-quiz/app-quiz.component';
<<<<<<< HEAD
=======
import { TopbannerComponent } from './topbanner/topbanner.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
>>>>>>> 6891909c4b050c4e9a40f685139217c97b519bd5

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    AppQuizComponent,
<<<<<<< HEAD
=======
    ChatboxComponent,
    TopbannerComponent
>>>>>>> 6891909c4b050c4e9a40f685139217c97b519bd5
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
