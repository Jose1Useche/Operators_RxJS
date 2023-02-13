import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createPost(postData: Post) {
    return this.http.post<{name: string}>(
        'https://practica-mejorada-angular-default-rtdb.firebaseio.com/posts.json', 
        postData,
        {
          observe: 'response'
        }
        )
      .subscribe(responseData => { 
          console.log(responseData);
        }, error => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {

    let searchParams = new HttpParams();
    searchParams = searchParams.append('print','pretty');
    searchParams = searchParams.append('aqui','practicando');

    return this.http.get<{ [key: string]: Post}>('https://practica-mejorada-angular-default-rtdb.firebaseio.com/posts.json', 
    {
      headers: new HttpHeaders({ "Mi-Cabecera": "Hola", 'Otra-Cabecera': 'Adios bebesota' }),
      // params: new HttpParams().set('print','pretty')
      params: searchParams
    })
      .pipe(
        // map((responseData: { [key: string]: Post} ) => {
        map(responseData => {
          const postsArray: Post[] = []; 
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        })
      );
  }

  clearPosts() {
    return this.http.delete('https://practica-mejorada-angular-default-rtdb.firebaseio.com/posts.json');
  }
}
