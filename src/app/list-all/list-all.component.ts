import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  allPosts: Array<Object>;

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getAllPosts().subscribe(data => {
      console.log(data);
      this.allPosts = data;
    });
  }

}
