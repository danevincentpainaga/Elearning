import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-accounts',
  templateUrl: './add-accounts.component.html',
  styleUrl: './add-accounts.component.css'
})
export class AddAccountsComponent {

  roleList = [
    { label: 'Manage teachers', role: 'manage_teachers' },
    { label: 'Manage Admin', role: 'manage_admins' },
    { label: 'Manage students', role: 'manage_students' }
  ];
  genderList = [{ gender: 'Male' }, {gender:  'Female'}];

  accountCreateForm: FormGroup = this.fb.group({
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
