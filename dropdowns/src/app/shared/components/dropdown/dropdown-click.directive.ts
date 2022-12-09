import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownClick]'
})
export class DropdownClickDirective {
  
  constructor(
    private el: ElementRef
  ) { }

  @HostListener('click') btnClick() {
    const element = this.el.nativeElement;
    element.classList.toggle('active');

    if(element.classList.contains('option')){
      element.parentNode.parentNode.querySelector('.active').classList.remove('active')
    }
  }
}
