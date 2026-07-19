import { Component } from '@angular/core';
import { Product } from '../../model/productModel';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: Product[] = [];
  categoryCode!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductService
  ) {}

  ngOnInit(): void {
    this.categoryCode = this.route.snapshot.paramMap.get('categoryCode')!;
    this.productsService
      .getProductsByCategory(this.categoryCode)
      .subscribe(data => this.products = data);
  }

  openProduct(product: Product) {
    console.log(product.categoryCode,product.productId ,product);
    
    this.router.navigate([
      '/product',
      product.categoryCode,
      product.productId
    ]);
  }
}
