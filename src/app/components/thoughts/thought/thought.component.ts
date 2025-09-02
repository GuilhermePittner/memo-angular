import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  // decorator
  @Input() test_data = {
      id: '0',
      content: "just a random test",
      author: 'test_u',
      model: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  thoughtLength(): string {
    if (this.test_data.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamentop'
  }

}
