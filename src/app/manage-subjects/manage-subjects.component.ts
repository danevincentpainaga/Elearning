import { Component } from '@angular/core';
import { EditSubjectsFormComponent } from './edit-subjects-form/edit-subjects-form.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrl: './manage-subjects.component.css'
})
export class ManageSubjectsComponent {
  
  products!: any[];
  items!: any[];
  cities!: any[];
  selectedCity!: any;
  home: any;

  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.products = [{
      id: '1000',
      grade: 'Grade 8',
      section: 'Rose A',
      subject: 'Science',
      createdBy: 'Developer',
      updatedBy: 'Developer'
    }];

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  
  }

  editSubject() {
    this.dialogService.open(EditSubjectsFormComponent, {
      header: 'Edit',
      width: '30vw',
      modal:true,
      draggable: true,
      data: {
        teachersData: {}
      }
    });   
  }
      
}
