import { Component } from '@angular/core';

import {Product, products} from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(product: Product) {
    const confirmation = confirm(`Would you like to check out ${product.name}- ${product.description} - ${product.rating} Stars - ${product.kaspiLink} on the official website?`);

    // If the user confirms, redirect them to the official website
    if (confirmation) {
        window.location.href = product.kaspiLink; // Replace 'officialWebsiteLink' with the appropriate property of the 'Product' interface
    }
  }

  onNotify(){ 
    window.alert('You will be notified when the product goes on sale');
  }
}
