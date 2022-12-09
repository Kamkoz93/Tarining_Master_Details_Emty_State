import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoModel } from '../../model/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoListComponent {
  constructor(private _cryptoService: CryptoService) {
  }
  readonly cryptoList$: Observable<CryptoModel[]> = this._cryptoService.getAll();
  private _detailsSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public details$: Observable<CryptoModel> = this._detailsSubject.asObservable();

  selectCrypto(crypto: CryptoModel): void {
    this._detailsSubject.next(crypto);
  }
}
