import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrl: './add-questions.component.css'
})
export class AddQuestionsComponent {
  scores =  [{ value: 0 },{ value: 1 }];
  
  questionForm: FormGroup = this.fb.group({
    teacher_id: 1,
    qtype: ['short quiz'],
    question: [null],
    choices: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    for (let index = 0; index < 2; index++) {
      this.addChoices();
    }
  }

  get choices(): FormArray {
    return this.questionForm.get('choices') as FormArray;
  }

  addChoices(): void {
    let group: FormGroup = this.fb.group({});
    group.addControl('choice', this.fb.control(''));
    group.addControl('score', this.fb.control(0));
    this.choices.push(group);
  }

  removeRow(index: any): void {
    this.choices.removeAt(index);
  }

  onQuestionSubmit() {
    console.log(this.questionForm.value);
  }

}
