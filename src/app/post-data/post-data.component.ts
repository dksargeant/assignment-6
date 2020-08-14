import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { ImplicitReceiver } from '@angular/compiler';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit, OnDestroy {

  post: BlogPost;
  querySub: any;

  // For comments
  commentName: string;
  commentText: string;

  constructor(private data: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      this.data.getPostbyId(params['id']).subscribe(data => {
        this.post = data
        this.post.views += 1
        this.data.updatePostById(this.post._id, this.post).subscribe();
      });
     })
     window.scrollTo(0,0);
  }
  
  ngOnDestroy(){
    if(this.querySub) this.querySub.unsubscribe();
  }

  submitComment(): void{
    this.post.comments.push({author: this.commentName, comment: this.commentText, date: new Date().toLocaleDateString()})
    this.data.updatePostById(this.post._id, this.post).subscribe(() =>{
      this.commentName = '';
      this.commentText = '';
    })
  }

}
