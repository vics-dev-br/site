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
            pain: 'Unexplained slowness, ghost costs, and uncertainty.',
            title: 'Stop guessing. Get a full technical X-ray of your environment.',
            pitch: 'We conduct a deep audit of your infrastructure and databases to identify performance bottlenecks, security gaps, and resource waste. You receive a clear execution roadmap with priorities ranked by financial and operational impact.',
            bullets: [
                'Bottleneck identification across the stack',
                'Cloud cost audit (AWS, GCP, Azure)',
                'Critical risk report with remediation plan'
            ],
            cta: 'Start with Diagnosis',
            link: '/performance-infra'
        },
        {
            step: '02',
            label: 'Shielding',
            pain: 'Production outages, instability, and fear of scaling.',
            title: 'Absolute stability for systems that cannot go down.',
            pitch: 'We don\'t just deliver code — we deliver resilience. We fix the structural failures found in the diagnosis, applying engineering best practices so your system handles traffic spikes without degradation. The transition from chaos to predictability.',
            bullets: [
                'Database and query tuning',
                'Latency and concurrency optimization',
                'Stability-focused refactoring with rollback plan'
            ],
            cta: 'Get Stability',
            link: '/blindagem-performance-infra'
        },
        {
            step: '03',
            label: 'Governance',
            pain: 'System slows down again over time, costs spiral out of control.',
            title: 'Long-term technical and financial sustainability.',
            pitch: 'The environment is fast and stable — now we keep it that way. We implement advanced monitoring (SLIs/SLOs) and FinOps practices so your infrastructure scales healthily, maintaining high performance and tight cost control.',
            bullets: [
                'Real-time health dashboards',
                'Continuous cloud/on-premise cost management',
                'Proactive incident prevention'
            ],
            cta: 'Get Governance',
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
        this.title.setTitle('VICS | Performance Engineering for Critical Systems');

        this.meta.updateTag({
            name: 'description',
            content: 'We stabilize mission-critical systems through a proven three-step method: Diagnosis, Shielding, and Governance. Reduce infrastructure costs and eliminate production outages.'
        });

        this.meta.updateTag({
            name: 'keywords',
            content: 'performance engineering, database optimization, infrastructure reliability, finops, SRE, cloud cost reduction, PostgreSQL tuning, Kubernetes'
        });

        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({
            property: 'og:title',
            content: 'VICS – Performance Engineering for Critical Systems'
        });
        this.meta.updateTag({
            property: 'og:description',
            content: 'Diagnosis, Shielding, and Governance: a structured method to stop production fires and protect your revenue.'
        });

        this.meta.updateTag({ name: 'language', content: 'en' });
    }
}
