import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
 categories = [
    { code: 'electronics', name: 'אלקטרוניקה' },
    { code: 'books', name: 'ספרים' },
    { code: 'food', name: 'אוכל' }
  ];

  constructor(private router: Router) {}

  selectCategory(code: string) {
    this.router.navigate(['/products', code]);
  }
}
