import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core/';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const element = new ElementRef(document.createElement('div'));
    const directive = new HighlightDirective(element);
    expect(directive).toBeTruthy();
  });
});
