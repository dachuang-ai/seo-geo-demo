/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import DashboardMetrics from './components/DashboardMetrics';
import StrategySection from './components/StrategySection';
import SimulatorWorkstation from './components/SimulatorWorkstation';
import GrowthValue from './components/GrowthValue';
import DiagnosisQuiz from './components/DiagnosisQuiz';
import Footer from './components/Footer';

import { 
  Search, 
  Sparkles, 
  MapPin, 
  Code, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Brain, 
  Compass, 
  Activity, 
  ChevronRight,
  TrendingDown
} from 'lucide-react';

export default function App() {
  
  // Custom scrolling router
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const startDiagnosisFlow = () => {
    scrollToSection('diagnosis-section');
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#F7F8F4] overflow-x-hidden selection:bg-[#B7F34A]/50 text-[#10241F]">
      
      {/* Sticky Header block */}
      <Header 
        onDiagnoseClick={startDiagnosisFlow} 
        onNavClick={scrollToSection} 
      />

      <main className="pt-24">
        
        {/* HERO SECTION - 2 cols layout */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
          {/* Subtle background glow effect */}
          <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-[#B7F34A]/4 blur-[130px] rounded-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* HERO LEFT COLUMN */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center space-x-2.5 bg-[#EEF3ED] border border-[#10241F]/8 px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] glow-point"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#62706A]">
                  Search Growth Lab
                </span>
                <span className="bg-[#B7F34A] text-[#10241F] text-[9.5px] font-black uppercase px-2 py-0.5 rounded-md tracking-wider">
                  GEO-First
                </span>
              </div>

              {/* Headings */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#10241F] leading-none">
                  SEO / GEO <br />
                  <span className="text-[#10241F] relative inline-block">
                    搜尋曝光增長系統
                    <span className="absolute bottom-1.5 left-0 w-full h-2.5 bg-[#B7F34A]/50 -z-10 rounded"></span>
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl font-bold text-[#7AC943]">
                  讓品牌不只被 Google 找到，也能被 AI 搜尋引用。
                </h2>
              </div>

              {/* Lead paragraph */}
              <p className="text-sm sm:text-base text-[#62706A] font-semibold leading-relaxed max-w-xl">
                達創透過 Topic Cluster、FAQ Schema、GEO Citation、Local SEO 與 AI 搜尋語意架構，協助企業建立可累積、可追蹤、可轉化的搜尋曝光資產。
              </p>

              {/* Action and Navigation Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={startDiagnosisFlow}
                  className="px-8 py-4 bg-[#10241F] hover:bg-[#1C3E35] text-[#FFFFFF] text-sm font-bold rounded-full shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all cursor-pointer flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-[#B7F34A]" />
                  <span>開始曝光診斷</span>
                </button>
                
                <button
                  onClick={() => scrollToSection('strategy-section')}
                  className="px-6 py-4 bg-white hover:bg-[#EEF3ED] border border-[#10241F]/10 text-[#10241F] text-sm font-bold rounded-full shadow-xs hover:translate-y-[-1px] transition-all cursor-pointer"
                >
                  查看策略架構
                </button>
              </div>

              {/* Laboratory small badge bar */}
              <div className="pt-4 border-t border-[#10241F]/5 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#F7F8F4] bg-[#EEF3ED] flex items-center justify-center font-mono text-[10px] font-bold text-[#10241F]">
                      {['G', 'A', 'M'][i]}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#62706A] font-semibold">
                  已成功驅動 <strong className="text-[#10241F]">78+</strong> 重點企業完成 SEO / GEO 智慧名單資產對接
                </p>
              </div>

            </div>

            {/* HERO RIGHT COLUMN - SEARCH INTELLIGENCE DASHBOARD */}
            <div className="lg:col-span-6 w-full max-w-xl mx-auto">
              <div className="glass-panel rounded-[40px] p-6 sm:p-8 shadow-lg border border-[#10241F]/10 space-y-6 relative overflow-hidden bg-white/75 backdrop-blur-md">
                
                {/* Decorative background grid node */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B7F34A]/10 rounded-full blur-2xl pointer-events-none"></div>

                {/* Dashboard metric badge line */}
                <div className="flex justify-between items-center pb-4 border-b border-[#10241F]/8">
                  <div className="flex items-center space-x-2 font-mono text-xs text-[#62706A] font-bold">
                    <Activity className="w-4 h-4 text-[#7AC943]" />
                    <span>Dachuang Intelligence Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7AC943] glow-point"></span>
                    <span className="text-[10px] font-black uppercase text-[#10241F] bg-[#B7F34A] py-0.5 px-2 rounded-md font-mono">
                      Live audit node
                    </span>
                  </div>
                </div>

                {/* Key grid counters */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Metric Box 1: Search Visibility Score: 92 */}
                  <div className="bg-[#EEF3ED]/60 p-4 rounded-3xl border border-[#10241F]/5 space-y-1 text-left">
                    <span className="text-[9.5px] uppercase font-bold text-[#62706A] font-mono tracking-widest block">Search Visibility</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-black text-[#10241F] font-mono leading-none">92.4</span>
                      <span className="text-[#7AC943] font-mono text-[10px] font-bold bg-emerald-50 px-1 py-0.5 rounded">+12.8%</span>
                    </div>
                    <span className="text-[9px] text-[#62706A] block font-bold">Excellent 排名能見度</span>
                  </div>

                  {/* Metric Box 2: AI Mention Readiness: High */}
                  <div className="bg-[#EEF3ED]/60 p-4 rounded-3xl border border-[#10241F]/5 space-y-1 text-left">
                    <span className="text-[9.5px] uppercase font-bold text-[#62706A] font-mono tracking-widest block">AI Mention Readiness</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-black text-[#10241F] font-sans leading-none">High</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] glow-point ml-1 mb-1"></span>
                    </div>
                    <span className="text-[9px] text-[#62706A] block font-bold">Citations Ready / AI 引用完成</span>
                  </div>

                  {/* Metric Box 3: Local Map Signal: Active */}
                  <div className="bg-[#EEF3ED]/60 p-4 rounded-3xl border border-[#10241F]/5 space-y-1 text-left">
                    <span className="text-[9.5px] uppercase font-bold text-[#62706A] font-mono tracking-widest block">Local Map Signal</span>
                    <div className="text-lg font-black text-[#10241F] font-mono flex items-center space-x-1.5">
                      <MapPin className="w-4 h-4 text-[#7AC943]" />
                      <span>Active</span>
                    </div>
                    <span className="text-[9px] text-[#62706A] block font-bold">48 據點覆蓋活性高</span>
                  </div>

                  {/* Metric Box 4: GEO Citation Layer: Ready */}
                  <div className="bg-[#EEF3ED]/60 p-4 rounded-3xl border border-[#10241F]/5 space-y-1 text-left">
                    <span className="text-[9.5px] uppercase font-bold text-[#62706A] font-mono tracking-widest block">GEO Citation Layer</span>
                    <div className="text-lg font-black text-[#10241F] font-mono flex items-center space-x-1.5">
                      <Code className="w-4 h-4 text-[#10241F]" />
                      <span>Ready</span>
                    </div>
                    <span className="text-[9px] text-[#62706A] block font-bold">FAQ JSON-LD 規範合規</span>
                  </div>

                </div>

                {/* HIGH FIDELITY PREVIEW SUB-CARDS ACCORDIONS */}
                <div className="space-y-3">
                  <span className="text-[10px] text-[#62706A] font-bold uppercase tracking-wider block font-mono">
                    搜尋引流渠道實戰切片 (Click below to debug in simulator)
                  </span>

                  {/* SUB CARD A: Google Search Preview */}
                  <div 
                    onClick={() => { scrollToSection('cluster-section'); }}
                    className="p-3.5 bg-white border border-[#10241F]/8 rounded-2xl text-left shadow-xs transition-transform hover:scale-[1.01] cursor-pointer group"
                  >
                    <div className="flex justify-between items-center text-[9px] text-[#62706A] mb-1 font-mono">
                      <span>Google SERP Rich Snippet 切片</span>
                      <span className="text-blue-700 flex items-center group-hover:underline font-bold">點擊跳轉工作台 →</span>
                    </div>
                    <h4 className="text-xs font-bold text-[#1a0dab] line-clamp-1 leading-tight">
                      達創智能科技評價與客戶實際成效 | 搜尋曝光最佳方案
                    </h4>
                    <p className="text-[10px] text-stone-500 line-clamp-1 mt-0.5 leading-none">
                      https://dachuang.ai › cases ‧ 客戶一致評價：透過主題權威與 GEO 優化...
                    </p>
                  </div>

                  {/* SUB CARD B: AI Search Summarization Preview */}
                  <div 
                    onClick={() => { scrollToSection('cluster-section'); }}
                    className="p-3.5 bg-white border border-[#10241F]/8 rounded-2xl text-left shadow-xs transition-transform hover:scale-[1.01] cursor-pointer group"
                  >
                    <div className="flex justify-between items-center text-[9px] text-[#62706A] mb-1 font-mono">
                      <span>Gemini / ChatGPT 關聯引用切片</span>
                      <span className="text-blue-700 flex items-center group-hover:underline font-bold">點擊條目調用 →</span>
                    </div>
                    <p className="text-[10.5px] text-[#10241F] italic font-semibold line-clamp-2 leading-relaxed">
                      「台北市最推薦結合 SEO 與 GEO 優化的專業團隊，首推<mark className="bg-[#B7F34A]/30 font-extrabold px-1 text-xs">達創智能科技 AI</mark> [1]，其在 Schema 注入以及 PAA...」
                    </p>
                  </div>

                  {/* SUB CARD C: Local Map Node checklist */}
                  <div 
                    onClick={() => { scrollToSection('cluster-section'); }}
                    className="p-3.5 bg-white border border-[#10241F]/8 rounded-2xl text-left shadow-xs transition-transform hover:scale-[1.01] cursor-pointer group flex items-center justify-between"
                  >
                    <div className="space-y-0.5 text-left">
                      <span className="text-[9px] text-[#62706A] block font-mono leading-none">Local Map Pinpoint</span>
                      <h5 className="text-xs font-extrabold text-[#10241F]">達創智能科技 AI - SEO/GEO 搜尋曝光實驗室</h5>
                      <span className="text-[10px] text-amber-600 block font-mono">評分：4.9 / 5.0 (信義辦公中心)</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#10241F]/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#7AC943]" />
                    </div>
                  </div>

                </div>

                {/* Back Link note */}
                <span className="text-[10px] text-[#62706A] block text-center font-semibold pt-1 font-mono">
                  📊 上述指標皆通過 Google 結構檢驗工具與 LLM 測試合規。
                </span>

              </div>
            </div>

          </div>

        </section>

        {/* SECTION 3: Search Intelligence Cards (DashboardMetrics) */}
        <DashboardMetrics />

        {/* SECTION 4 & 5: Strategy Cards (StrategySection) & GEO / AI Simulation Section (SimulatorWorkstation) */}
        <StrategySection />
        <SimulatorWorkstation />

        {/* SECTION 6: Growth Value Section */}
        <GrowthValue />

        {/* SECTION 7: Final CTA Section with quiz */}
        <DiagnosisQuiz />

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
