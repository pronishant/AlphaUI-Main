import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'aui-button',
  templateUrl: './aui-button.component.html',
  styleUrls: ['./aui-button.component.scss']
})
export class AuiButtonComponent implements OnInit {
  @Input() auiBtnClass: string | any;
  @Input() disabled: boolean;
  @Input() color:string;
  // @Input()
  // headerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {

  }

}
