import { Component, OnInit } from '@angular/core';
import { Thougth } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thoughts_example: Thougth = {
    id: 777,
    content: '',
    author: '',
    model: 'modelo1'
  }

  constructor(private service: ThoughtService, private router: Router) { }

  ngOnInit(): void {
  }

  saveThought() {
    this.service.create(this.thoughts_example).subscribe(() => {
      this.router.navigate(['/listThought'])
    });   
  }

  cancelPost() {

  }

}
