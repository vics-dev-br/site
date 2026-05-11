import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-en',
    templateUrl: './en.component.html',
    styleUrls: ['./en.component.scss'],
    standalone: false
})
export class EnComponent implements OnInit {

    services = [
        {
            step: '01',
            label: 'Diagnosis',
            pain: 'You know something is wrong. You just don\'t know what — or what it\'s costing you.',
            title: 'Find out exactly where you\'re losing money.',
            pitch: 'In 10–15 days we audit your infrastructure and pinpoint the specific failures driving slow response times, unplanned downtime, and inflated cloud bills. You get a prioritised action plan ranked by business impact — not by technical complexity.',
            bullets: [
                'Identify the exact cause of slowness and instability',
                'Quantify what each problem is costing per month',
                'Receive a clear, prioritised fix roadmap'
            ],
            cta: 'Start with Diagnosis',
            link: '/performance-infra'
        },
        {
            step: '02',
            label: 'Shielding',
            pain: 'Every hour of downtime costs clients, revenue, and trust.',
            title: 'Make your system reliable enough to scale without fear.',
            pitch: 'We fix the structural failures found in the diagnosis — with a full rollback plan and zero unplanned downtime. The result: your system handles the same load at a fraction of the current cost, and your team stops firefighting.',
            bullets: [
                'Eliminate the root causes of outages and slowness',
                'Cut cloud spend without sacrificing capacity',
                'Scale confidently — no more "let\'s hope it holds"'
            ],
            cta: 'Fix the problem',
            link: '/blindagem-performance-infra'
        },
        {
            step: '03',
            label: 'Governance',
            pain: 'Problems always come back. Costs creep up. Nobody notices until it\'s too late.',
            title: 'Keep costs predictable and problems preventable.',
            pitch: 'We put monitoring and cost controls in place so you see issues before your clients do. Cloud bills become predictable. Engineering decisions become data-driven. You stop reacting and start planning.',
            bullets: [
                'Real-time visibility into system health and cost',
                'Alerts before problems affect users or revenue',
                'Monthly reporting your CFO can actually read'
            ],
            cta: 'Get ongoing control',
            link: '/monitoramento-governanca-performance'
        }
    ];

    constructor(
        private title: Title,
        private meta: Meta,
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {
        this.title.setTitle('VICS | Stop Losing Money to Slow, Unstable Systems');

        this.meta.updateTag({
            name: 'description',
            content: 'We find what\'s costing you — slow systems, unplanned downtime, runaway cloud bills — and fix it for good. Predictable costs. Reliable operations. No more firefighting.'
        });

        this.meta.updateTag({
            name: 'keywords',
            content: 'reduce cloud costs, fix slow system, eliminate downtime, cost reduction, infrastructure efficiency, system reliability, cloud cost optimisation, automation'
        });

        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({
            property: 'og:title',
            content: 'VICS – Stop Losing Money to Slow, Unstable Systems'
        });
        this.meta.updateTag({
            property: 'og:description',
            content: 'Predictable costs. Reliable operations. We diagnose, fix, and monitor critical systems so you stop firefighting and start growing.'
        });

        this.meta.updateTag({ name: 'language', content: 'en' });
    }
}
