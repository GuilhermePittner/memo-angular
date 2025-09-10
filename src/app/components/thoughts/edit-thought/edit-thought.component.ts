import { Component, OnInit } from '@angular/core';
import { Thougth } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  formEdit!: FormGroup;

  constructor(private service: ThoughtService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formEdit = this.formBuilder.group({
      content: ['',
        Validators.compose(
          [Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      author: ['', Validators.compose(
        [Validators.required,
        Validators.minLength(3)])],
      model: ['modelo1']
    })

    const id = this.route.snapshot.paramMap.get('id');
    this.service.getThoughtById(parseInt(id!)).subscribe((thought) => {
      this.formEdit.patchValue(thought);
    })
  }

  editThought() {
    if (this.formEdit.valid) {
      const id = this.route.snapshot.paramMap.get('id');
      const thoughtToUpdate = {
        ...this.formEdit.value,
        id: id
      };

      this.service.editThought(thoughtToUpdate).subscribe(() => {
        this.router.navigate(['/listThought']);
      });
    }
  }

  cancelPost() {
    this.router.navigate(['/listThought']);
  }

  activateBtn(): string {
    if (this.formEdit.valid) {
      return 'botao'
    }
    return 'botao__desabilitado'
  }
}

