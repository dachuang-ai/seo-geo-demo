/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StrategyItem {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  benefits: string[];
  tag: string;
  metricLabel: string;
  metricValue: string;
}

export interface MetricCard {
  id: string;
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
  status: 'EXCELLENT' | 'HIGH' | 'ACTIVE' | 'READY';
  description: string;
  timeframe: string;
  details: string[];
}

export interface SimulationResult {
  keyword: string;
  serp: {
    title: string;
    url: string;
    snippet: string;
    breadcrumbs: string;
    sitelines: { title: string; desc: string }[];
  };
  aiAnswer: {
    query: string;
    text: string;
    citations: { key: string; name: string; url: string }[];
  };
  mapSignal: {
    name: string;
    rating: number;
    reviewsCount: number;
    address: string;
    status: string;
    highlights: string[];
  };
  faqSchema: {
    question: string;
    answer: string;
    codeSnippet: string;
  };
}

export interface DiagnosisForm {
  companyName: string;
  industry: string;
  website: string;
  painPoints: string[];
  contactEmail: string;
}
