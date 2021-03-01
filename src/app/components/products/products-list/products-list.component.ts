import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionEvent, AppDataState, ProductActionsTypes} from '../../../state/product.state';
import {Product} from '../../../model/product.model';
import {DataStateEnum} from '../../../state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productsInput$: Observable<AppDataState<Product[]>> | null=null;
  @Output() productEventEmitter :EventEmitter<ActionEvent> = new EventEmitter();

  readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p: Product) {
    this.productEventEmitter.emit({
      type:ProductActionsTypes.SELECTE_PRODUCTS,payload:p
    });
  }

  onDelete(p: any) {
    this.productEventEmitter.emit({
      type:ProductActionsTypes.DELETE_PRODUCTS,payload:p
    });
  }

  onEdit(p: any) {
    this.productEventEmitter.emit({
      type:ProductActionsTypes.EDIT_PRODUCTS,payload:p
    });
  }

  onActionEvent($event: ActionEvent) {
    this.productEventEmitter.emit($event);
  }
}
