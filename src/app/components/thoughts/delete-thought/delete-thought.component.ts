import { Component, OnInit } from '@angular/core';
import { Thougth } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {

  thought: Thougth = {
    id: 4,
    "content": '',
    "author": '',
    "model": ''
  }

  constructor(private service: ThoughtService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getThoughtById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    })
  }


  deleteThought(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    alert('ID que será deletado: ' + id);

    this.service.deleteThought(id).subscribe({
      next: () => this.router.navigate(['/listThought']),
      error: err => console.error('Error deleting:', err)
    });
  }


  cancelDeletion() {
    this.router.navigate(['/listThought']);
  }


}
