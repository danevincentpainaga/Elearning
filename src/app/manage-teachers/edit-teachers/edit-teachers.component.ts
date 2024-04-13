import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-teachers',
  templateUrl: './edit-teachers.component.html',
  styleUrl: './edit-teachers.component.css'
})
export class EditTeachersComponent {

  genderList = [{ gender: 'Male' }, {gender:  'Female'}];
  selectedGender!: any;
  
}
