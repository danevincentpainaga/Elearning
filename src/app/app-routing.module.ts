import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeacherSubjectsComponent } from './manage-teachers/teacher-subjects/teacher-subjects.component';
import { TeachersComponent } from './manage-teachers/teachers/teachers.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { MySubjectsComponent } from './my-subjects/my-subjects.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserCreateFormComponent } from './user-management/user-create-form/user-create-form.component';
import { UserAccountsComponent } from './user-management/user-accounts/user-accounts.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "manage-teachers", component: ManageTeachersComponent },
  { path: "teachers", component: TeachersComponent },
  { path: "subjects", component: SubjectsComponent },
  { path: "mySubjects", component: MySubjectsComponent },
  { path: "subject-details/:id", component: SubjectDetailsComponent },
  { path: "user-management", component: UserManagementComponent,
    children: [
      { path: '', component: UserCreateFormComponent },
      { path: 'user-list', component: UserAccountsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
