import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  quizForm: any = [];
  test!: any;
  questions: any[] = [
    {
      question_id: 1,
      description: 'What is the capital of France?',
      selected_answer:'',
      options: [
        { choices_id: 1, value: 'Paris'},
        { choices_id: 2, value: 'London'},
        { choices_id: 3, value: 'Berlin'},
        { choices_id: 4, value: 'Madrid'}
      ]
    },
    {
      question_id: 2,
      description: 'What is the largest planet in our solar system?',
      selected_answer:'',
      options: [
        { choices_id: 1, value: 'Jupiter' },
        { choices_id: 2, value: 'Mars' },
        { choices_id: 3, value: 'Earth' },
        { choices_id: 4, value: 'Saturn' }
      ]
    }
  ];
  
  constructor() {}

  ngOnInit() {

  }

  submitQuiz() {
    // Submit logic here
    console.log(this.questions);
  }

  selected(index: any, answer: any){
    this.questions[index].selected_answer = answer;
  }

}
