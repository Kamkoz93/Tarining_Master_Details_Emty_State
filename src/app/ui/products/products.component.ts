import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, map, Observable, Subject, switchMap} from "rxjs";
import {ProductService} from "../../services/product.service";
import {ProductModel} from "../../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  constructor(private _productService: ProductService) {
  }

  readonly prodList$: Observable<ProductModel[]> = this._productService.getAll();


}

