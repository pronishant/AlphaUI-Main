import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aui-card',
  templateUrl: './aui-card.component.html',
  styleUrls: ['./aui-card.component.scss']
})
export class AuiCardComponent implements OnInit {
  @Input() cardClass: string = '';
  constructor() { }

  ngOnInit() {
  }

}
