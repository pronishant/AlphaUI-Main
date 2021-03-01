import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Input } from '@angular/core';
import { Component, HostBinding, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'aui-navbar',
  templateUrl: './aui-navbar.component.html',
  styleUrls: ['./aui-navbar.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        'hidden',
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        'visible',
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class AuiNavbarComponent implements AfterViewInit {

  private isVisible = true;
  @Input() sideToggle: boolean = false;
  @Input() isSticky: boolean = false;
  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? 'visible' : 'hidden';
  }
  ngAfterViewInit() {
    if (this.isSticky) {
      return null;
    } else if (!this.isSticky) {
      const scroll = fromEvent(window, 'scroll').pipe(
        throttleTime(8),
        map(() => window.pageYOffset),
        pairwise(),
        map(([y1, y2]) => (y2 < y1 ? 'Up' : 'Down')),
        distinctUntilChanged(),
        share()
      );

      const scrollUp = scroll.pipe(
        filter(move => move === 'Up')
      );
      const scrollDown = scroll.pipe(
        filter(move => move === 'Down')
      );
      scrollUp.subscribe(() => (this.isVisible = true));
      scrollDown.subscribe(() => (this.isVisible = false));
    }
  }

  title = 'dummy';

  print() {
    console.log('button clicked');
  }

}
