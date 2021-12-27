import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {
  //Input decorator is used to get data from parent component
  @Input() product: Product;
  //Output decorator is used to emit data to parent component
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  // for testing the date format with the pipe
  today = new Date();

  constructor() {
    console.log('constructor');
  }

  // se debe implementar la interfaz OnChange y necesita o depende del import
  // SimpleChanges y este metodo devuelve el valor antiguo y el nuevo
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // debe implementar la interfaz OnInit,
  // se ejecuta una vez cuando el componente se ha cargado y puesto en el DOM
  ngOnInit() {
    console.log('ngOnInit');
  }

  // metodo similar al ngOnChanges y solo se debe usar uno de los 2
  // y se debe implementar la Interfaz ngDoCheck
  /**
  ngDoCheck() {
    console.log('ngDoCheck');
  }*/

  /**
   * metodo que se ejecuta cuando el componente se destruye
   * se debe implementar la interfaz OnDestroy
   */
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  addToCart() {
    console.log('adding to cart');
    this.productClicked.emit(this.product.id);
  }
}
