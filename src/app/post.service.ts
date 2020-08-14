import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<BlogPost[]>{
    const perPage = Number.MAX_SAFE_INTEGER.toString()
    let params = {
      page: "1",
      perPage: perPage
    }
    return this.http.get<BlogPost[]>(`https://limitless-mesa-85420.herokuapp.com/api/posts`,{params});
  }

  newPost(data:BlogPost): Observable <any>{
    return this.http.post<any>(`https://limitless-mesa-85420.herokuapp.com/api/posts`, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any>{
    return this.http.put<any>(`https://limitless-mesa-85420.herokuapp.com/api/posts/${id}`, data);
  }

  deletePost(id: string){
    return this.http.delete<any>(`https://limitless-mesa-85420.herokuapp.com/api/posts/${id}`);
  }

  getPosts(page, tag, category): Observable<BlogPost[]> {
    const perPage = 6
    let params = {
      page: page,
      perPage: perPage.toString(),
    }

    if(tag != null || tag != undefined){
      params["tag"] = tag;
    }

    if(category != null || category != undefined){
      params["categories"] = category;
    }

    return this.http.get<BlogPost[]>(`https://limitless-mesa-85420.herokuapp.com/api/posts`,{params});
  }

  getPostbyId(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://limitless-mesa-85420.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`https://limitless-mesa-85420.herokuapp.com/api/categories`);
  }
  
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://limitless-mesa-85420.herokuapp.com/api/tags`);
  }
}
