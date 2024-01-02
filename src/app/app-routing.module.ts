import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NewPostComponent} from './blog-post/new-post/new-post.component';
import {EditPostsComponent} from "./blog-post/edit-posts/edit-posts.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'edit-posts', component: EditPostsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'new-post', component: NewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
