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
    content: '',
    author: '',
    model: 'modelo1'
  }

  constructor(private service: ThoughtService, private router: Router) { }

  ngOnInit(): void {
  }

  saveThought() {
    if (!this.thoughts_example.content.trim() || !this.thoughts_example.author.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    this.service.create(this.thoughts_example).subscribe(() => {
      this.router.navigate(['/listThought'])
    });
  }

  cancelPost() {

  }

}
