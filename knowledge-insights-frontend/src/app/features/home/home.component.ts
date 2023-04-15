import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

interface ChatMessage {
  text: string;
  sender: 'user' | 'gpt';
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
      this.chatMessages.push({ text: this.userInput, sender: 'user' });
      this.askQuestion(this.userInput).subscribe((response) => {
        this.chatMessages.push({ text: response, sender: 'gpt' });
      });
      this.userInput = '';
    }
  }

  askQuestion(questionText: string) {
    return this.httpClient.post<{text:string}>(`${environment.api.serverUrl}/api/questions/ask`, { questionText }).pipe(map(response => response.text));
  }

}
