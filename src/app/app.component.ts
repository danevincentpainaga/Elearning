import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  files: TreeNode[] = [{
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
          {
              key: '0-0',
              label: 'Work',
              data: 'Work Folder',
              icon: 'pi pi-fw pi-cog',
              children: [
                  { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                  { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
              ]
          },
          {
              key: '0-1',
              label: 'Home',
              data: 'Home Folder',
              icon: 'pi pi-fw pi-home',
              children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
          }
      ]
    }
  ];

  title = 'angular';
  public Editor = ClassicEditor;

  config = {
    // toolbar: {
    //   items: [
    //     'heading',
    //     '|',
    //     'bold',
    //     'italic',
    //     'link',
    //     'bulletedList',
    //     'numberedList',
    //     'alignment',
    //     'imageUpload',
    //     'blockQuote',
    //     'undo',
    //     'redo'
    //   ]
    // },
    // alignment: {
    //   options: ['left', 'right', 'center', 'justify']
    // },
    // removePlugins: ['MediaEmbed', 'Link'], mediaEmbed: {}//if you want to remove any plugin
    // image: {
    //   toolbar: [
    //     'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
    //     '|',
    //     'imageStyle:full',
    //     'imageStyle:side',
    //     '|',
    //     'imageTextAlternative',
    //     'toggleImageCaption',
    //   ]
    // }
  }

//   onReady(eventData: any) {
//     eventData.plugins.get('FileRepository').createUploadAdapter = function (loader: any) {
//       // console.log(btoa(loader.file));
//       return new UploadAdapter(loader);
//     };
//   }

//   save() {

//   }

//   public onChange({ editor }: ChangeEvent) {
//     const data = editor.getData();
//     console.log("data", data);
//   }

// }

// class UploadAdapter {
//   loader!: any;
//   constructor( loader: any ) {
//      this.loader = loader;
//   }

//   upload() {
//      return this.loader.file
//            .then((file: any) => new Promise( ( resolve, reject ) => {
//                  var myReader= new FileReader();
//                  myReader.onloadend = (e) => {
//                     resolve({ default: myReader.result });
//                  }
//                  myReader.readAsDataURL(file);
//            } ) );
//     // return {
//     //   default: 'https://picsum.photos/200/300'
//     // }
//   };

  expandAll() {
    this.files.forEach((node) => {
        this.expandRecursive(node, true);
    });
  }

  collapseAll() {
      this.files.forEach((node: any) => {
          this.expandRecursive(node, false);
      });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
      node.expanded = isExpand;
      if (node.children) {
          node.children.forEach((childNode) => {
              this.expandRecursive(childNode, isExpand);
          });
      }
  }
}