import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {


  title: string = ""
  date: string = ""
  imageUrl: string = ""
  author: string = ""
  category: string = ""
  content: string = ""
  comments: number = 0

  constructor() { }


  ngOnInit(): void {
  }

  onSubmit(){}

}
