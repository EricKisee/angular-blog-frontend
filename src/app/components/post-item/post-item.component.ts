import { Component, OnInit, Input, Output } from '@angular/core';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post!:Post;

  constructor() { }

  ngOnInit(): void {
  }

}
