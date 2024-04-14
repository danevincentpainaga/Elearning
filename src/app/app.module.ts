import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// for shared module
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { TeacherSubjectsComponent } from './manage-teachers/teacher-subjects/teacher-subjects.component';
import { DropdownModule } from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { TeachersComponent } from './manage-teachers/teachers/teachers.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SubjectsComponent } from './manage-subjects/subjects/subjects.component';
import { MySubjectsComponent } from './my-subjects/my-subjects.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AddSubjectsComponent } from './manage-teachers/add-subjects/add-subjects.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';
import { AddTeachersComponent } from './manage-teachers/add-teachers/add-teachers.component';
import { EditTeachersComponent } from './manage-teachers/edit-teachers/edit-teachers.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { AddSubjectsFormComponent } from './manage-subjects/add-subjects-form/add-subjects-form.component';
import { EditSubjectsFormComponent } from './manage-subjects/edit-subjects-form/edit-subjects-form.component';
import { ManageAdminAccountsComponent } from './manage-admin-accounts/manage-admin-accounts.component';
import { AddAccountsComponent } from './manage-admin-accounts/add-accounts/add-accounts.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { EditAccountsComponent } from './manage-admin-accounts/edit-accounts/edit-accounts.component';
import { TreeModule } from 'primeng/tree';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PanelModule} from 'primeng/panel';
import { QuizComponent } from './quiz/quiz.component';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeacherSubjectsComponent,
    TeachersComponent,
    SubjectsComponent,
    MySubjectsComponent,
    SubjectDetailsComponent,
    AddSubjectsComponent,
    ManageTeachersComponent,
    AddTeachersComponent,
    EditTeachersComponent,
    ManageSubjectsComponent,
    AddSubjectsFormComponent,
    EditSubjectsFormComponent,
    ManageAdminAccountsComponent,
    AddAccountsComponent,
    EditAccountsComponent,
    DashboardComponent,
    QuizComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    TabViewModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    DialogModule,
    MultiSelectModule,
    TreeModule,
    PanelModule,
    RadioButtonModule
  ],
  providers: [ConfirmationService, MessageService, DialogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
