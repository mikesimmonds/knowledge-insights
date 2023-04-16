import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

interface ChatMessage {
  answer: string;
  sender: 'user' | 'gpt';
  question?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private httpClient: HttpClient
  ) { }

  chatMessages: ChatMessage[] = [];
  userInput = ''; 

  onSubmit(): void {
    if (this.userInput.trim()) {
      this.chatMessages.push({ answer: this.userInput, sender: 'user' });
      this.askQuestion(this.userInput).subscribe((response) => {
        this.chatMessages.push({ answer: response.text, sender: 'gpt', question: this.userInput.trim() });
      });
      this.userInput = '';
    }
  }

  askQuestion(questionText: string): Observable<any> {
    return this.httpClient.post<{ text: string }>(`${environment.api.serverUrl}/api/questions/ask`, { questionText, chatHistory: this.chatMessages.map(msg => msg.answer + msg.question) })
      .pipe(
        map(response => response.text ),
        catchError(error => { 
          // if error is 401 or 403 add a message to the chatMessages array
          if (error.status === 401 || error.status === 403) {
            this.chatMessages.push({ answer: 'You are not authorized to ask questions', sender: 'gpt' });
          }
          return error;
        })
      );
  }

}
