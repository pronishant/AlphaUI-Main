import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aui-input',
  templateUrl: './aui-input.component.html',
  styleUrls: ['./aui-input.component.scss']
})
export class AuiInputComponent implements OnInit {
  @Input() auiInputClass: string = '';
  constructor() { }

  ngOnInit() {
  }

}
