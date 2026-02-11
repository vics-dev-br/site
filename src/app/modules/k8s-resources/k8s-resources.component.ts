import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

interface StackConfig {
  label: string;
  ramBase: number;
  ramPerReq: number;
  cpuFactor: number;
}

@Component({
  selector: 'app-k8s-resources',
  templateUrl: './k8s-resources.component.html',
  styleUrls: ['./k8s-resources.component.scss'],
  standalone: false
})
export class K8sResourcesComponent implements OnInit {
  ctaLabel = 'Agendar análise de custos & performance';
  ctaHref =
    'https://wa.me/5531975474785?text=Quero%20uma%20an%C3%A1lise%20de%20custos%20e%20performance%20Kubernetes';

  stack: 'java' | 'node' | 'go' | 'python' = 'java';
  rps = 50;
  latenciaMs = 200;
  tipoCarga: 'estavel' | 'burstable' = 'estavel';

  yamlGerado = '';
  resultadoVisible = false;
  copiadoFeedback = false;

  custoEstimado = '';
  cpuRequestResult = '';
  cpuLimitResult = '';
  ramRequestResult = '';
  ramLimitResult = '';

  @ViewChild('resultadoSection') resultadoSection!: ElementRef;

  stacks: Record<string, StackConfig> = {
    java: { label: 'Java / JVM', ramBase: 350, ramPerReq: 2, cpuFactor: 1.2 },
    node: { label: 'Node.js', ramBase: 70, ramPerReq: 1.5, cpuFactor: 1.0 },
    go: { label: 'Go', ramBase: 30, ramPerReq: 0.5, cpuFactor: 0.9 },
    python: { label: 'Python', ramBase: 100, ramPerReq: 2.5, cpuFactor: 1.3 }
  };

  faqs = [
    {
      question: 'Qual a diferença entre Requests e Limits no Kubernetes?',
      answer:
        'Requests é o que o Kubernetes garante para o seu Pod (usado para agendamento nos Nodes). Limits é o teto máximo: se ultrapassar CPU, o Pod sofre throttling (lentidão); se ultrapassar memória, é reiniciado com OOMKilled.'
    },
    {
      question: 'Por que meu Pod sofre OOMKilled?',
      answer:
        'Geralmente porque o limits.memory está muito baixo para o pico de uso da aplicação, ou sua aplicação tem um vazamento de memória (memory leak). A solução é ajustar o limite ou investigar o consumo real com ferramentas como Prometheus + Grafana.'
    },
    {
      question: 'Devo definir CPU Limits?',
      answer:
        'É polêmico na comunidade. Limites de CPU muito baixos causam throttling desnecessário quando o Node tem capacidade ociosa. Nossa calculadora sugere limites "burstable" (mais altos que o request) para evitar lentidão sem perder proteção. Muitas equipes de SRE optam por não definir CPU limits.'
    },
    {
      question: 'Como saber se estou gastando demais com Kubernetes?',
      answer:
        'Compare o total de resources.requests reservados com o uso real (métricas de CPU e memória). Se o uso real for consistentemente abaixo de 30% dos requests, você está superprovisionando. Ferramentas como Kubecost e KRR (Kubernetes Resource Recommender) ajudam nessa análise.'
    },
    {
      question: 'O que é CPU Throttling e como identificar?',
      answer:
        'CPU Throttling acontece quando o Pod tenta usar mais CPU que o limits.cpu definido. O Kubernetes "freia" o processo, causando lentidão. Você identifica via métricas container_cpu_cfs_throttled_seconds_total no Prometheus ou na aba de métricas do seu cloud provider.'
    },
    {
      question: 'Essa calculadora substitui um monitoramento real?',
      answer:
        'Não. Ela fornece uma configuração base matematicamente sólida para evitar erros grosseiros. O ajuste fino ideal vem da análise do comportamento real em produção com métricas de Prometheus/Grafana, VPA (Vertical Pod Autoscaler) e revisão periódica de FinOps.'
    }
  ];

  parametrosExplicacao = [
    {
      nome: 'requests.cpu',
      descricao: 'CPU mínima garantida para o Pod. Baseada no tráfego esperado (RPS) multiplicado pela latência. O Kubernetes usa esse valor para decidir em qual Node agendar o Pod.'
    },
    {
      nome: 'requests.memory',
      descricao: 'Memória mínima garantida. Inclui a memória base do runtime (JVM, V8, etc.) mais o overhead por request simultâneo. Se o Node não tiver essa memória disponível, o Pod não será agendado.'
    },
    {
      nome: 'limits.cpu',
      descricao: 'Teto máximo de CPU. Se o Pod tentar usar mais, sofre throttling (lentidão forçada). Em cargas burstable, definimos um teto mais alto para absorver picos sem degradar performance.'
    },
    {
      nome: 'limits.memory',
      descricao: 'Teto máximo de memória. Se o Pod ultrapassar esse valor, é imediatamente encerrado com OOMKilled. Definimos +30% acima do request como margem de segurança contra picos.'
    }
  ];

  private readonly pageUrl = 'https://www.vics.dev.br/ferramentas/k8s-resources-calculator';
  private readonly pageTitle = 'Calculadora de Resources Kubernetes (CPU & RAM) | Evite OOMKilled — VICS';
  private readonly pageDescription =
    'Calcule os Requests e Limits ideais para seus Pods Kubernetes. Gere o YAML pronto, evite OOMKilled e CPU Throttling, e descubra quanto cada Pod custa na sua fatura AWS/GCP.';
  private readonly ogImage = 'https://www.vics.dev.br/assets/logo.png';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: this.pageDescription });
    this.meta.updateTag({
      name: 'keywords',
      content: 'kubernetes resources calculator, calcular cpu requests limits, evitar oomkilled, k8s finops, pod cost estimation, kubernetes memory limits, cpu throttling kubernetes, yaml resources generator'
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'VICS - Data Science & Analytics' });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.pageDescription });
    this.meta.updateTag({ property: 'og:url', content: this.pageUrl });
    this.meta.updateTag({ property: 'og:image', content: this.ogImage });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({ property: 'og:site_name', content: 'VICS' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.pageDescription });
    this.meta.updateTag({ name: 'twitter:image', content: this.ogImage });

    if (isPlatformBrowser(this.platformId)) {
      const link = this.document.querySelector("link[rel='canonical']") || this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', this.pageUrl);
      this.document.head.appendChild(link);
    }

    this.appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Resources Kubernetes',
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
          name: 'Calculadora de Resources Kubernetes',
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
      }
    });
  }

  calcular(): void {
    const config = this.stacks[this.stack];

    // CPU (milicores)
    const cpuRaw = (this.rps * (this.latenciaMs / 1000)) * 1000;
    const cpuRequest = Math.ceil(cpuRaw * config.cpuFactor);
    const cpuLimit = this.tipoCarga === 'burstable' ? cpuRequest * 4 : cpuRequest * 2;

    // Memória (MiB)
    const ramRaw = config.ramBase + (this.rps * config.ramPerReq);
    const ramRequest = Math.ceil(ramRaw);
    const ramLimit = Math.ceil(ramRequest * 1.3);

    // Custo estimado (média AWS on-demand: ~$0.04/vCPU/h, ~$0.005/GB/h, 730h/mês)
    const custoCpu = (cpuRequest / 1000) * 0.04 * 730;
    const custoRam = (ramRequest / 1024) * 0.005 * 730;
    const custoTotal = custoCpu + custoRam;

    this.cpuRequestResult = this.formatCpu(cpuRequest);
    this.cpuLimitResult = this.formatCpu(cpuLimit);
    this.ramRequestResult = this.formatMem(ramRequest);
    this.ramLimitResult = this.formatMem(ramLimit);
    this.custoEstimado = `$${custoTotal.toFixed(2)}`;

    const lines = [
      '# ---------------------------------------------------------',
      '# Resources Kubernetes gerado por VICS',
      '# https://www.vics.dev.br/ferramentas/k8s-resources-calculator',
      '# ---------------------------------------------------------',
      `# Stack: ${config.label} | ${this.rps} RPS | ${this.latenciaMs}ms | ${this.tipoCarga === 'burstable' ? 'Burstable' : 'Estável'}`,
      `# Custo estimado por Pod: ~${this.custoEstimado}/mês (AWS on-demand)`,
      '# ---------------------------------------------------------',
      '',
      'resources:',
      '  requests:',
      `    memory: "${this.ramRequestResult}"`,
      `    cpu: "${this.cpuRequestResult}"`,
      '  limits:',
      `    memory: "${this.ramLimitResult}"`,
      `    cpu: "${this.cpuLimitResult}"`,
    ];

    this.yamlGerado = lines.join('\n');
    this.resultadoVisible = true;

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.resultadoSection?.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  copiarYaml(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(this.yamlGerado).then(() => {
        this.copiadoFeedback = true;
        setTimeout(() => (this.copiadoFeedback = false), 2000);
      });
    }
  }

  private formatCpu(milicores: number): string {
    if (milicores >= 1000 && milicores % 1000 === 0) {
      return `${milicores / 1000}`;
    }
    return `${milicores}m`;
  }

  private formatMem(mib: number): string {
    if (mib >= 1024 && mib % 1024 === 0) {
      return `${mib / 1024}Gi`;
    }
    return `${mib}Mi`;
  }

  private appendJsonLd(data: unknown): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
