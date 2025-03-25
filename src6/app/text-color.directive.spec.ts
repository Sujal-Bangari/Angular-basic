import { ElementRef } from '@angular/core';
import { TextColorDirective } from './text-color.directive';

describe('TextColorDirective', () => {
  it('should create an instance', () => {
    const directive = new TextColorDirective(new ElementRef(' '));
    expect(directive).toBeTruthy();
  });
});
