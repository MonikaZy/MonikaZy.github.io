import { PipeTransform, Pipe } from '@angular/core';
import { products } from '../products';

@Pipe({
  name:'myfilter',
  pure: false
})
  
export class myfilter implements PipeTransform {
    transform(products: any[], searchText: string): any{
      // if(!products || !searchText){
      //   return products
      // }
      console.log(products);
      console.log(searchText);
      return products;
    }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/