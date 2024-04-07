import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownChangeEvent } from 'primeng/dropdown/dropdown.interface';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-subjects',
  templateUrl: './add-subjects.component.html',
  styleUrl: './add-subjects.component.css'
})
export class AddSubjectsComponent {

  showTable!: boolean;
  period = [{ period_id: 1, period: '1st Grading' }];
  academicYear = [{ academic_year: '2023-2024', ayID: 1 }];
  selectedSem!: any;
  teachers!: any[];
  subjects!: any[];
  selectedTeacher: any;
  tSubjecForm: FormGroup = this.fb.group({
    newSubjects: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private adminSrvc: AdminService
  ) {}

  ngOnInit() {
    this.teachers = [
      { name: 'Juan', teacher_id: 1 },
      { name: 'Pedro', teacher_id: 2 },
    ];

    this.adminSrvc.getSubjects().then(res => {
      console.log(res);
      this.subjects = res;
    });
  }

  get newSubjects(): FormArray {
    return this.tSubjecForm.get('newSubjects') as FormArray;
  }

  addNewSubject(): void {
    this.newSubjects.push(
      this.fb.group({
        subject: [null, Validators.required],
        description: [null, Validators.required],
        period: [null, Validators.required],
        academic_year: [null, Validators.required],
        teacher_id: [this.selectedTeacher.teacher_id],
      })
    );
  }
     
  removeRow(index: any): void {
    this.newSubjects.removeAt(index);
  }

  saveSubjects(): void {
    let subjects = this.newSubjects.value.map((val: any) => {
      return {
        ...val,
        academic_year: val.academic_year.ayID,
        period: val.period.period_id,
        subject: val.subject.subject_id
      }  
    });
    console.log("subjects", subjects);
  }

  onChangeTeacher($event: DropdownChangeEvent): void {
    this.showTable = $event.value ? true : false;
    if(!$event.value) {
      this.tSubjecForm.reset();
      this.newSubjects.clear();
      this.tSubjecForm.updateValueAndValidity();
    }
  }

  onChangeSubject($event: DropdownChangeEvent): void {

  }

  onChangeAcademicYear($event: DropdownChangeEvent): void {

  }

}

