import { Directive, ElementRef, HostListener } from "@angular/core";


@Directive({
  selector: '[libMove]'
})
export class MovePlayerDirective {
  private lastPositionX = 0;
  //private lastPositionY = 500;

  constructor(private element: ElementRef) {}

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    let step = 0;

    if (event.code == 'ArrowRight') {
      step = 1;
    }

    if (event.code == 'ArrowLeft') {
      step = -1;
    }

    this.lastPositionX += step;

    this.element.nativeElement.style.left = `${this.lastPositionX}px`;
    console.info(this.element.nativeElement.style.top); // = `${this.lastPositionY}px`;
  }
}
