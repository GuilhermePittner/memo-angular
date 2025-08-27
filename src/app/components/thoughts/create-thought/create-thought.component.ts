import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thoughts_example = {
    id: '0',
    content: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Cevadis im ampola pa arma uma pindureta. Paisis, filhis, espiritis santis.",
    author: 'Mussum',
    model: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  saveThought() {
    alert('saved!');
  }

  cancelPost() {
    alert('aborting....');
  }

}
