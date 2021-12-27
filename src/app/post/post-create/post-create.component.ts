import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  newPost = '';

  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = postInput.value;
    console.log(postInput.value);
    console.dir(postInput);
  }
}
