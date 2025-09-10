import { Component, OnInit } from '@angular/core';
import { Thougth } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {



  form!: FormGroup;

  constructor(private service: ThoughtService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: ['', [
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ]],
      author: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      model: ['modelo1']
    });
  }

  saveThought() {
    if (this.form.valid) {
      const thought = {
        ...this.form.value,
        id: String(Date.now())
      };

      this.service.create(thought).subscribe(() => {
        this.router.navigate(['/listThought']);
      });
    }
  }

  cancelPost() {

  }

  activateBtn(): string {
    if (this.form.valid) {
      return 'botao'
    }
    return 'botao__desabilitado'
  }

}
