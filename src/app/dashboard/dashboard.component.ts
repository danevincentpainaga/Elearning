import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  topics!: TreeNode[];

  ngOnInit() {
    this.topics = [
      {
        label: 'Math 101',
        data: 'Chapter',
        icon: 'pi pi-folder-open',
        children: [
          {
            label: 'Quiz 1',
            data: 'Topic',
            icon: 'pi pi-book',
            // children: [
            //   { label: 'Introduction to JavaScript' },
            //   { label: 'Advanced JavaScript' }
            // ]
          },
          {
            label: 'Quiz 2',
            data: 'Topic',
            icon: 'pi pi-book',
            // children: [
            //   { label: 'Introduction to Python' },
            //   { label: 'Advanced Python' }
            // ]
          }
        ]
      },
      {
        label: 'Science',
        data: 'Chapter',
        icon: 'pi pi-folder-open',
        children: [
          {
            label: 'Angular',
            data: 'Topic',
            icon: 'pi pi-book',
          },
          {
            label: 'React',
            data: 'Topic',
            icon: 'pi pi-book',
          }
        ]
      }
    ];
  }

}
