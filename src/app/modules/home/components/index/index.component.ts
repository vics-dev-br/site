import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    standalone: false
})
export class IndexComponent implements OnInit {

    constructor(  
        private title: Title,
        private meta: Meta,
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {
        this.title.setTitle(
          'Consultoria em Ciência de Dados em Lagoa Santa | VICS'
        );
      
        this.meta.updateTag({
          name: 'description',
          content:
            'A VICS é uma consultoria em ciência e engenharia de dados sediada em Lagoa Santa/MG, ajudando empresas a transformar dados em decisões estratégicas.'
        });
      
        this.meta.updateTag({
          name: 'keywords',
          content:
            'consultoria de dados Lagoa Santa, engenharia de dados Minas Gerais, ciência de dados MG'
        });
      
        /* Open Graph / redes sociais */
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({
          property: 'og:title',
          content: 'VICS – Consultoria em Ciência de Dados em Lagoa Santa/MG'
        });
        this.meta.updateTag({
          property: 'og:description',
          content:
            'Especialistas em ETL, Big Data e Machine Learning, com atendimento local em Lagoa Santa e remoto para todo o Brasil.'
        });
      }

}