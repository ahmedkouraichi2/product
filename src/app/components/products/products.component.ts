import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public productService:ProductService ) { }
 products:any;
  ngOnInit(): void {
  }



  getAllProducts(){
    this.productService.getAllProduct()

    }

  }


