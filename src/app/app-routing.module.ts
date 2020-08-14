import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { PostTablesComponent } from './post-tables/post-tables.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

// Paths for my Components
const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'blog', component: BlogComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'admin', component: PostTablesComponent},
  {path: 'admin/newPost', component: NewPostComponent},
  {path: 'admin/post/:id', component: EditPostComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
