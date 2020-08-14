import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost;
  tags: string;
  private post;

  constructor(private postService: PostService, private router: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.post = this.postService.getPostbyId(this.activeRoute.snapshot.params['id']).subscribe(data =>{
      this.blogPost = data;
      this.tags = data.tags.toString();
    })
  }

  onSubmit() : void{
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this.postService.updatePostById(this.blogPost._id,this.blogPost).subscribe(() =>this.router.navigate(['/admin']));
  }

  deletePost(id){
    this.postService.deletePost(this.blogPost._id).subscribe( () => this.router.navigate(['/admin']))
  }

}
