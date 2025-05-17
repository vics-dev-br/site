import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: false
})
export class FeedbackComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {}

  feedbacks = [
    {
      quote: '“Não se preocupe em entender os dados. Aprenda a entender o que os dados entendem sobre o mundo.”',
      name: 'Geoffrey Hinton',
      role: 'Pioneiro em redes neurais e aprendizado profundo',
      img: 'assets/img/geoffrey.jpg'
    },
    {
      quote: '“Os dados são o novo petróleo. Não é valioso se não refinado.”',
      name: 'Clive Humby',
      role: 'Matemático e arquiteto do Tesco Clubcard',
      img: 'assets/img/clive.jpeg'
    },
    {
      quote: '“A ciência de dados é sobre transformar dados em ações.”',
      name: 'D.J. Patil',
      role: 'Cientista de dados',
      img: 'assets/img/djpatil.jpeg'
    },
    {
      quote: '“A competição baseada em dados requer saber o que fazer com eles.”',
      name: 'Tom Davenport',
      role: 'Autor e professor',
      img: 'assets/img/tomdavenport.jpeg'
    },
    {
      quote: '“A IA é a nova eletricidade...”',
      name: 'Andrew Ng',
      role: 'Cofundador do Google Brain',
      img: 'assets/img/andrewng.jpeg'
    },
    {
      quote: '“Melhor em estatística que qualquer programador e em código que qualquer estatístico.”',
      name: 'Hilary Mason',
      role: 'Cientista de dados renomada',
      img: 'assets/img/hilarymason.jpeg'
    },
    {
      quote: '“Os dados são como lixo. É preciso saber o que fazer com eles.”',
      name: 'Jim Bergeson',
      role: 'Especialista em marketing e dados',
      img: 'assets/img/jimbergeson.jpeg'
    }
  ];
}
