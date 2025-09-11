import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginate-button',
  templateUrl: './paginate-button.component.html',
  styleUrls: ['./paginate-button.component.css']
})
export class PaginateButtonComponent implements OnInit {

  @Input() hasMoreThoughts: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
