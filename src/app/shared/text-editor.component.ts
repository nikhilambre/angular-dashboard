import { Component, OnInit, OnDestroy, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
declare var tinymce: any;

@Component({
  selector: 'app-text-editor',
  template: `<textarea id="{{ elementId }}">{{ contentFromDB }}</textarea>`
})
export class TextEditorComponent implements AfterViewInit, OnDestroy {

  editor;
  constructor() { }

  @Input() contentFromDB: any;
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  ngAfterViewInit() {
    tinymce.init({
      skin_url: '/assets/skins/lightgray',
      plugins: ['link', 'paste', 'table', 'advlist', 'autoresize', 'lists', 'code', 'preview', 'image', 'imagetools', 'media'],
      selector: '#' + this.elementId,
      // file_browser_callback: function(field_name, url, type, win) {
      //   win.document.getElementById(field_name).value = 'my browser value';
      // },
      // file_browser_callback_types: 'file image media',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
