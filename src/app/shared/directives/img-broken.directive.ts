import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImage: string = '../../../assets/img/img-broken.png';

  @HostListener('error') handleError(): void {
    const element = this.hostElement.nativeElement;
    element.src = this.customImage;
  }

  constructor(private hostElement: ElementRef) {}
}