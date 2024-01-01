import {Component, inject, OnInit} from '@angular/core';
import {BlogPostService, Post} from "../../services/blog-post.service";
import {take} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {NewPostComponent} from "../new-post/new-post.component";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.scss']
})
export class EditPostsComponent implements OnInit {
  displayedColumns = ['title', 'action'];
  blogPostService = inject(BlogPostService);
  public dialog = inject(MatDialog);
  dataSource = new MatTableDataSource<Post>();

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.blogPostService.loadPosts().pipe(take(1)).subscribe(posts => {
      this.dataSource.data = posts
    });
  }

  newPost() {
    this.dialog.open(NewPostComponent, {
      width: '500px'
    }).afterClosed().pipe(take(1)).subscribe(() => {
      this.getPosts()
    });
  }

  editPost(post: Post) {
    this.dialog.open(NewPostComponent, {
      width: '500px',
      data: post
    }).afterClosed().pipe(take(1)).subscribe(() => {
      this.getPosts()
    });
  }
}
