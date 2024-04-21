import { Component } from '@angular/core';

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

@Component({
  selector: 'app-assign-quiz',
  templateUrl: './assign-quiz.component.html',
  styleUrl: './assign-quiz.component.css'
})
export class AssignQuizComponent {

    searchOptions = [{ label:'Quiz name', value: 'quizname' }, { label:'Question', value: 'question' }]

  draggedProduct!: any;

  first: number = 0;

  rows: number = 10;

  sourceProducts = [
    {
        question_id: 1,
        quizname: 'Product Design',
        question: 'What is product design',
    },
    {
        question_id: 2,
        quizname: 'Agile Methodology',
        question: 'What is Agile',
    }
  ];

  targetProducts!: any[];

  constructor() {}

    ngOnInit() {
        this.targetProducts = [];
    }

    onPageChange(event: PageEvent) {
        this.first = event.first;
        this.rows = event.rows;
    }

    onSubmit() {
        console.log(this.targetProducts);
    }

    onSourceFilter(event: any) {
        debugger;
    }

}
