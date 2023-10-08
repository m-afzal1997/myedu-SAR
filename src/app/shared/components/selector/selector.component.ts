import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {
  @Input() public placeholder: string = '';
  @Input() public options: string[] = [];
  public constructor() { }

  public ngOnInit() { }

}
