import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-quiz-name',
  templateUrl: './add-quiz-name.component.html',
  styleUrl: './add-quiz-name.component.css'
})
export class AddQuizNameComponent {

  quizNameForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.quizNameForm = this.fb.group({
      quizname: [null, Validators.required],
    });
  }
  
}
