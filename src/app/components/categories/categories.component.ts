import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Categoty';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories : Category[] = []

  constructor(private categoryservice: CategoryService) { }

  ngOnInit(): void {
    this.categoryservice.getCategories().subscribe((categories)=>(this.categories=categories))
  }

}
