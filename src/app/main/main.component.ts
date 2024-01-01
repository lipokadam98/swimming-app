import { Component } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  posts$ = this.blogPostService.loadPosts();

  constructor(private blogPostService: BlogPostService){
    this.blogPostService.loadPosts()
  }




}
