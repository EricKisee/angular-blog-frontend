import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/Author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors : Author[] = []

  constructor(private authorservice:AuthorService) { }

  ngOnInit(): void {
    this.authorservice.getAuthors().subscribe((authors)=>(this.authors=authors))
  }

}
