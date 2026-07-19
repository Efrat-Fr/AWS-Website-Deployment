import { Component } from '@angular/core';
import { Product } from '../../model/productModel';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
 product?: Product

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService
  ) {}

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('categoryCode')!;
    const productId = this.route.snapshot.paramMap.get('productId')!;

    this.productsService.getProductByCategoryAndId(category, productId).subscribe(data =>
       this.product = data);
  }
}
