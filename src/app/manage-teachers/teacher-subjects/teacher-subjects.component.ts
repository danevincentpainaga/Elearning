import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownChangeEvent } from 'primeng/dropdown/dropdown.interface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdminService } from '../../services/admin.service';
import { TeachersComponent } from '../teachers/teachers.component';

@Component({
  selector: 'app-teacher-subjects',
  templateUrl: './teacher-subjects.component.html',
  styleUrl: './teacher-subjects.component.css'
})
export class TeacherSubjectsComponent {

  // teachersSubjects = [];
  editingRowIndex: number = -1;
  editing!: boolean;
  showTable!: boolean;
  period = [{ periodID: 1, period: '1st Grading' }];
  academicYear = [{ ayID: 1, academicYear: '2023-2024' }];
  selectedSem!: any;
  teachers!: any[];
  teacherSubjects!: any[];
  subjects!: any[];
  selectedTeacher: any;
  tSubjecForm: FormGroup = this.fb.group({
    tSubjects: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private adminSrvc: AdminService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {

    this.adminSrvc.getSubjects().then(res => {
      console.log("subjects", res);
      this.subjects = res;
    });
    
    this.adminSrvc.getTeacherSubjects().then(res => {
      console.log("tSubjects", res);
      this.teacherSubjects = res;
      res.forEach(val => {
        this.tSubjects.push(
          this.fb.group({
            teacher: [val.teacher || null, Validators.required],
            subject: [val.subject || null, Validators.required],
            description: [val.subject.description || null, Validators.required],
            period: [val.period || null, Validators.required],
            academicYear: [val.academicYear || null, Validators.required],
            teacherID: [val.teacherID || null, Validators.required],
          })
        );
      })
    });
  }

  get tSubjects(): FormArray {
    return this.tSubjecForm.get('tSubjects') as FormArray;
  }
       
  removeRow(index: any): void {
    this.tSubjects.removeAt(index);
  }

  onRowEditInit(rowIndex: number) {
    this.editingRowIndex = rowIndex;
    this.editing = true;
    // this.clonedProducts[product.id] = {...product};
  }

  onRowEditCancel(): void {
    this.editingRowIndex = -1;
    this.editing = false;
  }

  onRowEditSave(subject: any) {
    console.log(subject);
    // this.clonedProducts[product.id] = {...product};
  }
  
  saveSubjects(): void {
    let subjects = this.tSubjects.value.map((val: any) => {
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
      this.tSubjects.clear();
      this.tSubjecForm.updateValueAndValidity();
    }
  }

  onChangeSubject($event: DropdownChangeEvent): void {

  }

  onChangeAcademicYear($event: DropdownChangeEvent): void {

  }

  viewDetails() {
    this.dialogService.open(TeachersComponent, {
        header: 'Select a Product',
        width: '90vw',
        modal:true,
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },
    });
  }

}
