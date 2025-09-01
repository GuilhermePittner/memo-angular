import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  test_data = {
      id: '0',
      content: "just a random test",
      author: 'test_u',
      model: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
