import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: Http) { }

  getAllPosts(): Observable<any> {
    return this._http.get('http://localhost:3000/posts')
                .pipe(
                  map((response) => {
                    return response.json();
                  })
                );
  }

  addNewPost(data): Observable<any> {
    return this._http.post('http://localhost:3000/posts', data)
              .pipe(
                map(response => {
                  return response.json();
                })
              );
  }
}
