import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';



@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuestionsComponent,
      },
    ]),
  ],
})
export class QuestionsModule { }
