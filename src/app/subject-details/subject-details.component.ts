import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrl: './subject-details.component.css'
})
export class SubjectDetailsComponent {

  products!: any[];
  items!: any[];
  cities!: any[];
  selectedCity!: any;
  home: any;
  visible!: boolean;

  constructor() {}

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

  addModule() {
    this.visible = true;
  }

  viewDetails() {
    this.visible = true;
  }
      
}

