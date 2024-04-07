import { Component, OnInit } from '@angular/core';
import { User } from '../../models/models';
import { UserService } from '../../services/user.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
// import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrl: './user-accounts.component.css'
})
export class UserAccountsComponent {

  users: User[] = [];
  displayDialog: boolean = false;
  isNew: boolean = false;
  selectedUser!: User;

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  showDialogToAdd(): void {
    this.isNew = true;
    // this.selectedUser = {};
    this.displayDialog = true;
  }

  showDialogToEdit(user: User): void {
    this.isNew = false;
    this.selectedUser = { ...user };
    this.displayDialog = true;
  }

  saveUser(user: User): void {
    if (this.isNew) {
      this.userService.createUser(user).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User added successfully' });
        this.displayDialog = false;
        this.loadUsers();
      });
    } else {
      this.userService.updateUser(user).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User updated successfully' });
        this.displayDialog = false;
        this.loadUsers();
      });
    }
  }

  cancelEdit(): void {
    this.displayDialog = false;
  }

  confirmDelete(userId: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this user?',
      accept: () => {
        this.userService.deleteUser(userId).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User deleted successfully' });
          this.loadUsers();
        });
      }
    });
  }
}
