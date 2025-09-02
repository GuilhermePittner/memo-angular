import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  thoughts_list = [
    {
      id: '7',
      content: "Mussum Ipsum, cacilds vidis litro abertis.  matis, aguis e fermentis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Leite de capivaris, leite de mula manquis sem cabeça. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Aenean aliquam molestie leo, vitae iaculis nisl. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Diuretics paradis num copo é motivis de denguis.",
      author: 'test_decorator',
      model: 'modelo2'
    },
    {
      id: '0',
      content: 'uai estou assutado jajajaja',
      author: "mano",
      model: "modelo1"
    },
    {
      id: '2',
      content: 'muito cuidado quando isso acontece',
      author: "mano",
      model: "modelo1"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
