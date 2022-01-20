import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { AuthorItemComponent } from './components/author-item/author-item.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    BlogHeaderComponent,
    PostsComponent,
    PostItemComponent,
    MenuComponent,
    AuthorsComponent,
    CategoriesComponent,
    CategoryItemComponent,
    AuthorItemComponent,
    PostFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
