import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../model/product.model';
import {ActionEvent, ProductActionsTypes} from '../../../../state/product.state';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  @Input() product?:Product;
  @Output() eventEmitter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.eventEmitter.emit({type:ProductActionsTypes.SELECTE_PRODUCTS,payload:product})
  }

  onDelete(product: Product) {
    this.eventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCTS,payload:product})
  }

  onEdit(p: any) {
    this.eventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCTS,payload:this.product})
  }
}
