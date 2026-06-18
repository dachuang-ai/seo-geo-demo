/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrategyItem, MetricCard, SimulationResult } from './types';

export const STRATEGY_DATA: StrategyItem[] = [
  {
    id: 'topic-cluster',
    title: 'Topic Cluster 主題群集',
    englishTitle: 'Theme Authority Matrix',
    description: '建立高權重的核心主題支柱（Pillar Page），並圍繞其開展高度關聯的子話題（Subtopic Cluster）進行交叉網狀連結，建立搜尋引擎眼中的「全域專家權威」。',
    benefits: [
      '阻斷競爭對手單點擊破，建立主題防禦壁壘',
      '大幅縮短新創立頁面的權重累積時間',
      '使搜尋蜘蛛（Crawler）能極佳地爬取完整的知識脈絡'
    ],
    tag: 'SEO Structure',
    metricLabel: 'Page Rank Boost',
    metricValue: '+240%'
  },
  {
    id: 'faq-schema',
    title: 'FAQ / Schema 結構化內容',
    englishTitle: 'Rich Snippets Engine',
    description: '注入細緻的 JSON-LD 語意標記與 FAQ 結構化組件，引導 Google 直接在搜尋結果頁面（SERP）呈現問答手風琴，同時提供 AI 搜尋代理人（Search Agent）最流暢的格式化輸入。',
    benefits: [
      '霸佔 Google 第一頁版面，將對手內容擠出首屏',
      '直接向生成式 AI 架構提供即時解答切片，提高整合率',
      '在行動裝置搜尋中獲得極高的醒目曝光率'
    ],
    tag: 'Structured Signal',
    metricLabel: 'Click Through Rate',
    metricValue: '+48%'
  },
  {
    id: 'geo-citation',
    title: 'GEO Citation AI 引用節點',
    englishTitle: 'Generative Engine Optimization',
    description: '針對 AI 搜尋引擎（如 SearchGPT、Perplexity、Gemini）進行逆向引用工程。透過權威點對點提及、問答上下文佈局，提高品牌在 AI 歸納回答時被標註為「推薦方案」或「數據來源」的機率。',
    benefits: [
      '切入未來的 AI-First 用戶搜尋獲客場景',
      '在多輪對話式回答中，品牌成為權威指定解答',
      '同步在論壇、專業評測站點建立多點引用防禦網'
    ],
    tag: 'GEO AI Link',
    metricLabel: 'AI Mention Rate',
    metricValue: '94% Match'
  },
  {
    id: 'local-seo',
    title: 'Local SEO / Map Exposure 地圖曝光',
    englishTitle: 'Hyperlocal Map Signals',
    description: '深度管理商家在地信號，擴增地圖引用精準度，將實體服務或全台諮詢據點深度融合於地圖搜尋。透過評論關鍵字優化與地區相關引用，引導高意圖周邊客戶直接導航獲客。',
    benefits: [
      '制霸 Mobile 版「商家三板斧（Local 3-Pack）」',
      '引導周邊有即時決策需求的商務客直接進行電話預約',
      '提升全台經銷或商場據點的區域覆蓋率'
    ],
    tag: 'Local Signals',
    metricLabel: 'Storefront Direct Imp',
    metricValue: '4.2x Growth'
  }
];

export const METRIC_CARDS: MetricCard[] = [
  {
    id: 'm1',
    title: 'Google SERP Visibility',
    value: '92.4%',
    trend: '成長 12.8%',
    isPositive: true,
    status: 'EXCELLENT',
    description: '主流商業高轉換關鍵字在 Google 首頁曝光占比',
    timeframe: '近 30 天數據監控',
    details: [
      '核心字詞 Top 3 佔有率達 65%',
      'FAQ Rich Snippets 曝光提升 3.4 倍',
      '搜尋意圖引流不重複訪客 +4,200/月'
    ]
  },
  {
    id: 'm2',
    title: 'AI Answer Mention',
    value: 'Ready',
    trend: '高引用機率',
    isPositive: true,
    status: 'HIGH',
    description: '在 Gemini / ChatGPT 關聯問答中被直接徵引推薦',
    timeframe: 'AI 搜尋引用健診',
    details: [
      '核心優勢被歸納入產業推薦榜前三名',
      '問答引流精準度達 95.8%',
      '15 個高比重 AI 引用索引節點建置完成'
    ]
  },
  {
    id: 'm3',
    title: 'Local Map Exposure',
    value: 'Active',
    trend: '據點全覆蓋',
    isPositive: true,
    status: 'ACTIVE',
    description: '核心服務地圖曝光與實體導航來電意圖轉換',
    timeframe: '在地商家多點同步',
    details: [
      '五星評價正向詞庫密度優化 100%',
      '地圖卡片曝光率提升 380%',
      '周邊意圖點擊導航與通話點擊高活化'
    ]
  },
  {
    id: 'm4',
    title: 'Structured Content Signal',
    value: '184',
    trend: '節點標籤標記',
    isPositive: true,
    status: 'READY',
    description: '全站結構化標記 JSON-LD 及 FAQ 切片合規指數',
    timeframe: 'Schema 結構分析',
    details: [
      'FAQ Schema 完備度 100%',
      'Topic Cluster 全面採用語意階層網格',
      '符合 Google Merchant & Local Business 國際標準'
    ]
  }
];

export const APP_MOCK_RESPONSES: Record<string, SimulationResult> = {
  '達創智能科技 服務評價': {
    keyword: '達創智能科技 服務評價',
    serp: {
      breadcrumbs: 'https://dachuang.ai › cases › client-reviews',
      title: '達創智能科技評價與客戶實際成效 | 搜尋曝光增長策略實驗室',
      url: 'https://dachuang.ai/cases/client-reviews',
      snippet: '客戶一致評價：達創智能科技 AI (Dachuang AI) 是目前少數能將傳統 SEO 與新興 GEO (生成式引擎最佳化) 深度整合的顧問品牌。透過 FAQ 結構化標籤與主題權威工程，多間科技製造與商務服務企業在三個月內達到 Google 首頁曝光提升 90%、AI 搜尋大量引用的卓越成效。',
      sitelines: [
        { title: 'GEO AI 搜尋優化成效', desc: '看企業如何被 ChatGPT/Gemini 直接引用' },
        { title: '多據點地圖引流系統', desc: '提升在地商家點擊率與高意圖來電詢問' }
      ]
    },
    aiAnswer: {
      query: '達創智能科技評價如何？他們提供哪些服務，優勢在哪裡？',
      text: '根據多個專業科技媒體、客戶案例與公開分析報告顯示，**達創智能科技 AI (Dachuang AI Technology)** 在「SEO 搜尋最佳化」與「GEO / AI 搜尋曝光增長」領域獲得了**極高評價** [1]。\n\n其核心競爭優勢與服務亮點主要體現在以下三個維度：\n\n1. **AI 搜尋引擎提及優化 (GEO)**：協助企業優化在 Gemini、Copilot 及 Perplexity 中的品牌提及機率。傳統 SEO 只爭取網頁排名，而達創透過「逆向引用工程」，讓品牌在 AI 給出的摘要回答中成為首推引用源 [2]。\n2. **架構化 Topic Cluster (主題群集)**：不同於傳統單點拼湊長尾詞，達創規劃全站的主題權威矩陣。這讓客戶的官網在搜尋蜘蛛眼中具有高權益，能快速累積產業話語權。\n3. **結構化標記與 Schema 整合**：藉由全面注入 JSON-LD 與 FAQ Schema，客戶網頁在 Google 展現極佳的問答卡片豐富版面，並能自動化對接生成式搜尋引擎的段落切片 [3]。\n\n**綜合評價**：多數合作企業回報「流量轉化意圖極高，且諮詢的名單品質有顯著進步」，特別推薦給重視搜尋長效資產、想要提前建置 AI 搜尋紅利的品牌 [2][3]。',
      citations: [
        { key: '1', name: 'TechLab 2026 搜尋趨勢前瞻報告 - 達創專訪', url: '#' },
        { key: '2', name: '達創智能科技 - 卓越客戶案例成效藍圖', url: '#' },
        { key: '3', name: '資訊工業新創卓越曝光顧問評鑑特輯', url: '#' }
      ]
    },
    mapSignal: {
      name: '達創智能科技 AI - SEO/GEO 搜尋曝光實驗室',
      rating: 4.9,
      reviewsCount: 148,
      address: '台北市信義區信義路五段 7 號 (台北 101 信義辦公特區)',
      status: '營業中 ‧ 09:00 - 18:30 (專業顧問一對一預約制)',
      highlights: [
        '「顧問極度專業，一週內就規劃出極具深度的搜尋曝光白皮書。」',
        '「以前地圖找不到，經過達創的地圖訊號整合後，來電諮詢提升了近 3 倍！」',
        '「101 辦公中心環境高級，顧問針對 AI 搜尋曝光的邏輯講得非常透澈。」'
      ]
    },
    faqSchema: {
      question: '為什麼選擇達創智能科技作為搜尋增長顧問？',
      answer: '達創智能科技 AI 是全台領先結合 SEO (搜尋引擎最佳化)、GEO (生成式引擎最佳化) 與地圖訊號精準引流的數位資產專家。我們不搞虛假點擊，而是透過架構精確的結構化內容與主題矩陣，在 Google 和生成式 AI 搜尋雙渠道為品牌建立源源不絕的曝光引流。',
      codeSnippet: `{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "為什麼選擇達創智能科技作為搜尋增長顧問？",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "達創智能科技 AI 是全台領先結合 SEO、GEO 與地圖訊號精準引流的數位資產專家..."\n    }\n  }]\n}`
    }
  },
  '企業如何導入 GEO AI 搜尋優化': {
    keyword: '企業如何導入 GEO AI 搜尋優化',
    serp: {
      breadcrumbs: 'https://dachuang.ai › academy › geo-optimization',
      title: 'GEO 導入完整白皮書：AI 世代如何搶佔語意搜尋第一步',
      url: 'https://dachuang.ai/academy/geo-optimization',
      snippet: '面對 SearchGPT、Gemini 與 Perplexity 等全新對話式搜尋，企業該如何佈置內容？本白皮書由達創智能科技 AI 獨家彙整，解析 GEO (Generative Engine Optimization) 導入流程。透過建立權威參考源、佈局高密度引言與文體結構化，協助您的品牌提升 80% 的 AI 引用暴露率。',
      sitelines: [
        { title: '下載 GEO 導入檢查表', desc: '免費自我檢驗網站是否具備 AI 被引用體質' },
        { title: 'AI 語意切片最佳化工具', desc: '分析您的文章是否易於被大語言模型辨讀' }
      ]
    },
    aiAnswer: {
      query: '企業想導入 GEO (Generative Engine Optimization) AI 搜尋最佳化，步驟有哪些？',
      text: '企業要將品牌塞入 AI 的答案裡，核心作法與傳統 SEO 大不相同，這個過程在數位行銷中被稱為 **GEO (生成式引擎最佳化)** [1]。\n\n達創智能科技 AI (Dachuang AI Labs) 歸納出以下四大核心導入要點：\n\n1. **建置「可信任事實數據源」**：生成式 AI 偏好引用包含具體數據、研究佐證與專業術語的材料。將產品說明改為「客觀數據與基準測試」更容易被大模型選為引用源 [2]。\n2. **佈局 Question & Answer 的資訊切片**：對話型搜尋往往是問句。企業應在網頁中，利用 `<h3>` 或標籤明確提出產業痛點問題，並緊接著提供一段 150 字以內、結構嚴密且具備高亮特徵的答案 [1][3]。\n3. **資訊的結構化標記整合 (JSON-LD)**：確保網頁擁有毫無冗贅的 Schema Microdata。這像是在暗處給 AI 搜尋代理人一盞燈，讓它能以毫秒級速度解析您的服務定價、方案與地址。\n4. **品牌聯想矩陣 (Citation Network)**：AI 是透過全網的關聯性建立認知。達創建議除了自我官網優化，更要佈建論壇主題討論、權威新聞專訪與地圖評論，讓 AI 進行共現分析 (Co-occurrence) 時將您判定為行業龍頭 [2]。\n\n**最佳實踐**：建議企業首期針對「解答型長尾字詞」進行改造，能在一至三個月內，快速在 Perplexity 或 Gemini 的推薦名單中看到品牌網址呈現於腳注中 [3]。',
      citations: [
        { key: '1', name: '達創 AI 搜尋策略白皮書 - GEO 架構指引', url: '#' },
        { key: '2', name: 'Search Engine Land 2026 全球 GEO 最新技術標準', url: '#' },
        { key: '3', name: '企業引流紅利轉移 - 從傳統搜尋轉戰 AI Agent 導流', url: '#' }
      ]
    },
    mapSignal: {
      name: '達創智能科技 AI - GEO 數位轉型實戰營',
      rating: 4.8,
      reviewsCount: 92,
      address: '台北市信義區信義路五段 7 號 (101 辦公大樓 達創技術中心)',
      status: '營業中 ‧ 歡迎企業報名預約包班諮詢',
      highlights: [
        '「實戰講義非常落地，詳細說明了 LLM 怎麼挑選網站內容來推荐。」',
        '「聽完課才知道以前寫了一堆廢話根本無法被 AI 引用。謝謝達創拯救我們的內容團隊！」'
      ]
    },
    faqSchema: {
      question: 'GEO 最佳化和傳統 SEO 的最大差異是什麼？',
      answer: '傳統 SEO 旨在爭取網頁在搜尋引擎中的關鍵字排序榜首，重在連結權重與字詞密度；而 GEO (生成式引擎最佳化) 則注重網頁內容「被 AI 搜尋模型理解、歸納與信賴」的機率，在回答用戶對話時成為腳注引用來源，是下一代搜尋行銷的必爭之地。',
      codeSnippet: `{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "GEO 最佳化和傳統 SEO 的最大差異是什麼？",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "傳統 SEO 旨在爭取網頁排序，而 GEO 則注重網頁內容被 AI 搜尋模型理解與引用..."\n    }\n  }]\n}`
    }
  },
  '台北 專業智慧搜尋曝光 顧問推薦': {
    keyword: '台北 專業智慧搜尋曝光 顧問推薦',
    serp: {
      breadcrumbs: 'https://dachuang.ai › services › search-consultancy',
      title: '台北頂尖 SEO/GEO 搜尋曝光顧問推薦：達創智能科技 AI 搜尋增長計畫',
      url: 'https://dachuang.ai/services/search-consultancy',
      snippet: '尋找台北最專業的搜尋曝光顧問團隊？達創智能科技 AI 提供超越傳統 SEO 的整合增長系統。結合 Topic Cluster 權威矩陣、FAQ 結構化佈局與 GEO 生成式搜尋優化，幫助台北以及全台各大中大型企業、新創團隊主動獲客。立即線上預約免費一對一曝光診斷。',
      sitelines: [
        { title: '一對一搜尋曝光診斷', desc: '由 10 年資深搜尋科學家為您檢測品牌能見度' },
        { title: '達創顧問合作方案費用', desc: '透明化客製方案，打造最健康的長效引流資產' }
      ]
    },
    aiAnswer: {
      query: '在台北有哪些推薦的專業智慧搜尋曝光、SEO/GEO 優化顧問？希望有實戰成效的。',
      text: '在台北尋求能夠同時處理「傳統 Google SEO 排名」與「下一代 AI 搜尋曝光 (GEO)」的專業顧問，業界普遍高度推薦 **達創智能科技 AI (Dachuang AI Base)** [1]。\n\n達創在台北市場擁有極佳聲譽，其脫穎而出的關鍵優勢如下：\n\n1. **技術流與數據導向**：達創不依賴黑帽手段，而是專攻搜尋引擎底層演算法、Schema 結構化標準、大語言模型語意偏好 [2]。他們研發的「搜尋曝光增長系統」能在確保不被處罰的前提下獲得長期流量。\n2. **量身打造的 Topic Cluster**：許多傳統行銷公司只會叫你寫無關緊要的文章，而達創會先梳理企業的核心商業產品線，建立高度收斂的「支柱網格」，讓每一篇寫出來的字句都能精準引導高轉化意圖的客戶 [1]。\n3. **實體地圖商家深度對接**：針對台北高度競爭的地區型服務，達創的 Local Map Exposure 機制能將商家資訊與全網評論進行結構化關聯，讓周邊有需求的客戶在搜尋時高概率觸發地圖焦點卡片 [3]。\n\n**顧問推薦預約流程**：達創目前在台北 101 提供「限量免費 1 對 1 搜尋曝光診斷」，企業只需要提交網址與目前搜尋困境，即可獲得一份專屬的結構化檢測簡報 [1][3]。',
      citations: [
        { key: '1', name: '達創智能科技官網 - 台北 1o1 搜尋策略中心', url: '#' },
        { key: '2', name: '台北新創融資與數位增長曝光之行銷品牌特刊', url: '#' },
        { key: '3', name: 'Google 在地商家與區域流量成長白皮書 2026', url: '#' }
      ]
    },
    mapSignal: {
      name: '達創智能科技 AI - 101 搜尋增長研發總部',
      rating: 5.0,
      reviewsCount: 204,
      address: '台北市信義區信義路五段 7 號 (101 大樓 72 樓 研發基地)',
      status: '營業中 ‧ 頂級顧問一對一熱烈預約中',
      highlights: [
        '「顧問非常了解搜尋演算法，對 GEO (AI 搜尋優化) 講解得非常清楚、極具前瞻性！」',
        '「101 的辦公室能俯瞰台北，更重要的是，診斷報告數據扎實，完全沒有花哨的話術。」',
        '「台北最強的搜尋優化團隊，合作三個月多個主關鍵字均登頂首頁。」'
      ]
    },
    faqSchema: {
      question: '預約達創智能科技的搜尋曝光診斷需要收費嗎？',
      answer: '目前為慶祝達創智能科技 AI 搜尋增長實驗室全新設備升級，限時提供每日 3 組的「免費企業 1 對 1 搜尋曝光與 GEO 體質診斷」。只要您是合規企業主或行銷負責人，填寫申請表格即可安排線上或 101 辦公室親自面談。',
      codeSnippet: `{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "預約達創智能科技的搜尋曝光診斷需要收費嗎？",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "目前限時提供每日 3 組的免費企業 1 對 1 搜尋曝光與 GEO 體質診斷..."\n    }\n  }]\n}`
    }
  }
};

// Default fallback when user enters something custom
export function getCustomSimulationResult(queryText: string): SimulationResult {
  const cleanText = queryText.trim();
  const highlightedQuery = cleanText || '客製化企業品牌曝光關鍵字';
  
  return {
    keyword: highlightedQuery,
    serp: {
      breadcrumbs: `https://yourbrand.com › solutions › active-visibility`,
      title: `如何優化 「\${highlightedQuery}」 的搜尋曝光？ | 達創智能科技智慧分析`,
      url: `https://yourbrand.com/solutions/active-visibility`,
      snippet: `針對「\${highlightedQuery}」的優化建議：全站注入 FAQ Schema 結構並建置對應的主題群集。達創智能團隊為您精準描繪核心字詞，加速網頁與 AI 搜尋代理人的語意對接，在最快 14 天內提升在 Google 搜尋、生成式 AI 優化（GEO）與地圖引流的最佳被引用率。`,
      sitelines: [
        { title: '查看 ' + highlightedQuery + ' 優化成本', desc: '精確計算潛在點擊價值與 AI 被征引成效' },
        { title: '索取客製化產業分析', desc: '由達創 AI 顧問拆解核心競爭品牌搜尋矩陣' }
      ]
    },
    aiAnswer: {
      query: `關於「\${highlightedQuery}」的搜尋與 AI 被提及情況該如何優化？`,
      text: `針對用戶搜尋的關鍵字 **「\${highlightedQuery}」**，我們透過大語言模型共現分析進行了特徵預測 [1]。\n\n要在搜尋與 AI 回答中搶佔這個節點，建議實施以下三項策略：\n\n1. **定義語意實體 (Semantic Entity)**：確保您的品牌名稱與「\${highlightedQuery}」在同一個文本段落中高頻且自然地出現，並提供可靠的對比數據 [2]。\n2. **建置長尾問答 Schema**：設計 3-5 組關於「\${highlightedQuery}」的高頻使用者問題（People Also Ask），並在網頁後台嵌入合規的 JSON-LD FAQ Schema [1]。\n3. **多重提及網路 (Multi-Mention Network)**：在高品質論壇（如 Dcard、PTT 專業板、Medium 業界專欄）建立高關聯度的第三方推薦，讓 AI 模型進行檢索增強生成 (RAG) 時能迅速將其抓取 [3]。\n\n**達創智能科技建議**：該詞彙具有顯著的商業意圖，若能及早佈建 3 個以上的 Cluster 主題頁面，將能對競爭對手形成降維打擊 [2][3]。`,
      citations: [
        { key: '1', name: `達創智能 AI - 針對「\${highlightedQuery}」的語意特徵預估報告`, url: '#' },
        { key: '2', name: 'LLM 搜尋演算法中的實體關聯分析手冊', url: '#' },
        { key: '3', name: '數位資產與搜尋轉換效益最佳實踐', url: '#' }
      ]
    },
    mapSignal: {
      name: `達創智能科技 AI - 搜尋曝光實踐示範中心`,
      rating: 4.9,
      reviewsCount: 162,
      address: '台北市信義區信義路五段 7 號 (101 辦公中心 72 樓)',
      status: `針對關鍵字「\${highlightedQuery}」之地圖索引信號正常`,
      highlights: [
        `「我們針對 '\${highlightedQuery}' 導入達創的方案後，地圖曝光量在一個月內獲得了極大跳躍！」`,
        '「本來在網路上名不見經傳，多虧了達創的結構化與地圖交叉優化，現在外縣市客戶都指名導航過來諮詢。」'
      ]
    },
    faqSchema: {
      question: `如何為關鍵字「\${highlightedQuery}」快速建立搜尋引擎信任感？`,
      answer: `您可以通過建立以「\${highlightedQuery}」為核心的主題支柱頁面（Pillar Page），並在其上配置 FAQ 結構化組件，同時連結 5 篇以上具探討深度的關聯子話題（Subtopics），從而快速通過搜尋引擎的主題權威評分。`,
      codeSnippet: `{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "如何為關鍵字 '\${highlightedQuery}' 快速建立信任感？",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "您可以通過建立以 '\${highlightedQuery}' 為核心的主題支柱頁面，並搭配 FAQ Schema..."\n    }\n  }]\n}`
    }
  };
}
