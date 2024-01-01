import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../services/blog-post.service";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() post?: Post;

  constructor() {
  }

  ngOnInit() {
  }


}
