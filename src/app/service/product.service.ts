import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categoryUrl = 'https://2az8w1b2u8.execute-api.us-east-1.amazonaws.com/test/products';
  private productUrl  = 'https://2az8w1b2u8.execute-api.us-east-1.amazonaws.com/test/productGetItem';

  constructor(private http: HttpClient) {}

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.categoryUrl}?category=${category}`
    );
  }

  getProductByCategoryAndId(category: string, productId: string): Observable<Product> {
    return this.http.get<Product>(
      `${this.productUrl}?category=${category}&productId=${productId}`
    );
  }
}
