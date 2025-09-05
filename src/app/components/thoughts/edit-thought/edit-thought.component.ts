import { Component, OnInit } from '@angular/core';
import { Thougth } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  thoughts_example: Thougth = {
    "content": "",
    "author": "",
    "model": ""
  }

  constructor(private service: ThoughtService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getThoughtById(parseInt(id!)).subscribe((thought) => {
      this.thoughts_example = thought;
    })
  }

  editThought() {
    this.service.editThought(this.thoughts_example).subscribe(() => {
      this.router.navigate(['/listThought']);
    });
  }

  cancelPost() {
    this.router.navigate(['/listThought']);
  }

}
