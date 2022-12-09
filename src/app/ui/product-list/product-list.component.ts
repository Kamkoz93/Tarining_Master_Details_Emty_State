import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {map, Observable, Subject, switchMap} from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  private _selectedProductIdSubject: Subject<string> = new Subject<string>();
  public selectedProductId$: Observable<string> = this._selectedProductIdSubject.asObservable();

  constructor(private _productService: ProductService) {
  }

  readonly prodList$: Observable<ProductModel[]> = this._productService.getAll();
  readonly details$: Observable<ProductModel> = this.selectedProductId$.pipe(
    switchMap((data => this._productService.getOne(data)))
  );

  selectProduct(id: string): void {
    this._selectedProductIdSubject.next(id);
  }

}
