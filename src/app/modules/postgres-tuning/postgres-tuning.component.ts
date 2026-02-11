import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-postgres-tuning',
  templateUrl: './postgres-tuning.component.html',
  styleUrls: ['./postgres-tuning.component.scss'],
  standalone: false
})
export class PostgresTuningComponent implements OnInit {
  ctaLabel = 'Falar com especialista em PostgreSQL';
  ctaHref =
    'https://wa.me/5531975474785?text=Quero%20uma%20an%C3%A1lise%20especializada%20de%20performance%20PostgreSQL';

  ramGB = 16;
  cpus = 4;
  tipoApp: 'web' | 'dw' | 'misto' = 'web';
  tipoDisco: 'ssd' | 'hdd' = 'ssd';

  configGerada = '';
  configVisible = false;
  copiadoFeedback = false;

  @ViewChild('resultadoSection') resultadoSection!: ElementRef;

  ramOptions = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];

  faqs = [
    {
      question: 'O que é shared_buffers e por que 25% da RAM?',
      answer:
        'shared_buffers é a memória dedicada ao cache interno do PostgreSQL. 25% da RAM é o valor recomendado pela documentação oficial — valores maiores podem causar contenção de memória com o cache do sistema operacional.'
    },
    {
      question: 'Qual a diferença entre work_mem e maintenance_work_mem?',
      answer:
        'work_mem é alocado por operação de sort/hash em cada conexão (pode multiplicar rapidamente). maintenance_work_mem é usado em operações de manutenção como VACUUM, CREATE INDEX e ALTER TABLE — normalmente precisa de mais memória mas roda com menos frequência.'
    },
    {
      question: 'SSD vs HDD: qual o impacto real na configuração?',
      answer:
        'Em SSDs, random_page_cost cai de 4.0 para 1.1 (leitura aleatória é quase tão rápida quanto sequencial) e effective_io_concurrency sobe de 2 para 200, permitindo ao PostgreSQL disparar mais leituras em paralelo.'
    },
    {
      question: 'Essa configuração resolve todos os problemas de performance?',
      answer:
        'Não. A configuração do postgresql.conf resolve cerca de 30% dos problemas. Os outros 70% são queries mal escritas, índices faltando, modelo de dados inadequado e falta de monitoramento — problemas que exigem análise especializada.'
    },
    {
      question: 'Posso aplicar essas configurações em produção diretamente?',
      answer:
        'Recomendamos testar primeiro em ambiente de homologação. Alguns parâmetros como shared_buffers exigem restart do PostgreSQL. Parâmetros como work_mem podem ser ajustados sem restart (reload). Sempre tenha um plano de rollback.'
    },
    {
      question: 'Como saber se preciso de mais do que tuning de configuração?',
      answer:
        'Se após o tuning o sistema continua lento, o problema está nas queries ou na arquitetura. Sinais: queries com sequential scan em tabelas grandes, locks frequentes, conexões idle in transaction, e alto uso de CPU mesmo com pouca carga.'
    }
  ];

  parametrosExplicacao = [
    {
      nome: 'shared_buffers',
      descricao: 'Memória dedicada ao cache interno do PostgreSQL. 25% da RAM total é o ponto de equilíbrio entre performance do banco e cache do SO.'
    },
    {
      nome: 'effective_cache_size',
      descricao: 'Estimativa da memória total disponível para cache (SO + PostgreSQL). Ajuda o planner a decidir entre index scan e sequential scan. 75% da RAM é uma estimativa conservadora.'
    },
    {
      nome: 'work_mem',
      descricao: 'Memória por operação de sort/hash por conexão. Calculado para evitar que o total de conexões simultâneas ultrapasse a RAM disponível.'
    },
    {
      nome: 'maintenance_work_mem',
      descricao: 'Memória para operações de manutenção (VACUUM, CREATE INDEX). Valor mais alto acelera essas operações sem impacto no dia a dia.'
    },
    {
      nome: 'max_connections',
      descricao: 'Número máximo de conexões simultâneas. Mais conexões = menos work_mem por conexão. Para aplicações web com connection pooling, 200 é um bom ponto de partida.'
    },
    {
      nome: 'random_page_cost',
      descricao: 'Custo estimado de leitura aleatória de página. Em SSDs, cai para 1.1 (quase igual a leitura sequencial), incentivando o uso de índices.'
    },
    {
      nome: 'effective_io_concurrency',
      descricao: 'Quantas operações de I/O o PostgreSQL pode disparar em paralelo. SSDs suportam muito mais concorrência (200) que HDDs (2).'
    },
    {
      nome: 'wal_buffers',
      descricao: 'Memória para buffers de Write-Ahead Log. 16MB é suficiente para a maioria das cargas de trabalho.'
    },
    {
      nome: 'checkpoint_completion_target',
      descricao: 'Fração do intervalo entre checkpoints em que a escrita deve ser completada. 0.9 distribui a escrita ao longo do tempo, reduzindo picos de I/O.'
    },
    {
      nome: 'default_statistics_target',
      descricao: 'Nível de detalhe das estatísticas coletadas pelo ANALYZE. Valores maiores melhoram o planner para queries complexas (data warehouse) mas aumentam tempo de ANALYZE.'
    }
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  private readonly pageUrl = 'https://www.vics.dev.br/ferramentas/postgres-tuning-online';
  private readonly pageTitle = 'Gerador de Configuração PostgreSQL Online | Tuning postgresql.conf — VICS';
  private readonly pageDescription =
    'Gere uma configuração postgresql.conf otimizada online e grátis. Informe RAM, CPUs, tipo de aplicação e disco para calcular shared_buffers, work_mem, effective_cache_size e outros parâmetros de performance do PostgreSQL.';
  private readonly ogImage = 'https://www.vics.dev.br/assets/logo.png';

  ngOnInit(): void {
    // Title
    this.title.setTitle(this.pageTitle);

    // Meta tags básicas
    this.meta.updateTag({ name: 'description', content: this.pageDescription });
    this.meta.updateTag({
      name: 'keywords',
      content: 'postgresql tuning online, configurar postgresql.conf, calcular shared_buffers, calcular work_mem, effective_cache_size, otimização postgresql, performance postgres, tuning banco de dados, postgres configuration generator, gerador configuração postgresql'
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'VICS - Data Science & Analytics' });

    // Open Graph
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.pageDescription });
    this.meta.updateTag({ property: 'og:url', content: this.pageUrl });
    this.meta.updateTag({ property: 'og:image', content: this.ogImage });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({ property: 'og:site_name', content: 'VICS' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.pageDescription });
    this.meta.updateTag({ name: 'twitter:image', content: this.ogImage });

    if (isPlatformBrowser(this.platformId)) {
      // Canonical URL
      const link = this.document.querySelector("link[rel='canonical']") || this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', this.pageUrl);
      this.document.head.appendChild(link);
    }

    // JSON-LD (fora do isPlatformBrowser para SSR renderizar no source)
    this.appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Gerador de Configuração PostgreSQL Online',
      description: this.pageDescription,
      url: this.pageUrl,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL'
      },
      provider: {
        '@type': 'Organization',
        name: 'VICS',
        url: 'https://www.vics.dev.br',
        logo: 'https://www.vics.dev.br/assets/logo.png'
      }
    });

    this.appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });

    this.appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://www.vics.dev.br'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Ferramentas',
          item: 'https://www.vics.dev.br/ferramentas'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Gerador de Configuração PostgreSQL',
          item: this.pageUrl
        }
      ]
    });

    this.appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: this.pageTitle,
      description: this.pageDescription,
      url: this.pageUrl,
      inLanguage: 'pt-BR',
      isPartOf: {
        '@type': 'WebSite',
        name: 'VICS',
        url: 'https://www.vics.dev.br'
      },
      about: {
        '@type': 'SoftwareApplication',
        name: 'PostgreSQL',
        applicationCategory: 'DatabaseApplication'
      }
    });
  }

  gerarConfig(): void {
    const ramMB = this.ramGB * 1024;

    const sharedBuffers = Math.floor(ramMB * 0.25);
    const effectiveCacheSize = Math.floor(ramMB * 0.75);
    const maintenanceWorkMem = Math.min(Math.floor(ramMB * 0.05), 2048);
    const checkpointCompletionTarget = 0.9;
    const walBuffers = 16;
    const defaultStatisticsTarget = this.tipoApp === 'dw' ? 500 : 100;
    const randomPageCost = this.tipoDisco === 'ssd' ? 1.1 : 4.0;
    const effectiveIoConcurrency = this.tipoDisco === 'ssd' ? 200 : 2;
    const maxConnections = this.tipoApp === 'web' ? 200 : this.tipoApp === 'dw' ? 40 : 100;

    const availableForWorkMem = ramMB - sharedBuffers;
    const workMemDivisor = this.tipoApp === 'dw' ? maxConnections * 1.5 : maxConnections * 3;
    const workMem = Math.max(Math.floor(availableForWorkMem / workMemDivisor), 4);

    const maxParallelWorkers = Math.min(this.cpus, 8);
    const maxParallelWorkersPerGather = Math.min(Math.floor(this.cpus / 2), 4);

    const lines = [
      '# ---------------------------------------------------',
      '# Configuração PostgreSQL gerada por VICS',
      '# https://www.vics.dev.br/ferramentas/postgres-tuning-online',
      '# ---------------------------------------------------',
      `# Servidor: ${this.ramGB}GB RAM | ${this.cpus} CPUs | ${this.tipoDisco.toUpperCase()} | ${this.tipoApp.toUpperCase()}`,
      '# ---------------------------------------------------',
      '',
      '# Memória',
      `shared_buffers = ${this.formatMem(sharedBuffers)}`,
      `effective_cache_size = ${this.formatMem(effectiveCacheSize)}`,
      `work_mem = ${this.formatMem(workMem)}`,
      `maintenance_work_mem = ${this.formatMem(maintenanceWorkMem)}`,
      '',
      '# Checkpoints e WAL',
      `checkpoint_completion_target = ${checkpointCompletionTarget}`,
      `wal_buffers = ${walBuffers}MB`,
      `min_wal_size = 1GB`,
      `max_wal_size = 4GB`,
      '',
      '# Planner',
      `default_statistics_target = ${defaultStatisticsTarget}`,
      `random_page_cost = ${randomPageCost}`,
      `effective_io_concurrency = ${effectiveIoConcurrency}`,
      '',
      '# Conexões',
      `max_connections = ${maxConnections}`,
      '',
      '# Paralelismo',
      `max_parallel_workers = ${maxParallelWorkers}`,
      `max_parallel_workers_per_gather = ${maxParallelWorkersPerGather}`,
      `max_parallel_maintenance_workers = ${maxParallelWorkersPerGather}`,
      '',
      '# ---------------------------------------------------',
      '# Atenção: esta é uma configuração BASE.',
      '# Para otimizar queries, índices e modelo de dados,',
      '# consulte um especialista: https://wa.me/5531975474785',
      '# ---------------------------------------------------'
    ];

    this.configGerada = lines.join('\n');
    this.configVisible = true;

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.resultadoSection?.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  copiarConfig(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(this.configGerada).then(() => {
        this.copiadoFeedback = true;
        setTimeout(() => (this.copiadoFeedback = false), 2000);
      });
    }
  }

  private formatMem(mb: number): string {
    if (mb >= 1024 && mb % 1024 === 0) {
      return `${mb / 1024}GB`;
    }
    return `${mb}MB`;
  }

  private appendJsonLd(data: unknown): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
