import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeacherSubjectsComponent } from './manage-teachers/teacher-subjects/teacher-subjects.component';
import { TeachersComponent } from './manage-teachers/teachers/teachers.component';
import { SubjectsComponent } from './manage-subjects/subjects/subjects.component';
import { MySubjectsComponent } from './my-subjects/my-subjects.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { ManageAdminAccountsComponent } from './manage-admin-accounts/manage-admin-accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "quiz", component: QuizComponent },
  { path: "manage-teachers", component: ManageTeachersComponent },
  { path: "teachers", component: TeachersComponent },
  { path: "manage-subjects", component: ManageSubjectsComponent },
  { path: "mySubjects", component: MySubjectsComponent },
  { path: "subject-details/:id", component: SubjectDetailsComponent },
  { path: "manage-admin", component: ManageAdminAccountsComponent }
  //   children: [
  //     { path: '', component: UserCreateFormComponent },
  //     { path: 'user-list', component: UserAccountsComponent }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
