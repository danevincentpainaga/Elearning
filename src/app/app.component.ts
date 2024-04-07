import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
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

  onReady(eventData: any) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader: any) {
      // console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }

  save() {

  }

  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log("data", data);
  }

}

class UploadAdapter {
  loader!: any;
  constructor( loader: any ) {
     this.loader = loader;
  }

  upload() {
     return this.loader.file
           .then((file: any) => new Promise( ( resolve, reject ) => {
                 var myReader= new FileReader();
                 myReader.onloadend = (e) => {
                    resolve({ default: myReader.result });
                 }
                 myReader.readAsDataURL(file);
           } ) );
    // return {
    //   default: 'https://picsum.photos/200/300'
    // }
  };
}