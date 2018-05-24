import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

like=false;
dontLike= true;    
 likes(){
    this.like = !this.like;
    this.dontLike= !this.dontLike;
 }
noLikes(){
    this.like = !this.like;
    this.dontLike = !this.dontLike;
  }
}
