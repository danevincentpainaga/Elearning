import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/models';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrl: './user-create-form.component.css'
})
export class UserCreateFormComponent {

  @Input() isNew: boolean = true;
  @Input() user!: User;
  @Output() onSave: EventEmitter<User> = new EventEmitter<User>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  save(): void {
    if (this.userForm.valid) {
      const formData = { ...this.user, ...this.userForm.value };
      this.onSave.emit(formData);
    }
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
