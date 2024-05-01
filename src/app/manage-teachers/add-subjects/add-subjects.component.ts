import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DropdownChangeEvent } from 'primeng/dropdown/dropdown.interface';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-subjects',
  templateUrl: './add-subjects.component.html',
  styleUrl: './add-subjects.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AddSubjectsComponent {

  showTable!: boolean;
  period = [{ periodID: 1, period: '1st Grading' }];
  academicYear = [{ academicYear: '2023-2024', academicYearID: 1 }];
  selectedSem!: any;
  teachers!: any[];
  subjects!: any[];
  selectedTeacher!:string;
  selectedPeriod!: string;
  selectedAcademicYear!: string;
  tSubjecForm: FormGroup = this.fb.group({
    newSubjects: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private adminSrvc: AdminService
  ) {}

  ngOnInit() {
    this.teachers = [
      { name: 'Juan', teacherID: 1 },
      { name: 'Pedro', teacherID: 2 },
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
        subject: [null, [Validators.required, this.uniqueSubject(this.newSubjects)]],
        description: [{ value: null, disabled: true },  Validators.required]
      })
    );
  }

  uniqueSubject(newSubject: any): ValidatorFn  {
    return (control: AbstractControl): ValidationErrors | null => {
      const res = newSubject.value.findIndex((val: any) => (val.subject && val.subject === control.value));
      return res > -1 ? { Duplicate: 'Duplicate subject' } : null;
    }
  }
     
  removeRow(index: any): void {
    this.newSubjects.removeAt(index);
  }

  saveSubjects(): void {
    let subjects = this.newSubjects.value.map((val: any) => {
      return {
        ...val,
        subject: val.subject,
        period: this.selectedPeriod,
        academic_year: this.selectedAcademicYear,
        teacherID: this.selectedTeacher
      }  
    });
    console.log("subjects", subjects);
  }

  onChangeTeacher($event: DropdownChangeEvent): void {
    this.showTable = $event.value ? true : false;
  }

  onClearValue(): void {
    this.tSubjecForm.reset();
    this.newSubjects.clear();
    this.tSubjecForm.updateValueAndValidity();
  }

  tooltipText(formControl: any) {
    if(formControl?.errors?.['Duplicate']) {
      return formControl?.errors?.['Duplicate'];
    }
    else if(formControl.touched && formControl.status === 'INVALID') {
      return "Required";
    }
  }


}

