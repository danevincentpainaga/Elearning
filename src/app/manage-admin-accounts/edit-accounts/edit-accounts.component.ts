import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-accounts',
  templateUrl: './edit-accounts.component.html',
  styleUrl: './edit-accounts.component.css'
})
export class EditAccountsComponent {

  roleList = [
    { label: 'Manage teachers', role: 'manage_teachers' },
    { label: 'Manage Admin', role: 'manage_admins' },
    { label: 'Manage students', role: 'manage_students' }
  ];
  genderList = [{ gender: 'Male' }, {gender:  'Female'}];

  accountEditForm: FormGroup = this.fb.group({
    firstname: [null, Validators.required],
    middle_initial: [null, Validators.required],
    lastname: [null, Validators.required],
    gender: [this.genderList],
    roles: [this.roleList, Validators.required]
  });


  constructor(private fb: FormBuilder) {}

  ngOninit() {

  }

}
