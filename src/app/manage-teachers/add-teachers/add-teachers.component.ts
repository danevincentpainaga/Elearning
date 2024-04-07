import { Component } from '@angular/core';

@Component({
  selector: 'app-add-teachers',
  templateUrl: './add-teachers.component.html',
  styleUrl: './add-teachers.component.css'
})
export class AddTeachersComponent {

  genderList = [{ gender: 'Male' }, {gender:  'Female'}];
  selectedGender!: any;

}
