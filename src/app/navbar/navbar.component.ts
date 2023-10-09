import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cart = faShoppingBasket;
  isOpen: boolean = false;
  categories: Category[] = [];
  rootCategories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response: Category[]) => {
      this.categories = response;
      this.rootCategories = this.categories.filter(
        (category) => category.parentCategory === null
      );
      console.log(this.categories);
      console.log(this.rootCategories);
    });
  }

  onChart(): void {
    this.isOpen = !this.isOpen;
  }
}
