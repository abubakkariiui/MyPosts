import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enterTitle = '';
  enterContent = '';
  @Output() postCreated = new EventEmitter();
  constructor() {}

  onAddPost() {
    const post = {
      title: this.enterTitle,
      content: this.enterContent,
    };

    this.postCreated.emit(post);
  }
}
