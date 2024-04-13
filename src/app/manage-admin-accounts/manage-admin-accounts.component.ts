import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownChangeEvent } from 'primeng/dropdown/dropdown.interface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdminService } from '../services/admin.service';
import { EditAccountsComponent } from './edit-accounts/edit-accounts.component';

@Component({
  selector: 'app-manage-admin-accounts',
  templateUrl: './manage-admin-accounts.component.html',
  styleUrl: './manage-admin-accounts.component.css'
})
export class ManageAdminAccountsComponent {

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

  editAccount() {
    this.dialogService.open(EditAccountsComponent, {
      header: 'Edit',
      width: '50vw',
      modal:true,
      draggable: true,
      maximizable: true,
      data: {
        teachersData: {}
      }
    });   
  }

}