import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;  
  searchText: string;
  // Use this property to stored filtered candidates, so we do not
  // lose the original list and do not have to make a round trip
  // to the web server on every new search
  // myfilter(products: any, searchText: string){
  //   return !products.includes(searchText)
  // }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale');
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/