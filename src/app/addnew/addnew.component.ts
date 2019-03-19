import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  title: String;
  author: String;

  constructor(
    private _postService: PostService;
    private _router: Router
    ) { }

  ngOnInit() {  }

  addNew() {
    console.log(this.title + ' - ' + this.author);
    this._postService.addNewPost({title: this.title, author: this.author})
                    .subscribe(data => {
                      if (data.id) {
                        alert('Successfully added');
                        this._router.navigate(['listall']);
                      }
                    });
  }
}
