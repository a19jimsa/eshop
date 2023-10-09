import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  currentItem: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const categoryName = this.route.snapshot.paramMap.get('name') as string;
    this.currentItem = categoryName;
  }
}
