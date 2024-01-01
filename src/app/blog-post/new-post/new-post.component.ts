import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogPostService, Post} from "../../services/blog-post.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPostGroup: FormGroup;

  constructor(private blogPostService: BlogPostService,
              private dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: Post) {
    this.newPostGroup = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'content': new FormControl(null, [Validators.required])
    })

  }

  ngOnInit() {
    if (this.data) {
      this.newPostGroup.get('title')?.setValue(this.data.title);
      this.newPostGroup.get('content')?.setValue(this.data.content);
    }
  }

  submitForm() {
    const title = this.newPostGroup.get('title')?.value;
    const content = this.newPostGroup.get('content')?.value;
    this.blogPostService.addPost(title, content)
    this.dialogRef.close();
  }
}
