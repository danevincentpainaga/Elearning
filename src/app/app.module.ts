import { NgModule } from '@angular/core';
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
import { SubjectsComponent } from './subjects/subjects.component';
import { MySubjectsComponent } from './my-subjects/my-subjects.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { DialogModule } from 'primeng/dialog';
import { UserAccountsComponent } from './user-management/user-accounts/user-accounts.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserCreateFormComponent } from './user-management/user-create-form/user-create-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AddSubjectsComponent } from './manage-teachers/add-subjects/add-subjects.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';
import { AddTeachersComponent } from './manage-teachers/add-teachers/add-teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeacherSubjectsComponent,
    TeachersComponent,
    SubjectsComponent,
    MySubjectsComponent,
    SubjectDetailsComponent,
    UserAccountsComponent,
    UserManagementComponent,
    UserCreateFormComponent,
    AddSubjectsComponent,
    ManageTeachersComponent,
    AddTeachersComponent
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
    DialogModule
  ],
  providers: [ConfirmationService, MessageService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
