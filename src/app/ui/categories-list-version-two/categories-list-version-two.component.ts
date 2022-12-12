import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, map, Observable} from "rxjs";
import {ProductCategoriesService} from "../../services/product-categories.service";

@Component({
  selector: 'app-categories-list-version-two',
  templateUrl: './categories-list-version-two.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListVersionTwoComponent {
  readonly categories$: Observable<string[]> = this._productCategoriesService.getCategories();

  constructor(private _productCategoriesService: ProductCategoriesService) {
  }
}
