import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  icon = faChevronDown;

  @Input() data!: any;
  @Input() title!: string;
  constructor() { }

  ngOnInit(): void {
  }

  setTitle(title: string){
    this.title = title
  }

}
