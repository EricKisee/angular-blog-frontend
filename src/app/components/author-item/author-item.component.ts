import { Component, OnInit, Input} from '@angular/core';
import { Author } from 'src/app/Author';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit {

  @Input() author!: Author

  constructor() { }

  ngOnInit(): void {
  }

}
