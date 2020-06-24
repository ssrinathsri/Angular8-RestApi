import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // init variable
  products: any;

  constructor() {
    this.products = [
      {
        id: 3456,
        productName: 'watch',
        brandName: 'Timex',
        productPrice:  1000,
      },
      {
        id: 3457,
        productName: 'Mobile',
        brandName: 'Iphone',
        productPrice:  100000,
      },
      {
        id: 4567,
        productName: 'watch',
        brandName: 'Timex',
        productPrice:  1000,
      }
    ];
  }

  ngOnInit() {
  }

}
