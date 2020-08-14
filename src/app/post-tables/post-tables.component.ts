import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post-tables',
  templateUrl: './post-tables.component.html',
  styleUrls: ['./post-tables.component.css']
})
export class PostTablesComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];
  private posts;

  constructor(private postService: PostService, private router: Router) { }
  ngOnInit(): void {
    this.posts = this.postService.getAllPosts().subscribe(data => this.blogPosts = data);
  }
  rowClicked(e, id){
    this.router.navigate(['/admin/post',id])
  }
}
