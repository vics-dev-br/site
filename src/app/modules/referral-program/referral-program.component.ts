import { Component, Inject, Injector, OnInit, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ContactService } from '../home/components/contact/contact.service';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

@Component({
  selector: 'app-referral-program',
  templateUrl: './referral-program.component.html',
  styleUrls: ['./referral-program.component.scss'],
  standalone: false
})
export class ReferralProgramComponent implements OnInit {
  form!: FormGroup;
  isSubmitting = false;
  submitError = '';

  readonly pageUrl = 'https://www.vics.dev.br/programa-indicacoes';
  readonly pageTitle = 'Programa de Indicações VICS | Diagnóstico Express em Dados e Integrações';
  readonly pageDescription =
    'Indique empresas com dor real em dados, BI, engenharia e integrações. A VICS faz qualificação rápida, diagnóstico prático e próximo passo claro.';

  readonly steps = [
    {
      title: 'Você indica (2 min)',
      description: 'Nome, contato e dor em 1 linha. Se puder, faça a introdução.'
    },
    {
      title: 'A VICS qualifica rapidamente',
      description: 'Abordagem curta, com contexto e respeito.'
    },
    {
      title: 'Diagnóstico Express',
      description: 'Análise de cenário em 30-45 min com próximo passo claro.'
    },
    {
      title: 'Se virar projeto, você ganha',
      description: 'Crédito maior ou upgrade de entrega com visão executiva.'
    }
  ];

  readonly rules = [
    'A indicação precisa ter fit (dor aderente e potencial real).',
    'Não vale duplicidade do mesmo lead em 90 dias.',
    'Abordagem objetiva, respeitosa e sem spam (1-2 tentativas).',
    'Benefício principal após fechamento da oportunidade.'
  ];

  readonly faqs = [
    {
      question: 'Vocês vão ficar insistindo?',
      answer: 'Não. A abordagem é objetiva, com 1 a 2 tentativas no máximo.'
    },
    {
      question: 'Preciso fazer intro?',
      answer: 'Não é obrigatório, mas uma introdução aumenta bastante a conversão.'
    },
    {
      question: 'Como sei se tem fit?',
      answer: 'Descreva a dor em uma linha. A VICS faz a qualificação rapidamente.'
    }
  ];

    constructor(
    private readonly fb: FormBuilder,
    private readonly injector: Injector,
    private readonly router: Router,
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      referrerName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      referrerEmail: ['', [Validators.required, Validators.email]],
      referrerPhone: ['', [Validators.maxLength(30)]],
      referrerType: ['', [Validators.required]],
      introOk: ['', [Validators.required]],
      leadName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      leadContact: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(180)]],
      leadCompany: ['', [Validators.maxLength(150)]],
      leadRole: ['', [Validators.maxLength(120)]],
      leadPain: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      consent: [false, [Validators.requiredTrue]]
    });

    this.applySeo();
  }

  get referrerName(): FormControl { return this.form.get('referrerName') as FormControl; }
  get referrerEmail(): FormControl { return this.form.get('referrerEmail') as FormControl; }
  get referrerPhone(): FormControl { return this.form.get('referrerPhone') as FormControl; }
  get referrerType(): FormControl { return this.form.get('referrerType') as FormControl; }
  get introOk(): FormControl { return this.form.get('introOk') as FormControl; }
  get leadName(): FormControl { return this.form.get('leadName') as FormControl; }
  get leadContact(): FormControl { return this.form.get('leadContact') as FormControl; }
  get leadCompany(): FormControl { return this.form.get('leadCompany') as FormControl; }
  get leadRole(): FormControl { return this.form.get('leadRole') as FormControl; }
  get leadPain(): FormControl { return this.form.get('leadPain') as FormControl; }
  get consent(): FormControl { return this.form.get('consent') as FormControl; }

  submit(): void {
    this.submitError = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const contactService = this.injector.get(ContactService);

    const value = this.form.value;
    const payload = {
      name: value.referrerName,
      email: value.referrerEmail,
      phone: value.referrerPhone || 'Nao informado',
      subject: 'Programa de Indicacoes VICS',
      message: [
        'Nova indicacao recebida pelo site:',
        `Indicador: ${value.referrerName}`,
        `Email indicador: ${value.referrerEmail}`,
        `WhatsApp indicador: ${value.referrerPhone || 'Nao informado'}`,
        `Perfil indicador: ${value.referrerType}`,
        `Pode fazer intro: ${value.introOk}`,
        `Lead: ${value.leadName}`,
        `Contato lead: ${value.leadContact}`,
        `Empresa: ${value.leadCompany || 'Nao informado'}`,
        `Cargo/area: ${value.leadRole || 'Nao informado'}`,
        `Dor/objetivo: ${value.leadPain}`,
        `Consentimento LGPD: ${value.consent ? 'Sim' : 'Nao'}`
      ].join('\n')
    };

    contactService.requestContact(payload).subscribe({
      next: () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'referral_form_submit',
          form_type: 'referral_program',
          form_location: 'programa_indicacoes'
        });

        this.router.navigate(['/lead']);
      },
      error: () => {
        this.isSubmitting = false;
        this.submitError = 'Nao foi possivel enviar agora. Tente novamente em alguns instantes.';
      }
    });
  }

  private applySeo(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: this.pageDescription });
    this.meta.updateTag({
      name: 'keywords',
      content: 'programa de indicacoes, indicacao B2B, dados, BI, integracoes, diagnostico express, VICS'
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.pageDescription });
    this.meta.updateTag({ property: 'og:url', content: this.pageUrl });

    if (isPlatformBrowser(this.platformId)) {
      const link = this.document.querySelector("link[rel='canonical']") || this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', this.pageUrl);
      this.document.head.appendChild(link);
    }
  }
}
