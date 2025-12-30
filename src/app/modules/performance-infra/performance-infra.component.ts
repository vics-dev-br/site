import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-performance-infra',
  templateUrl: './performance-infra.component.html',
  styleUrls: ['./performance-infra.component.scss'],
  standalone: false
})
export class PerformanceInfraComponent implements OnInit {
  ctaLabel = 'Agendar avaliação técnica';
  ctaHref =
    'https://wa.me/5531975474785?text=Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20t%C3%A9cnica%20para%20diagn%C3%B3stico%20de%20performance';

  painPoints = [
    'Lentidão crescente sem causa clara',
    'Reclamações constantes de usuários',
    'Infraestrutura pressionando por mais recursos',
    'Consultas lentas e instáveis no banco de dados',
    'Medo de quedas em horários críticos',
    'Falta de métricas confiáveis para decisão'
  ];

  deliverables = [
    'Mapa completo de gargalos de performance',
    'Análise integrada de aplicação, banco e infraestrutura',
    'Identificação de riscos operacionais',
    'Avaliação de impacto financeiro (custo x benefício)',
    'Plano de ação priorizado',
    'Relatório técnico documentado'
  ];

  steps = [
    'Levantamento Técnico — métricas, logs e configurações do ambiente',
    'Análise Profunda — gargalos de aplicação, banco de dados e infraestrutura',
    'Diagnóstico Consolidado — visão técnica com impacto no negócio',
    'Entrega do Plano de Ação — prioridades, riscos e recomendações (10 a 15 dias)'
  ];

  scope = [
    'Performance da aplicação',
    'Consultas e índices do banco de dados',
    'Uso de cache e recursos',
    'Configurações de servidores de aplicação',
    'Uso e escalabilidade da infraestrutura',
    'Consumo de CPU, memória e I/O',
    'Riscos de instabilidade'
  ];

  avoids = [
    'Aumento desnecessário de infraestrutura',
    'Otimizações aleatórias sem resultado',
    'Quedas inesperadas em sistemas críticos',
    'Decisões baseadas em suposição',
    'Retrabalho técnico'
  ];

  audiences = [
    'Sistemas críticos em produção',
    'Ambientes hospitalares, governamentais ou corporativos',
    'Empresas em crescimento',
    'Gestores que precisam de previsibilidade',
    'Infraestruturas sob pressão'
  ];

  faqs = [
    {
      question: 'Quanto tempo leva para receber o plano?',
      answer:
        'Entregamos o diagnóstico consolidado e o plano técnico priorizado em 10 a 15 dias, considerando acesso aos dados e agendas de entrevistas.'
    },
    {
      question: 'Vocês alteram meu ambiente durante o diagnóstico?',
      answer:
        'Não. Esta fase é observacional: analisamos métricas, logs e configurações sem alterar produção. Recomendamos mudanças apenas após o plano aprovado.'
    },
    {
      question: 'O que acontece depois do diagnóstico?',
      answer:
        'Você recebe um roadmap priorizado. Se avançar para execução, abatemos o valor do diagnóstico e seguimos para otimização acompanhada pelos sócios.'
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Diagnóstico de Performance e Infra | VICS');
    this.meta.updateTag({
      name: 'description',
      content:
        'Diagnóstico pago para sistemas críticos: mapeamos gargalos de performance, risco e custo antes de você escalar infraestrutura. Plano técnico claro em até 15 dias, priorizado e acionável.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'diagnóstico de performance, sistemas críticos, otimização de infraestrutura, avaliação técnica, finops, performance em produção'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Diagnóstico de Performance para Sistemas Críticos | VICS'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Descubra os gargalos que travam seu sistema e custam dinheiro — com um plano técnico claro em até 15 dias. Diagnóstico pago com entregáveis claros.'
    });
  }

  submitLead(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const payload = {
      nome: data.get('nome'),
      email: data.get('email'),
      empresa: data.get('empresa'),
      sistema: data.get('sistema'),
      dores: data.get('dores')
    };

    if (typeof gtag !== 'undefined') {
      gtag('event', 'lead_submit', {
        event_category: 'lead',
        event_label: 'diagnostico_performance',
        ...payload
      });
    }

    const message = `Olá! Gostaria de agendar uma avaliação técnica para diagnóstico de performance.

*Nome:* ${payload.nome}
*Email:* ${payload.email}
*Empresa:* ${payload.empresa}
*Sistema:* ${payload.sistema}
*Dores:* ${payload.dores}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5531975474785?text=${encodedMessage}`, '_blank');
    form.reset();
  }
}
