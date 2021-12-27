import { Directive, ElementRef } from '@angular/core'; // se importa ElementRef para poder acceder al elemento

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(element: ElementRef) {
    // se toma el elemento que se le pasa como parametro que es
    // el elemento nativo del DOM al que se le aplica el decorador
    element.nativeElement.style.backgroundColor = 'green';
  }
}
