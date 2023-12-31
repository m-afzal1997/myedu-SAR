import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input() public placeholder: string = '';
  @Input() public label: string = '';
  public title = 'I love cherry!'
  public constructor() { }

  public ngOnInit(): void { }

}
