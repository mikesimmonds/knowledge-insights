import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  latestAnswer: string = "";

  constructor(
    private httpClient: HttpClient
  ) {}


  askQuestion(questionText: string) {
    const req = this.httpClient.post<{text:string}>(`${environment.api.serverUrl}/api/questions/ask`, { questionText });
    req.subscribe((response) => {
      this.latestAnswer = response.text;
     })
  }

}
