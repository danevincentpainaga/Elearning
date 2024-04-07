import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownChangeEvent } from 'primeng/dropdown/dropdown.interface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdminService } from '../services/admin.service';
import { TeacherSubjectsComponent } from './teacher-subjects/teacher-subjects.component';

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrl: './manage-teachers.component.css'
})
export class ManageTeachersComponent {

  showTable!: boolean;
  period = [{ period_id: 1, period: '1st Grading' }];
  academicYear = [{ academic_year: '2023-2024', ayID: 1 }];
  teachers!: any[];
  subjects!: any[];
  tSubjecForm: FormGroup = this.fb.group({
    newSubjects: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private adminSrvc: AdminService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.adminSrvc.getAllTeachers().then(res => {
      console.log(res);
      this.teachers = res;
    });

    // this.adminSrvc.getSubjects().then(res => {
    //   console.log(res);
    //   this.subjects = res;
    // });
  }

  get newSubjects(): FormArray {
    return this.tSubjecForm.get('newSubjects') as FormArray;
  }

  viewDetails() {
    this.dialogService.open(TeacherSubjectsComponent, {
        header: 'Details',
        width: '90vw',
        modal:true,
        maximizable: true,
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },
    });
  }

}

