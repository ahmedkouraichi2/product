import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Url:string;

  constructor(private http:HttpClient) { }
  getAllProduct():Observable<Product[]>{

   return this.http.get<Product[]>(`${this.Url}/products`)

  }
  getSelelctedProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.Url+"/products")
  }


  }
