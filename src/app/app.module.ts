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
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { ExamsComponent } from './exams/exams.component';
import { AddQuizNameComponent } from './exams/add-quiz-name/add-quiz-name.component';
import { AddQuestionsComponent } from './exams/add-questions/add-questions.component';
import { AssignQuizComponent } from './exams/assign-quiz/assign-quiz.component';
import { SplitterModule } from 'primeng/splitter';
import { PaginatorModule } from 'primeng/paginator';
import { PickListModule } from 'primeng/picklist';
import { CustomToolTipDirective } from './shared/directives/custom-tool-tip.directive';
import { SplitButtonModule } from 'primeng/splitbutton';

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
    QuizComponent,
    ExamsComponent,
    AddQuizNameComponent,
    AddQuestionsComponent,
    AssignQuizComponent,
    CustomToolTipDirective
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
    RadioButtonModule,
    CardModule,
    InputNumberModule,
    DividerModule,
    SplitterModule,
    PaginatorModule,
    PickListModule,
    SplitButtonModule
  ],
  providers: [ConfirmationService, MessageService, DialogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
