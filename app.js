/**
 * Dashboard de Gestão Estratégica de Custos RTG, Terceiros & Oficina
 * Base V2 (Janeiro a Agosto/2026) - 169.263 Horas Operadas & R$ 64,09/h
 * Suporte a Bilinguismo Completo (Português / English), Horímetros e Custo/Hora
 */

// Internationalization Dictionaries
const i18n = {
  pt: {
    langBtn: '🇺🇸 English',
    themeLight: '☀️ Modo Claro',
    themeDark: '🌙 Modo Escuro',
    headerTitle: 'Gestão Estratégica de Custos • Frota RTG, Terceiros & Oficina',
    headerSubBase: '📁 Base Atualizada: <strong>Custo_01-01-2026 a 08-31-2026_V2</strong>',
    headerSubPeriod: '📅 Período: <strong>Jan a Ago/2026 (8 Meses)</strong>',
    headerSubFleet: '🏗️ Frota: <strong>39 RTGs</strong>',
    headerSubContractors: '🤝 <strong>Serviços Terceiros</strong>',
    headerSubWorkshop: '🔧 <strong>Oficina W900</strong>',
    planBtn: '📖 Plano Resumido',
    exportCsvBtn: '📥 Baixar CSV',
    exportExcelBtn: '📊 Exportar Excel (.xlsx)',
    printBtn: '🖨️ Imprimir / PDF',
    bannerTitle: 'Auditoria Multimensal & Médias por Equipamento (Janeiro a Agosto/2026)',
    bannerDesc: '6.985 lançamentos orçamentários com cálculo de média mensal individual, horímetros acumulados e custo por hora trabalhada.',
    bannerFleetAvgBadge: 'Média da Frota: R$ 34.768,20 / RTG / mês',
    bannerRtgHeading: '🏗️ Frota de RTGs: R$ 10.847.678,44 (6.815 itens)',
    bannerRtgText: 'Custo estrito de peças e manutenções nos 39 guindastes operacionais. Média mensal de <strong>R$ 34,7k/mês por RTG</strong>.',
    bannerMakerHeading: '📈 Dispersão de Custos por Fabricante',
    bannerMakerText: '<strong>KoneCranes:</strong> R$ 54,5k/mês • <strong>Kalmar:</strong> R$ 26,1k/mês • <strong>ZMPC:</strong> R$ 15,4k/mês por RTG.',
    bannerHoursHeading: '⏱️ Intensidade Operacional & Custo Horário',
    bannerHoursText: 'Frota operou <strong>169.263 horas</strong> (média 529 h/mês/RTG). Custo médio direto de manutenção: <strong>R$ 64,09 / hora</strong>.',
    kpiTotalTitle: 'Total Geral (Filtro)',
    kpiRtgTitle: 'Frota RTGs (39 Un)',
    kpiHorasTitle: 'Horas Operadas (8m)',
    kpiHorasBadge: '⏱️ Horímetro',
    kpiHorasFooter: 'Média: 529 hrs / mês / RTG',
    kpiCustoHoraTitle: 'Custo Médio / Hora',
    kpiCustoHoraBadge: '⚡ R$/hr',
    kpiCustoHoraFooter: 'Benchmark Realizado (8m)',
    kpiMediaTitle: 'Média Mensal / RTG',
    kpiKoneTitle: 'KoneCranes (16 RTGs)',
    kpiKalmarTitle: 'Kalmar (12 RTGs)',
    kpiZmpcTitle: 'ZMPC (11 RTGs)',
    kpiTerceirosTitle: 'Serviços Terceiros',
    kpiOfensorTitle: 'Maior Ofensor',
    filterMonth: '📅 Mês / Período',
    filterCategory: '🏷️ Categoria',
    filterModel: '⚙️ Fabricante / Modelo',
    filterEquip: '🏗️ RTG Específico',
    filterSearch: '🔍 Buscar Lançamento',
    filterMinVal: '💵 Valor Mín. (R$)',
    filterReset: '↺ Limpar',
    allMonths: 'Todos os 8 Meses (Consolidado)',
    allCategories: 'Todas as Categorias',
    allModels: 'Todos os Fabricantes',
    allEquips: 'Todos os RTGs',
    tabRanking: '🏗️ Consolidado por RTG (Horas & Custos)',
    tabMensal: '📅 Comparativo Mensal (Jan a Ago)',
    tabLancamentos: '📋 Todos os Lançamentos (6.985 itens)',
    tabTerceiros: '🤝 Serviços de Terceiros',
    tabW900: '🔧 Oficina W900 (Apoio)',
    tabMateriais: '🔩 Top Peças de RTG',
    tabDiagnostico: '📄 Plano Executivo & Análise',
    rankingTitle: 'Consolidado da Frota com Horímetros e Custo Horário Unitário',
    rankingSub: 'Média da Frota: <strong>R$ 34.768,20/mês</strong> • <strong>R$ 64,09/hr</strong> • Clique em qualquer equipamento para ver o histórico dos 8 meses',
    hours8m: 'Horas 8m',
    costPerHour: 'Custo R$/h',
    totalSpent: 'Total Gasto (R$)',
    monthlyAvg: 'Média Mensal (R$/mês)',
    deviationVsFleet: 'Desvio vs Frota',
    pctFleet: '% da Frota',
    partsCount: 'Qtd Peças',
    avgCostPerPart: 'Custo Médio / Peça',
    historyAction: 'Histórico',
    viewMonthsBtn: '📊 Ver Detalhes',
    modalSubtitle: 'Diagnóstico detalhado de despesas, horímetros e evolução mês a mês (Jan-Ago/2026).',
    modalCost8m: 'Custo 8 Meses',
    modalMonthlyAvg: 'Média Mensal',
    modalHours: 'Horas Operadas',
    modalCostHour: 'Custo / Hora',
    modalPartsCount: 'Peças Trocadas',
    modalAvgTicket: 'Ticket Médio',
    modalCurveTitle: 'Curva Mensal de Custos do',
    modalTopPartsTitle: 'Top Peças e Componentes Aplicados no',
    modalCloseBtn: 'Fechar Detalhes',
    chartEvolutionTitle: '📈 Evolução Mensal de Custos • Janeiro a Agosto de 2026',
    chartModelsTitle: '🍩 Participação de Custos por Fabricante de RTG',
    chartEquipTitle: '🏗️ Top 15 RTGs: Custo Total & Comparativo vs Média da Frota',
    chartCompTitle: '📊 Composição Geral de Custos (RTGs vs Terceiros vs Apoio)',
    idleNotice: '0 h (ocioso)',
    perHourSuffix: '/ hora',
    perMonthSuffix: '/ mês',
    loginTitle: 'Terminal de Contêineres de Paranaguá',
    loginSub: 'Gestão Estratégica de Custos • Frota RTG',
    loginLabel: '🔒 Senha de Acesso',
    loginPlaceholder: 'Digite a senha...',
    loginBtn: 'Acessar Dashboard',
    loginError: '⚠️ Senha incorreta. Tente novamente.',
    loginFooter: '🛡️ Ambiente Seguro • Acesso Restrito • Engenharia TCP',
    logoutBtn: 'Sair'
  },
  en: {
    langBtn: '🇧🇷 Português',
    themeLight: '☀️ Light Mode',
    themeDark: '🌙 Dark Mode',
    headerTitle: 'Strategic Cost Management • RTG Fleet, Third Parties & Workshop',
    headerSubBase: '📁 Updated database: <strong>Cost_01-01-2026 to 08-31-2026_V2</strong>',
    headerSubPeriod: '📅 Period: <strong>Jan. to Aug. 2026 (8 months)</strong>',
    headerSubFleet: '🏗️ Fleet: <strong>39 RTGs</strong>',
    headerSubContractors: '🤝 <strong>Third-Party Services</strong>',
    headerSubWorkshop: '🔧 <strong>Workshop W900</strong>',
    planBtn: '📖 Summary Plan',
    exportCsvBtn: '📥 Download CSV',
    exportExcelBtn: '📊 Export Excel (.xlsx)',
    printBtn: '🖨️ Print / PDF',
    bannerTitle: 'Multi-Month Audit & Unit Metrics per Crane (January to August 2026)',
    bannerDesc: '6,985 budget accounting entries with individual monthly averages, accumulated hour meters, and unit cost per operating hour.',
    bannerFleetAvgBadge: 'Fleet Benchmark: R$ 34,768.20 / RTG / mo',
    bannerRtgHeading: '🏗️ RTG Fleet: R$ 10,847,678.44 (6,815 items)',
    bannerRtgText: 'Direct parts and maintenance costs across the 39 operational cranes. Monthly average: <strong>R$ 34.7k/mo per RTG</strong>.',
    bannerMakerHeading: '📈 Cost Dispersion by Manufacturer',
    bannerMakerText: '<strong>KoneCranes:</strong> R$ 54.5k/mo • <strong>Kalmar:</strong> R$ 26.1k/mo • <strong>ZMPC:</strong> R$ 15.4k/mo per RTG.',
    bannerHoursHeading: '⏱️ Operational Intensity & Cost per Hour',
    bannerHoursText: 'Fleet logged <strong>169,263 operating hours</strong> (avg 529 hrs/mo/RTG). Direct maintenance cost: <strong>R$ 64.09 / hour</strong>.',
    kpiTotalTitle: 'Total Expenditure (Filtered)',
    kpiRtgTitle: 'RTG Fleet (39 Units)',
    kpiHorasTitle: 'Operating Hours (8m)',
    kpiHorasBadge: '⏱️ Hour Meter',
    kpiHorasFooter: 'Average: 529 hrs / mo / RTG',
    kpiCustoHoraTitle: 'Avg Cost / Hour',
    kpiCustoHoraBadge: '⚡ R$/hr',
    kpiCustoHoraFooter: '8-Month Realized Benchmark',
    kpiMediaTitle: 'Monthly Avg / RTG',
    kpiKoneTitle: 'KoneCranes (16 RTGs)',
    kpiKalmarTitle: 'Kalmar (12 RTGs)',
    kpiZmpcTitle: 'ZMPC (11 RTGs)',
    kpiTerceirosTitle: 'Contractors & Services',
    kpiOfensorTitle: 'Highest Cost Offender',
    filterMonth: '📅 Month / Period',
    filterCategory: '🏷️ Category',
    filterModel: '⚙️ Manufacturer / Model',
    filterEquip: '🏗️ Specific RTG',
    filterSearch: '🔍 Search Transaction',
    filterMinVal: '💵 Min Value (R$)',
    filterReset: '↺ Reset',
    allMonths: 'All 8 Months (Consolidated)',
    allCategories: 'All Categories',
    allModels: 'All Manufacturers',
    allEquips: 'All RTGs',
    tabRanking: '🏗️ Fleet Ranking (Hours & Costs)',
    tabMensal: '📅 Monthly Breakdown (Jan-Aug)',
    tabLancamentos: '📋 All Transactions (6,985 items)',
    tabTerceiros: '🤝 Contractors & External Services',
    tabW900: '🔧 Workshop W900 (Support)',
    tabMateriais: '🔩 Top RTG Parts',
    tabDiagnostico: '📄 Executive Plan & Analysis',
    rankingTitle: 'Consolidated Fleet Performance with Operating Hours & Unit Cost/Hour',
    rankingSub: 'Fleet Average: <strong>R$ 34,768.20/mo</strong> • <strong>R$ 64.09/hr</strong> • Click on any crane to inspect its 8-month breakdown',
    hours8m: 'Operating Hours (8m)',
    costPerHour: 'Cost R$/hr',
    totalSpent: 'Total Cost (R$)',
    monthlyAvg: 'Monthly Avg (R$/mo)',
    deviationVsFleet: 'Deviation vs Fleet',
    pctFleet: '% of Fleet',
    partsCount: 'Parts Count',
    avgCostPerPart: 'Avg Cost / Part',
    historyAction: 'Details',
    viewMonthsBtn: '📊 View Details',
    modalSubtitle: 'Detailed diagnosis of maintenance expenses, operating hours, and month-by-month evolution (Jan to Aug 2026).',
    modalCost8m: '8-Month Cost',
    modalMonthlyAvg: 'Monthly Average',
    modalHours: 'Operating Hours',
    modalCostHour: 'Cost / Hour',
    modalPartsCount: 'Replaced Parts',
    modalAvgTicket: 'Average Ticket',
    modalCurveTitle: 'Monthly Cost Curve & Operating Hours for',
    modalTopPartsTitle: 'Top Applied Parts & Components on',
    modalCloseBtn: 'Close Details',
    chartEvolutionTitle: '📈 Monthly Cost Evolution • January to August 2026',
    chartModelsTitle: '🍩 Cost Share by RTG Manufacturer',
    chartEquipTitle: '🏗️ Top 15 RTGs: Total Cost vs Fleet Average Benchmark',
    chartCompTitle: '📊 Overall Cost Breakdown (RTGs vs Contractors vs Support)',
    idleNotice: '0 hrs (idle)',
    perHourSuffix: '/ hr',
    perMonthSuffix: '/ mo',
    loginTitle: 'Paranaguá Container Terminal (TCP)',
    loginSub: 'Strategic Fleet Cost Management • RTGs',
    loginLabel: '🔒 Access Password',
    loginPlaceholder: 'Enter password...',
    loginBtn: 'Access Dashboard',
    loginError: '⚠️ Incorrect password. Try again.',
    loginFooter: '🛡️ Secure Environment • Restricted Access • TCP Engineering',
    logoutBtn: 'Logout'
  }
};

// Definition of the 7 RTG Technological Families
const FAMILIES_DEF = [
  { id: 1, min: 1, max: 3, units: 3, titlePt: 'RTG 01 ao 03 (3 un)', titleEn: 'RTG 01 to 03 (3 units)', badgePt: '⚡ Eletrificado', badgeEn: '⚡ Electrified' },
  { id: 2, min: 4, max: 6, units: 3, titlePt: 'RTG 04 ao 06 (3 un)', titleEn: 'RTG 04 to 06 (3 units)', badgePt: '⛽ Diesel (2001)', badgeEn: '⛽ Diesel (2001)' },
  { id: 3, min: 8, max: 10, units: 3, titlePt: 'RTG 08 ao 10 (3 un)', titleEn: 'RTG 08 to 10 (3 units)', badgePt: '⛽ Kalmar (2005)', badgeEn: '⛽ Kalmar (2005)' },
  { id: 4, min: 11, max: 14, units: 4, titlePt: 'RTG 11 ao 14 (4 un)', titleEn: 'RTG 11 to 14 (4 units)', badgePt: '🚨 Pico de Custo', badgeEn: '🚨 Peak Cost' },
  { id: 5, min: 15, max: 20, units: 6, titlePt: 'RTG 15 ao 20 (6 un)', titleEn: 'RTG 15 to 20 (6 units)', badgePt: '⛽ Retrofit (2011)', badgeEn: '⛽ Retrofit (2011)' },
  { id: 6, min: 21, max: 30, units: 10, titlePt: 'RTG 21 ao 30 (10 un)', titleEn: 'RTG 21 to 30 (10 units)', badgePt: '⛽ Retrofit (2014)', badgeEn: '⛽ Retrofit (2014)' },
  { id: 7, min: 31, max: 41, units: 11, titlePt: 'RTG 31 ao 41 (11 un)', titleEn: 'RTG 31 to 41 (11 units)', badgePt: '🌱 Frota Nova (2023)', badgeEn: '🌱 New Fleet (2023)' }
];

// State Management
const state = {
  raw: window.RTG_DATA || { resumo: {}, lancamentos: [] },
  filtered: [],
  filters: {
    mes: 'ALL',
    categoria: 'ALL',
    modelo: 'ALL',
    equipamento: 'ALL',
    search: '',
    minValor: '',
  },
  currentTab: 'ranking',
  pagination: {
    page: 1,
    pageSize: 25,
  },
  sort: {
    column: 'total',
    direction: 'desc',
  },
  sortRanking: {
    column: 'total',
    direction: 'desc',
  },
  charts: {},
  lang: 'en',
};

// Translation Helper
function t(key) {
  const dict = i18n[state.lang] || i18n.pt;
  return dict[key] || i18n.pt[key] || key;
}

// Formatters
const formatCurrency = (val) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(val || 0);
};

const formatNumber = (val) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(val || 0);
};

const formatPercent = (val) => {
  return `${(val || 0).toFixed(2)}%`;
};

// Access Control & Authentication
const AUTH_KEY = 'tcp_rtg_auth_session';
const PASSWORD_HASH = '67d0848a01e3815cf8b5d6e2f9a2c59fbaa38e5e3dfd3774af53e319f82b72e4';

function checkAuthStatus() {
  const isAuth = sessionStorage.getItem(AUTH_KEY) === 'true';
  const gate = document.getElementById('login-gate');
  if (isAuth) {
    if (gate) gate.style.display = 'none';
  } else {
    if (gate) {
      gate.style.display = 'flex';
      const inp = document.getElementById('login-password');
      if (inp) inp.focus();
    }
  }
}

async function sha256(str) {
  if (window.crypto && crypto.subtle) {
    const buffer = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  return str === 'tcp@2026' ? PASSWORD_HASH : '';
}

async function handleLoginSubmit(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('login-password');
  const err = document.getElementById('login-error');
  if (!input) return;
  const val = input.value.trim();

  const computed = await sha256(val);
  if (computed === PASSWORD_HASH || val === 'tcp@2026') {
    sessionStorage.setItem(AUTH_KEY, 'true');
    if (err) err.style.display = 'none';
    const gate = document.getElementById('login-gate');
    if (gate) {
      gate.style.opacity = '0';
      setTimeout(() => { gate.style.display = 'none'; }, 300);
    }
  } else {
    if (err) {
      err.style.display = 'block';
      err.textContent = t('loginError');
    }
    input.value = '';
    input.focus();
  }
}

function handleLogout() {
  sessionStorage.removeItem(AUTH_KEY);
  const gate = document.getElementById('login-gate');
  const input = document.getElementById('login-password');
  const err = document.getElementById('login-error');
  if (err) err.style.display = 'none';
  if (input) input.value = '';
  if (gate) {
    gate.style.display = 'flex';
    setTimeout(() => { gate.style.opacity = '1'; }, 10);
    if (input) input.focus();
  }
}

function togglePasswordVisibility() {
  const input = document.getElementById('login-password');
  const btn = document.getElementById('btn-toggle-pwd');
  if (!input || !btn) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = '&#128064;';
  } else {
    input.type = 'password';
    btn.innerHTML = '&#128065;&#65039;';
  }
}

window.handleLoginSubmit = handleLoginSubmit;
window.handleLogout = handleLogout;
window.togglePasswordVisibility = togglePasswordVisibility;

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
  if (!window.RTG_DATA || !window.RTG_DATA.lancamentos) {
    console.error('Dados RTG V2 não encontrados.');
    alert('Erro ao carregar dados da base V2. Verifique se o arquivo rtg_complete_data.js está presente.');
    return;
  }

  // Load language preference if saved (defaults to 'en')
  state.lang = 'en';
  try {
    const savedLang = localStorage.getItem('rtg_dashboard_lang_v2');
    if (savedLang === 'en' || savedLang === 'pt') {
      state.lang = savedLang;
    }
  } catch (e) {}

  checkAuthStatus();
  state.filtered = [...state.raw.lancamentos];

  initFilterOptions();
  initEventListeners();
  applyLanguageUI();
  updateKPIs();
  renderCurrentTab();
  updateStatusBar();

  setTimeout(() => {
    initCharts();
  }, 100);
});

// Setup Filter Options
function initFilterOptions() {
  const selectEquip = document.getElementById('filter-equipamento');
  if (selectEquip && state.raw.resumo && state.raw.resumo.rankingEquipamentos) {
    selectEquip.innerHTML = `<option value="ALL">${t('allEquips')}</option>`;
    const distinctEquips = [...state.raw.resumo.rankingEquipamentos].sort((a, b) => a.rtgNum - b.rtgNum);

    distinctEquips.forEach((eq) => {
      const opt = document.createElement('option');
      opt.value = eq.tag || eq.equipamento;
      opt.textContent = `${eq.rtg} (Tag ${eq.tag || eq.equipamento} - ${eq.modelo})`;
      selectEquip.appendChild(opt);
    });
  }
}

// Event Listeners
function initEventListeners() {
  // Language Switcher Toggle
  const langToggle = document.getElementById('lang-toggle-btn');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      state.lang = state.lang === 'pt' ? 'en' : 'pt';
      try { localStorage.setItem('rtg_dashboard_lang_v2', state.lang); } catch (e) {}
      applyLanguageUI();
      updateKPIs();
      renderCurrentTab();
      updateStatusBar();
      updateCharts();
    });
  }

  // Logout / Lock Button
  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', handleLogout);
  }

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      themeToggle.textContent = next === 'light' ? t('themeDark') : t('themeLight');
      updateChartsTheme();
    });
  }

  // Filters
  const mesFilter = document.getElementById('filter-mes');
  if (mesFilter) {
    mesFilter.addEventListener('change', (e) => {
      state.filters.mes = e.target.value;
      applyFilters();
    });
  }

  const catFilter = document.getElementById('filter-categoria');
  if (catFilter) {
    catFilter.addEventListener('change', (e) => {
      state.filters.categoria = e.target.value;
      applyFilters();
    });
  }

  const modFilter = document.getElementById('filter-modelo');
  if (modFilter) {
    modFilter.addEventListener('change', (e) => {
      state.filters.modelo = e.target.value;
      applyFilters();
    });
  }

  const eqFilter = document.getElementById('filter-equipamento');
  if (eqFilter) {
    eqFilter.addEventListener('change', (e) => {
      state.filters.equipamento = e.target.value;
      applyFilters();
    });
  }

  const searchFilter = document.getElementById('filter-search');
  if (searchFilter) {
    searchFilter.addEventListener('input', (e) => {
      state.filters.search = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  const minValFilter = document.getElementById('filter-min-val');
  if (minValFilter) {
    minValFilter.addEventListener('input', (e) => {
      state.filters.minValor = e.target.value;
      applyFilters();
    });
  }

  const resetBtn = document.getElementById('btn-reset-filters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (mesFilter) mesFilter.value = 'ALL';
      if (catFilter) catFilter.value = 'ALL';
      if (modFilter) modFilter.value = 'ALL';
      if (eqFilter) eqFilter.value = 'ALL';
      if (searchFilter) searchFilter.value = '';
      if (minValFilter) minValFilter.value = '';

      state.filters = {
        mes: 'ALL',
        categoria: 'ALL',
        modelo: 'ALL',
        equipamento: 'ALL',
        search: '',
        minValor: '',
      };
      applyFilters();
    });
  }

  // Tab Buttons Navigation
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentTab = btn.getAttribute('data-tab');
      renderCurrentTab();
    });
  });

  // Export Buttons
  const exportCsvBtn = document.getElementById('btn-export-csv');
  if (exportCsvBtn) exportCsvBtn.addEventListener('click', exportToCSV);

  const exportExcelBtn = document.getElementById('btn-export-excel');
  if (exportExcelBtn) exportExcelBtn.addEventListener('click', exportToExcel);

  const printBtn = document.getElementById('btn-print');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  const viewPlanBtn = document.getElementById('btn-view-plan');
  const planModal = document.getElementById('plan-modal');
  const closePlanBtn = document.getElementById('close-plan-modal');
  if (viewPlanBtn && planModal) {
    viewPlanBtn.addEventListener('click', () => (planModal.style.display = 'flex'));
  }
  if (closePlanBtn && planModal) {
    closePlanBtn.addEventListener('click', () => (planModal.style.display = 'none'));
  }
  window.addEventListener('click', (e) => {
    if (e.target === planModal) planModal.style.display = 'none';
  });
}

// Apply Language strings to static DOM elements
function applyLanguageUI() {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) langBtn.textContent = t('langBtn');

  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    themeToggle.textContent = isDark ? t('themeLight') : t('themeDark');
  }

  const elPlan = document.getElementById('btn-view-plan');
  if (elPlan) elPlan.textContent = t('planBtn');

  const elCsv = document.getElementById('btn-export-csv');
  if (elCsv) elCsv.textContent = t('exportCsvBtn');

  const elXls = document.getElementById('btn-export-excel');
  if (elXls) elXls.textContent = t('exportExcelBtn');

  const elPrint = document.getElementById('btn-print');
  if (elPrint) elPrint.textContent = t('printBtn');

  // Top Header Titles & Subtitles
  const hTitle = document.getElementById('header-main-title');
  if (hTitle) hTitle.innerHTML = t('headerTitle');
  const hBase = document.getElementById('header-sub-base');
  if (hBase) hBase.innerHTML = t('headerSubBase');
  const hPer = document.getElementById('header-sub-period');
  if (hPer) hPer.innerHTML = t('headerSubPeriod');
  const hFlt = document.getElementById('header-sub-fleet');
  if (hFlt) hFlt.innerHTML = t('headerSubFleet');
  const hContr = document.getElementById('header-sub-contractors');
  if (hContr) hContr.innerHTML = t('headerSubContractors');
  const hShop = document.getElementById('header-sub-workshop');
  if (hShop) hShop.innerHTML = t('headerSubWorkshop');

  // Banner
  const bTitle = document.getElementById('banner-title');
  if (bTitle) bTitle.textContent = t('bannerTitle');
  const bDesc = document.getElementById('banner-desc');
  if (bDesc) bDesc.innerHTML = t('bannerDesc');
  const bBadge = document.getElementById('banner-metric-badge');
  if (bBadge) bBadge.textContent = t('bannerFleetAvgBadge');
  const bRtgH = document.getElementById('banner-rtg-heading');
  if (bRtgH) bRtgH.innerHTML = t('bannerRtgHeading');
  const bRtgT = document.getElementById('banner-rtg-text');
  if (bRtgT) bRtgT.innerHTML = t('bannerRtgText');
  const bMakH = document.getElementById('banner-terceiros-heading');
  if (bMakH) bMakH.innerHTML = t('bannerMakerHeading');
  const bMakT = document.getElementById('banner-terceiros-text');
  if (bMakT) bMakT.innerHTML = t('bannerMakerText');
  const bW900H = document.getElementById('banner-w900-heading');
  if (bW900H) bW900H.innerHTML = t('bannerHoursHeading');
  const bW900T = document.getElementById('banner-w900-text');
  if (bW900T) bW900T.innerHTML = t('bannerHoursText');

  // KPI Titles
  const kTot = document.getElementById('kpi-title-total');
  if (kTot) kTot.textContent = t('kpiTotalTitle');
  const kRtg = document.getElementById('kpi-title-rtg');
  if (kRtg) kRtg.textContent = t('kpiRtgTitle');
  const kHoras = document.getElementById('kpi-title-horas');
  if (kHoras) kHoras.textContent = t('kpiHorasTitle');
  const kHorasB = document.getElementById('kpi-horas-badge');
  if (kHorasB) kHorasB.textContent = t('kpiHorasBadge');
  const kCHora = document.getElementById('kpi-title-custohora');
  if (kCHora) kCHora.textContent = t('kpiCustoHoraTitle');
  const kCHoraB = document.getElementById('kpi-custohora-badge');
  if (kCHoraB) kCHoraB.textContent = t('kpiCustoHoraBadge');
  const kMed = document.getElementById('kpi-title-media');
  if (kMed) kMed.textContent = t('kpiMediaTitle');
  const kKon = document.getElementById('kpi-title-kone');
  if (kKon) kKon.textContent = t('kpiKoneTitle');
  const kKal = document.getElementById('kpi-title-kalmar');
  if (kKal) kKal.textContent = t('kpiKalmarTitle');
  const kZmp = document.getElementById('kpi-title-zmpc');
  if (kZmp) kZmp.textContent = t('kpiZmpcTitle');
  const kTerc = document.getElementById('kpi-title-terceiros');
  if (kTerc) kTerc.textContent = t('kpiTerceirosTitle');
  const kOfens = document.getElementById('kpi-title-ofensor');
  if (kOfens) kOfens.textContent = t('kpiOfensorTitle');

  // Family Section Header & Titles
  const fSecTitle = document.getElementById('family-section-title');
  if (fSecTitle) {
    fSecTitle.textContent = state.lang === 'en'
      ? 'Technological Batches & RTG Families (Costs, Hours & Cost/Hour)'
      : 'Lotes Tecnológicos & Famílias de RTG (Custos, Horas & Custo/Hora)';
  }
  const fSecBadge = document.getElementById('family-section-badge');
  if (fSecBadge) {
    fSecBadge.textContent = state.lang === 'en'
      ? '7 Batches • 39 Active Cranes'
      : '7 Lotes • 39 Guindastes Ativos';
  }

  FAMILIES_DEF.forEach(fam => {
    const elFamTitle = document.getElementById(`fam-title-${fam.id}`);
    if (elFamTitle) elFamTitle.textContent = state.lang === 'en' ? fam.titleEn : fam.titlePt;
    const elFamBadge = document.getElementById(`fam-badge-${fam.id}`);
    if (elFamBadge) elFamBadge.textContent = state.lang === 'en' ? fam.badgeEn : fam.badgePt;
  });

  // Login Gate & Logout Translations
  const logComp = document.getElementById('login-company-title');
  if (logComp) logComp.textContent = t('loginTitle');
  const logPort = document.getElementById('login-portal-title');
  if (logPort) logPort.textContent = t('loginSub');
  const logLbl = document.getElementById('lbl-login-pass');
  if (logLbl) logLbl.innerHTML = t('loginLabel');
  const logInp = document.getElementById('login-password');
  if (logInp) logInp.placeholder = t('loginPlaceholder');
  const logBtn = document.getElementById('btn-login-submit-text');
  if (logBtn) logBtn.textContent = t('loginBtn');
  const logFoot = document.getElementById('login-footer-text');
  if (logFoot) logFoot.innerHTML = `<span>${t('loginFooter')}</span>`;
  const outBtn = document.getElementById('btn-logout-text');
  if (outBtn) outBtn.textContent = t('logoutBtn');

  // Filter Labels
  const flMes = document.querySelector('label[for="filter-mes"]');
  if (flMes) flMes.innerHTML = t('filterMonth');
  const flCat = document.querySelector('label[for="filter-categoria"]');
  if (flCat) flCat.innerHTML = t('filterCategory');
  const flMod = document.querySelector('label[for="filter-modelo"]');
  if (flMod) flMod.innerHTML = t('filterModel');
  const flEq = document.querySelector('label[for="filter-equipamento"]');
  if (flEq) flEq.innerHTML = t('filterEquip');
  const flSrch = document.querySelector('label[for="filter-search"]');
  if (flSrch) flSrch.innerHTML = t('filterSearch');
  const flMin = document.querySelector('label[for="filter-min-val"]');
  if (flMin) flMin.innerHTML = t('filterMinVal');
  const btnRst = document.getElementById('btn-reset-filters');
  if (btnRst) btnRst.innerHTML = t('filterReset');

  // Tab Buttons
  const tabR = document.getElementById('tab-btn-ranking');
  if (tabR) tabR.innerHTML = t('tabRanking');
  const tabM = document.getElementById('tab-btn-mensal');
  if (tabM) tabM.innerHTML = t('tabMensal');
  const tabL = document.getElementById('tab-btn-lancamentos');
  if (tabL) tabL.innerHTML = t('tabLancamentos');
  const tabT = document.getElementById('tab-btn-terceiros');
  if (tabT) tabT.innerHTML = t('tabTerceiros');
  const tabW = document.getElementById('tab-btn-w900');
  if (tabW) tabW.innerHTML = t('tabW900');
  const tabMat = document.getElementById('tab-btn-materiais');
  if (tabMat) tabMat.innerHTML = t('tabMateriais');
  const tabDiag = document.getElementById('tab-btn-diagnostico');
  if (tabDiag) tabDiag.innerHTML = t('tabDiagnostico');

  // Filter Dropdown Default Options
  const selMes = document.getElementById('filter-mes');
  if (selMes && selMes.options[0]) selMes.options[0].textContent = t('allMonths');
  const selCat = document.getElementById('filter-categoria');
  if (selCat && selCat.options[0]) selCat.options[0].textContent = t('allCategories');
  const selMod = document.getElementById('filter-modelo');
  if (selMod && selMod.options[0]) selMod.options[0].textContent = t('allModels');
  const selEq = document.getElementById('filter-equipamento');
  if (selEq && selEq.options[0]) selEq.options[0].textContent = t('allEquips');
}

// Apply Filters
function applyFilters() {
  state.filtered = state.raw.lancamentos.filter((row) => {
    if (state.filters.mes !== 'ALL' && row.anoMes !== state.filters.mes) return false;
    if (state.filters.categoria !== 'ALL' && row.tipo !== state.filters.categoria) return false;
    if (state.filters.modelo !== 'ALL' && row.modelo !== state.filters.modelo) return false;
    if (state.filters.equipamento !== 'ALL' && row.equipamento !== state.filters.equipamento && row.tag !== state.filters.equipamento) return false;
    if (state.filters.search) {
      const matchDesc = row.descricao && row.descricao.toLowerCase().includes(state.filters.search);
      const matchForn = row.fornecedor && row.fornecedor.toLowerCase().includes(state.filters.search);
      const matchRtg = (row.rtgName || row.rtg || '').toLowerCase().includes(state.filters.search);
      const matchEq = row.equipamento && row.equipamento.toLowerCase().includes(state.filters.search);
      const matchNat = row.natureza && row.natureza.toLowerCase().includes(state.filters.search);
      if (!matchDesc && !matchForn && !matchRtg && !matchEq && !matchNat) return false;
    }
    if (state.filters.minValor !== '' && row.valor < parseFloat(state.filters.minValor)) return false;
    return true;
  });

  state.pagination.page = 1;
  updateKPIs();
  updateStatusBar();
  renderCurrentTab();
  updateCharts();
}

// Update Dynamic KPIs based on filtered selection
function updateKPIs() {
  const filtered = state.filtered;
  const totalGeral = filtered.reduce((acc, curr) => acc + curr.valor, 0);
  const rtgItems = filtered.filter((r) => r.tipo === 'RTG');
  const totalRTG = rtgItems.reduce((acc, curr) => acc + curr.valor, 0);
  const terceirosItems = filtered.filter((r) => r.tipo === 'SERVICO_TERCEIRO');
  const totalTerceiros = terceirosItems.reduce((acc, curr) => acc + curr.valor, 0);

  const koneTotal = rtgItems.filter((r) => r.modelo === 'KoneCranes').reduce((a, b) => a + b.valor, 0);
  const kalmarTotal = rtgItems.filter((r) => r.modelo === 'Kalmar').reduce((a, b) => a + b.valor, 0);
  const zmpcTotal = rtgItems.filter((r) => r.modelo === 'ZMPC').reduce((a, b) => a + b.valor, 0);

  const numMeses = state.filters.mes === 'ALL' ? 8 : 1;
  const mediaFrotaMensal = totalRTG / 39 / numMeses;

  // Compute Total Operating Hours for active selection
  const equipsRaw = state.raw.resumo.rankingEquipamentos || [];
  let totalHoras = 0.0;
  
  if (state.filters.equipamento !== 'ALL') {
    const eq = equipsRaw.find((e) => (e.tag || e.equipamento) === state.filters.equipamento);
    if (eq) {
      if (state.filters.mes === 'ALL') {
        totalHoras = eq.horas || 0.0;
      } else if (eq.horasMeses) {
        totalHoras = eq.horasMeses[state.filters.mes] || 0.0;
      }
    }
  } else {
    // All or filtered models
    equipsRaw.forEach((eq) => {
      if (state.filters.modelo !== 'ALL' && eq.modelo !== state.filters.modelo) return;
      if (state.filters.mes === 'ALL') {
        totalHoras += eq.horas || 0.0;
      } else if (eq.horasMeses) {
        totalHoras += eq.horasMeses[state.filters.mes] || 0.0;
      }
    });
  }

  const custoMedioHora = totalHoras > 0 ? totalRTG / totalHoras : 0.0;

  // Top RTG in filter
  const rtgMap = {};
  rtgItems.forEach((r) => {
    const key = r.rtgName || r.rtg || `RTG ${r.equipamento}`;
    if (!rtgMap[key]) {
      rtgMap[key] = { rtg: key, modelo: r.modelo, total: 0 };
    }
    rtgMap[key].total += r.valor;
  });

  const topRtgObj = Object.values(rtgMap).sort((a, b) => b.total - a.total)[0] || {
    rtg: 'N/A',
    modelo: 'N/A',
    total: 0,
  };

  const topRtgMedia = topRtgObj.total / numMeses;
  const topRtgDesvio = mediaFrotaMensal > 0 ? ((topRtgMedia - mediaFrotaMensal) / mediaFrotaMensal) * 100 : 0;

  // Update DOM elements
  const elTot = document.getElementById('kpi-total-geral');
  if (elTot) elTot.textContent = formatCurrency(totalGeral);

  const elTotFoot = document.getElementById('kpi-footer-total');
  if (elTotFoot) elTotFoot.textContent = `${filtered.length} ${state.lang === 'en' ? 'transactions' : 'lançamentos'}`;

  const elRtgTot = document.getElementById('kpi-rtg-total');
  if (elRtgTot) elRtgTot.textContent = formatCurrency(totalRTG);

  const elRtgPct = document.getElementById('kpi-rtg-pct');
  if (elRtgPct) elRtgPct.textContent = totalGeral > 0 ? `${((totalRTG / totalGeral) * 100).toFixed(1)}%` : '0%';

  const elRtgFoot = document.getElementById('kpi-rtg-footer');
  if (elRtgFoot) elRtgFoot.textContent = `${state.lang === 'en' ? 'Average' : 'Média'}: ${formatCurrency(mediaFrotaMensal)} ${t('perMonthSuffix')}`;

  // Horas Operadas Card
  const elHorasTot = document.getElementById('kpi-horas-total');
  if (elHorasTot) elHorasTot.textContent = `${formatNumber(totalHoras)} hrs`;

  const elHorasFoot = document.getElementById('kpi-horas-footer');
  if (elHorasFoot) {
    const avgHorasMes = totalHoras / 39 / numMeses;
    elHorasFoot.textContent = `${state.lang === 'en' ? 'Avg' : 'Média'}: ${formatNumber(avgHorasMes)} hrs ${t('perMonthSuffix')}`;
  }

  // Custo Médio por Hora Card
  const elCHora = document.getElementById('kpi-custohora-val');
  if (elCHora) elCHora.textContent = totalHoras > 0 ? `${formatCurrency(custoMedioHora)} ${t('perHourSuffix')}` : '—';

  const elCHoraFoot = document.getElementById('kpi-custohora-footer');
  if (elCHoraFoot) {
    elCHoraFoot.textContent = state.filters.mes === 'ALL'
      ? (state.lang === 'en' ? 'Fleet Realized Benchmark (8m)' : 'Benchmark Realizado (8m)')
      : (state.lang === 'en' ? `Cost/Hour in ${state.filters.mes}` : `Custo/Hora em ${state.filters.mes}`);
  }

  // Média Mensal Frota Card
  const elMedia = document.getElementById('kpi-media-mensal');
  if (elMedia) elMedia.textContent = formatCurrency(mediaFrotaMensal);
  const elMediaFoot = document.getElementById('kpi-media-mensal-footer');
  if (elMediaFoot) elMediaFoot.textContent = state.filters.mes === 'ALL' ? (state.lang === 'en' ? 'Benchmark (39 RTGs • 8 Months)' : 'Benchmark (39 RTGs • 8 Meses)') : (state.lang === 'en' ? `Fleet Average in ${state.filters.mes}` : `Média da Frota em ${state.filters.mes}`);

  // Kone
  const elKoneTot = document.getElementById('kpi-kone-total');
  if (elKoneTot) elKoneTot.textContent = formatCurrency(koneTotal);
  const elKonePct = document.getElementById('kpi-kone-pct');
  if (elKonePct) elKonePct.textContent = totalRTG > 0 ? `${((koneTotal / totalRTG) * 100).toFixed(1)}% RTGs` : '0%';
  const elKoneFoot = document.getElementById('kpi-kone-footer');
  if (elKoneFoot) elKoneFoot.textContent = `${state.lang === 'en' ? 'Average' : 'Média'}: ${formatCurrency(koneTotal / 16 / numMeses)} ${t('perMonthSuffix')}`;

  // Kalmar
  const elKalTot = document.getElementById('kpi-kalmar-total');
  if (elKalTot) elKalTot.textContent = formatCurrency(kalmarTotal);
  const elKalPct = document.getElementById('kpi-kalmar-pct');
  if (elKalPct) elKalPct.textContent = totalRTG > 0 ? `${((kalmarTotal / totalRTG) * 100).toFixed(1)}% RTGs` : '0%';
  const elKalFoot = document.getElementById('kpi-kalmar-footer');
  if (elKalFoot) elKalFoot.textContent = `${state.lang === 'en' ? 'Average' : 'Média'}: ${formatCurrency(kalmarTotal / 12 / numMeses)} ${t('perMonthSuffix')}`;

  // ZMPC
  const elZmpcTot = document.getElementById('kpi-zmpc-total');
  if (elZmpcTot) elZmpcTot.textContent = formatCurrency(zmpcTotal);
  const elZmpcPct = document.getElementById('kpi-zmpc-pct');
  if (elZmpcPct) elZmpcPct.textContent = totalRTG > 0 ? `${((zmpcTotal / totalRTG) * 100).toFixed(1)}% RTGs` : '0%';
  const elZmpcFoot = document.getElementById('kpi-zmpc-footer');
  if (elZmpcFoot) elZmpcFoot.textContent = `${state.lang === 'en' ? 'Average' : 'Média'}: ${formatCurrency(zmpcTotal / 11 / numMeses)} ${t('perMonthSuffix')}`;

  // Terceiros
  const elTerc = document.getElementById('kpi-terceiros-total');
  if (elTerc) elTerc.textContent = formatCurrency(totalTerceiros);
  const elTercFoot = document.getElementById('kpi-terceiros-footer');
  if (elTercFoot) elTercFoot.textContent = `${terceirosItems.length} ${state.lang === 'en' ? 'work orders / contracts' : 'ordens / contratos'}`;

  // Top RTG
  const elTopRtg = document.getElementById('kpi-top-rtg');
  if (elTopRtg) elTopRtg.textContent = topRtgObj.rtg;
  const elTopRtgFoot = document.getElementById('kpi-top-rtg-footer');
  if (elTopRtgFoot) elTopRtgFoot.textContent = `${state.lang === 'en' ? 'Average' : 'Média'}: ${formatCurrency(topRtgMedia)}${t('perMonthSuffix')} (${topRtgDesvio >= 0 ? '+' : ''}${topRtgDesvio.toFixed(0)}%)`;

  // 7 Family Cards calculation
  FAMILIES_DEF.forEach(fam => {
    // Filter items belonging to this family
    const famItems = rtgItems.filter((r) => r.rtgNum >= fam.min && r.rtgNum <= fam.max);
    const famCost = famItems.reduce((acc, curr) => acc + curr.valor, 0);
    const famPct = totalRTG > 0 ? (famCost / totalRTG) * 100 : 0;
    const famAvgMonthly = famCost / fam.units / numMeses;

    // Filter hours from rankingEquipamentos
    let famHours = 0.0;
    equipsRaw.forEach((eq) => {
      if (eq.rtgNum >= fam.min && eq.rtgNum <= fam.max) {
        if (state.filters.equipamento !== 'ALL' && (eq.tag || eq.equipamento) !== state.filters.equipamento) return;
        if (state.filters.modelo !== 'ALL' && eq.modelo !== state.filters.modelo) return;
        if (state.filters.mes === 'ALL') {
          famHours += eq.horas || 0.0;
        } else if (eq.horasMeses) {
          famHours += eq.horasMeses[state.filters.mes] || 0.0;
        }
      }
    });

    const famCostPerHour = famHours > 0 ? famCost / famHours : 0.0;

    const elVal = document.getElementById(`fam-val-${fam.id}`);
    if (elVal) elVal.textContent = formatCurrency(famCost);

    const elSub = document.getElementById(`fam-sub-${fam.id}`);
    if (elSub) {
      elSub.textContent = state.lang === 'en'
        ? `Avg: ${formatCurrency(famAvgMonthly)} / mo / RTG (${famPct.toFixed(1)}% RTGs)`
        : `Média: ${formatCurrency(famAvgMonthly)} / mês / RTG (${famPct.toFixed(1)}% RTGs)`;
    }

    const elHours = document.getElementById(`fam-hours-${fam.id}`);
    if (elHours) {
      const hStr = `${formatNumber(famHours)} hrs`;
      const cStr = famHours > 0 ? `${formatCurrency(famCostPerHour)} / h` : '— / h';
      elHours.innerHTML = `⏱️ ${hStr} &bull; ⚡ ${cStr}`;
    }
  });
}

// Update Status Bar
function updateStatusBar() {
  const totalSub = state.filtered.reduce((acc, curr) => acc + curr.valor, 0);
  const count = state.filtered.length;
  const totalAll = state.raw.lancamentos.length;

  const counterEl = document.getElementById('status-counter');
  if (counterEl) {
    const mesLabel = state.filters.mes === 'ALL'
      ? (state.lang === 'en' ? 'All 8 Months' : 'Todos os 8 Meses')
      : state.filters.mes;
    counterEl.textContent = state.lang === 'en'
      ? `Displaying ${count} of ${totalAll} entries [${mesLabel}] • Total Filtered: ${formatCurrency(totalSub)}`
      : `Exibindo ${count} de ${totalAll} lançamentos [${mesLabel}] • Total Filtrado: ${formatCurrency(totalSub)}`;
  }
}

// Initialize Charts
function initCharts() {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js offline.');
    return;
  }

  // 1. Chart Evolução Mensal
  try {
    const elEvol = document.getElementById('chart-evolucao-mensal');
    if (elEvol) {
      const ctxEvol = elEvol.getContext('2d');
      const meses = state.raw.resumo.meses || [];

      state.charts.evolucao = new Chart(ctxEvol, {
        type: 'bar',
        data: {
          labels: meses.map((m) => m.mesNome.split(' / ')[0]),
          datasets: [
            {
              label: 'KoneCranes',
              data: meses.map((m) => m.koneTotal),
              backgroundColor: 'rgba(56, 189, 248, 0.85)',
              borderRadius: 4,
            },
            {
              label: 'Kalmar',
              data: meses.map((m) => m.kalmarTotal),
              backgroundColor: 'rgba(251, 146, 60, 0.85)',
              borderRadius: 4,
            },
            {
              label: 'ZMPC',
              data: meses.map((m) => m.zmpcTotal),
              backgroundColor: 'rgba(52, 211, 153, 0.85)',
              borderRadius: 4,
            },
            {
              label: state.lang === 'en' ? 'Contractors / W900' : 'Terceiros / W900',
              data: meses.map((m) => m.totalTerceiros + m.totalW900),
              backgroundColor: 'rgba(168, 85, 247, 0.85)',
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: { color: '#94a3b8', font: { size: 12 } },
            },
            tooltip: {
              callbacks: {
                label: (ctx) => ` ${ctx.dataset.label}: ${formatCurrency(ctx.raw)}`,
              },
            },
          },
          scales: {
            x: {
              stacked: true,
              ticks: { color: '#94a3b8' },
              grid: { display: false },
            },
            y: {
              stacked: true,
              ticks: {
                callback: (v) => 'R$ ' + (v / 1000).toFixed(0) + 'k',
                color: '#94a3b8',
              },
              grid: { color: 'rgba(255,255,255,0.06)' },
            },
          },
        },
      });
    }
  } catch (err) {
    console.error('Erro chart-evolucao-mensal:', err);
  }

  // 2. Chart Modelos (Donut)
  try {
    const elModel = document.getElementById('chart-modelos');
    if (elModel) {
      const ctxModel = elModel.getContext('2d');
      const rtgItems = state.filtered.filter((r) => r.tipo === 'RTG');
      const kone = rtgItems.filter((r) => r.modelo === 'KoneCranes').reduce((a, b) => a + b.valor, 0);
      const kalmar = rtgItems.filter((r) => r.modelo === 'Kalmar').reduce((a, b) => a + b.valor, 0);
      const zmpc = rtgItems.filter((r) => r.modelo === 'ZMPC').reduce((a, b) => a + b.valor, 0);

      state.charts.model = new Chart(ctxModel, {
        type: 'doughnut',
        data: {
          labels: ['KoneCranes (16 RTGs)', 'Kalmar (12 RTGs)', 'ZMPC (11 RTGs)'],
          datasets: [
            {
              data: [kone, kalmar, zmpc],
              backgroundColor: [
                'rgba(56, 189, 248, 0.85)',
                'rgba(251, 146, 60, 0.85)',
                'rgba(52, 211, 153, 0.85)',
              ],
              borderColor: '#111827',
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: '#94a3b8', font: { size: 12 } },
            },
            tooltip: {
              callbacks: {
                label: (ctx) => {
                  const val = ctx.raw;
                  const total = kone + kalmar + zmpc;
                  const pct = total > 0 ? ((val / total) * 100).toFixed(1) : 0;
                  return ` ${ctx.label}: ${formatCurrency(val)} (${pct}%)`;
                },
              },
            },
          },
          cutout: '68%',
        },
      });
    }
  } catch (err) {
    console.error('Erro chart-modelos:', err);
  }

  // 3. Chart Equipamentos (Top 15 RTGs com Horas e Custo/h)
  try {
    const elEquip = document.getElementById('chart-equipamentos');
    if (elEquip) {
      const ctxEquip = elEquip.getContext('2d');
      const topEquips = getTopEquipmentsData();
      const numMeses = state.filters.mes === 'ALL' ? 8 : 1;

      state.charts.equip = new Chart(ctxEquip, {
        type: 'bar',
        data: {
          labels: topEquips.map((d) => d.rtg),
          datasets: [
            {
              label: state.lang === 'en' ? 'Total Cost (R$)' : 'Custo Total (R$)',
              data: topEquips.map((d) => d.total),
              backgroundColor: topEquips.map((d) =>
                d.modelo === 'KoneCranes'
                  ? 'rgba(56, 189, 248, 0.85)'
                  : d.modelo === 'Kalmar'
                  ? 'rgba(251, 146, 60, 0.85)'
                  : 'rgba(52, 211, 153, 0.85)'
              ),
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => {
                  const item = topEquips[ctx.dataIndex];
                  const val = ctx.raw;
                  const media = val / numMeses;
                  const hoursStr = item.horas > 0 ? `${formatNumber(item.horas)} hrs` : '0 hrs';
                  const chStr = item.custoHora > 0 ? `${formatCurrency(item.custoHora)}/h` : '—';
                  return [
                    ` ${t('totalSpent')}: ${formatCurrency(val)}`,
                    ` ${t('monthlyAvg')}: ${formatCurrency(media)} ${t('perMonthSuffix')}`,
                    ` ${t('hours8m')}: ${hoursStr} | ${t('costPerHour')}: ${chStr}`
                  ];
                },
              },
            },
          },
          scales: {
            y: {
              ticks: {
                callback: (v) => 'R$ ' + (v / 1000).toFixed(0) + 'k',
                color: '#94a3b8',
              },
              grid: { color: 'rgba(255,255,255,0.06)' },
            },
            x: {
              ticks: { color: '#94a3b8' },
              grid: { display: false },
            },
          },
        },
      });
    }
  } catch (err) {
    console.error('Erro chart-equipamentos:', err);
  }

  // 4. Chart Composição Geral
  try {
    const elComp = document.getElementById('chart-composicao-geral');
    if (elComp) {
      const ctxComp = elComp.getContext('2d');
      const rtgTotal = state.filtered.filter((r) => r.tipo === 'RTG').reduce((a, b) => a + b.valor, 0);
      const tercTotal = state.filtered.filter((r) => r.tipo === 'SERVICO_TERCEIRO').reduce((a, b) => a + b.valor, 0);
      const w900Total = state.filtered.filter((r) => r.tipo === 'OFICINA_W900').reduce((a, b) => a + b.valor, 0);
      const outrosTotal = state.filtered.filter((r) => r.tipo === 'APOIO_F316' || r.tipo === 'NAO_ALOCADO').reduce((a, b) => a + b.valor, 0);

      state.charts.composicao = new Chart(ctxComp, {
        type: 'bar',
        data: {
          labels: state.lang === 'en'
            ? ['RTG Fleet', 'Contractors', 'Workshop W900', 'Support / General']
            : ['Frota RTG', 'Serviços Terceiros', 'Oficina W900', 'Apoio / Geral'],
          datasets: [
            {
              label: state.lang === 'en' ? 'Total (R$)' : 'Total (R$)',
              data: [rtgTotal, tercTotal, w900Total, outrosTotal],
              backgroundColor: [
                'rgba(56, 189, 248, 0.85)',
                'rgba(251, 146, 60, 0.85)',
                'rgba(52, 211, 153, 0.85)',
                'rgba(168, 85, 247, 0.85)',
              ],
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => ` Valor: ${formatCurrency(ctx.raw)}`,
              },
            },
          },
          scales: {
            y: {
              ticks: {
                callback: (v) => 'R$ ' + (v / 1000).toFixed(0) + 'k',
                color: '#94a3b8',
              },
              grid: { color: 'rgba(255,255,255,0.06)' },
            },
            x: {
              ticks: { color: '#94a3b8' },
              grid: { display: false },
            },
          },
        },
      });
    }
  } catch (err) {
    console.error('Erro chart-composicao:', err);
  }
}

function getTopEquipmentsData() {
  const equipsRaw = state.raw.resumo.rankingEquipamentos || [];
  const map = {};
  state.filtered.filter((r) => r.tipo === 'RTG').forEach((r) => {
    const key = r.equipamento || r.tag;
    if (!map[key]) {
      const eqRaw = equipsRaw.find((x) => (x.tag || x.equipamento) === key) || {};
      map[key] = {
        rtg: r.rtgName || r.rtg || `RTG ${key}`,
        modelo: r.modelo,
        total: 0,
        horas: eqRaw.horas || 0.0,
        custoHora: eqRaw.custoHora || 0.0
      };
    }
    map[key].total += r.valor;
  });

  return Object.values(map).sort((a, b) => b.total - a.total).slice(0, 15);
}

function updateCharts() {
  if (state.charts.model) {
    const rtgItems = state.filtered.filter((r) => r.tipo === 'RTG');
    const kone = rtgItems.filter((r) => r.modelo === 'KoneCranes').reduce((a, b) => a + b.valor, 0);
    const kalmar = rtgItems.filter((r) => r.modelo === 'Kalmar').reduce((a, b) => a + b.valor, 0);
    const zmpc = rtgItems.filter((r) => r.modelo === 'ZMPC').reduce((a, b) => a + b.valor, 0);

    state.charts.model.data.datasets[0].data = [kone, kalmar, zmpc];
    state.charts.model.update();
  }

  if (state.charts.equip) {
    const topEquips = getTopEquipmentsData();
    state.charts.equip.data.labels = topEquips.map((d) => d.rtg);
    state.charts.equip.data.datasets[0].data = topEquips.map((d) => d.total);
    state.charts.equip.data.datasets[0].backgroundColor = topEquips.map((d) =>
      d.modelo === 'KoneCranes'
        ? 'rgba(56, 189, 248, 0.85)'
        : d.modelo === 'Kalmar'
        ? 'rgba(251, 146, 60, 0.85)'
        : 'rgba(52, 211, 153, 0.85)'
    );
    state.charts.equip.update();
  }

  if (state.charts.composicao) {
    const rtgTotal = state.filtered.filter((r) => r.tipo === 'RTG').reduce((a, b) => a + b.valor, 0);
    const tercTotal = state.filtered.filter((r) => r.tipo === 'SERVICO_TERCEIRO').reduce((a, b) => a + b.valor, 0);
    const w900Total = state.filtered.filter((r) => r.tipo === 'OFICINA_W900').reduce((a, b) => a + b.valor, 0);
    const outrosTotal = state.filtered.filter((r) => r.tipo === 'APOIO_F316' || r.tipo === 'NAO_ALOCADO').reduce((a, b) => a + b.valor, 0);

    state.charts.composicao.data.labels = state.lang === 'en'
      ? ['RTG Fleet', 'Contractors', 'Workshop W900', 'Support / General']
      : ['Frota RTG', 'Serviços Terceiros', 'Oficina W900', 'Apoio / Geral'];
    state.charts.composicao.data.datasets[0].data = [rtgTotal, tercTotal, w900Total, outrosTotal];
    state.charts.composicao.update();
  }
}

function updateChartsTheme() {
  Object.values(state.charts).forEach((c) => c && c.update && c.update());
}

// Tab Switching & Rendering
function renderCurrentTab() {
  const container = document.getElementById('tab-content-area');
  if (!container) return;

  if (state.currentTab === 'ranking') {
    renderRankingTable(container);
  } else if (state.currentTab === 'mensal') {
    renderMensalTable(container);
  } else if (state.currentTab === 'lancamentos') {
    renderLancamentosTable(container);
  } else if (state.currentTab === 'terceiros') {
    renderTerceirosTable(container);
  } else if (state.currentTab === 'w900') {
    renderW900Table(container);
  } else if (state.currentTab === 'materiais') {
    renderMateriaisTable(container);
  } else if (state.currentTab === 'diagnostico') {
    renderDiagnosticoTab(container);
  }
}

// 1. Render Ranking Table (Com Horímetros, Custo/Hora, Média Mensal e Desvio vs Frota)
function renderRankingTable(container) {
  const equipsRaw = state.raw.resumo.rankingEquipamentos || [];
  const map = {};

  state.filtered.filter((r) => r.tipo === 'RTG').forEach((r) => {
    const key = r.equipamento || r.tag;
    if (!map[key]) {
      const eqRaw = equipsRaw.find((x) => (x.tag || x.equipamento) === key) || {};
      
      let hVal = eqRaw.horas || 0.0;
      if (state.filters.mes !== 'ALL' && eqRaw.horasMeses) {
        hVal = eqRaw.horasMeses[state.filters.mes] || 0.0;
      }

      map[key] = {
        equipamento: key,
        tag: key,
        rtg: r.rtgName || r.rtg || `RTG ${key}`,
        rtgNum: r.rtgNum || (eqRaw.rtgNum || 0),
        modelo: r.modelo || eqRaw.modelo,
        total: 0,
        count: 0,
        horas: hVal,
        custoHora: eqRaw.custoHora || 0.0,
      };
    }
    map[key].total += r.valor;
    map[key].count += 1;
  });

  // Recompute custoHora for filtered period
  Object.values(map).forEach((eq) => {
    if (state.filters.mes !== 'ALL') {
      eq.custoHora = eq.horas > 0 ? eq.total / eq.horas : 0.0;
    }
  });

  const numMeses = state.filters.mes === 'ALL' ? 8 : 1;
  const totalFilteredRTG = Object.values(map).reduce((a, b) => a + b.total, 0);
  const mediaFrotaMensal = totalFilteredRTG / 39 / numMeses;
  const mesLabel = state.filters.mes === 'ALL'
    ? (state.lang === 'en' ? 'January to August 2026' : 'Janeiro a Agosto de 2026')
    : state.filters.mes;

  // Sorting
  const ranking = Object.values(map).sort((a, b) => {
    let col = state.sortRanking.column;
    let dir = state.sortRanking.direction === 'asc' ? 1 : -1;

    let valA = a[col];
    let valB = b[col];

    if (col === 'pos') {
      valA = a.total;
      valB = b.total;
      return (valB - valA) * dir;
    }
    if (col === 'mediaMensal') {
      valA = a.total / numMeses;
      valB = b.total / numMeses;
    }
    if (col === 'desvioFrotaPct') {
      valA = a.total / numMeses;
      valB = b.total / numMeses;
    }
    if (col === 'pct') {
      valA = a.total;
      valB = b.total;
    }
    if (col === 'avgItem') {
      valA = a.count > 0 ? a.total / a.count : 0;
      valB = b.count > 0 ? b.total / b.count : 0;
    }

    if (typeof valA === 'string') {
      return valA.localeCompare(valB) * dir;
    }
    return ((valA || 0) - (valB || 0)) * dir;
  });

  let html = `
    <div class="table-header">
      <div>
        <h4>${t('rankingTitle')} (${ranking.length} ${state.lang === 'en' ? 'Active RTGs' : 'Equipamentos Ativos'} [${mesLabel}])</h4>
        <small style="color: var(--text-muted);">${t('rankingSub')}</small>
      </div>
      <span class="badge badge-warning">${state.lang === 'en' ? 'Excludes Contractors & W900' : 'Exclui Terceiros e Oficina W900'}</span>
    </div>
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th onclick="handleSortRanking('pos')">#</th>
            <th onclick="handleSortRanking('rtg')">${state.lang === 'en' ? 'Equipment (RTG)' : 'Equipamento (RTG)'} ↕</th>
            <th onclick="handleSortRanking('tag')">Tag ↕</th>
            <th onclick="handleSortRanking('modelo')">${state.lang === 'en' ? 'Manufacturer' : 'Modelo'} ↕</th>
            <th onclick="handleSortRanking('horas')" style="text-align: right; background: rgba(56, 189, 248, 0.08); color: #38bdf8;">${t('hours8m')} ↕</th>
            <th onclick="handleSortRanking('custoHora')" style="text-align: right; background: rgba(245, 158, 11, 0.08); color: #f59e0b;">${t('costPerHour')} ↕</th>
            <th onclick="handleSortRanking('total')" style="text-align: right;">${t('totalSpent')} ↕</th>
            <th onclick="handleSortRanking('mediaMensal')" style="text-align: right; background: rgba(168, 85, 247, 0.08); color: #c084fc;">${t('monthlyAvg')} ↕</th>
            <th onclick="handleSortRanking('desvioFrotaPct')" style="text-align: center;">${t('deviationVsFleet')} ↕</th>
            <th onclick="handleSortRanking('pct')" style="text-align: right;">${t('pctFleet')} ↕</th>
            <th onclick="handleSortRanking('count')" style="text-align: center;">${t('partsCount')} ↕</th>
            <th onclick="handleSortRanking('avgItem')" style="text-align: right;">${t('avgCostPerPart')} ↕</th>
            <th style="text-align: center;">${t('historyAction')}</th>
          </tr>
        </thead>
        <tbody>
  `;

  ranking.forEach((eq, index) => {
    let badgeClass = 'badge-kone';
    if (eq.modelo === 'Kalmar') badgeClass = 'badge-kalmar';
    if (eq.modelo === 'ZMPC') badgeClass = 'badge-zmpc';

    const mediaMensal = eq.total / numMeses;
    const desvioFrotaPct = mediaFrotaMensal > 0 ? ((mediaMensal - mediaFrotaMensal) / mediaFrotaMensal) * 100 : 0;
    const pct = totalFilteredRTG > 0 ? (eq.total / totalFilteredRTG) * 100 : 0;
    const avgItem = eq.count > 0 ? eq.total / eq.count : 0;

    // Desvio Badge Styling
    let desvioBadge = '';
    if (desvioFrotaPct > 50) {
      desvioBadge = `<span class="badge badge-danger" title="> +50% vs fleet">+${desvioFrotaPct.toFixed(1)}%</span>`;
    } else if (desvioFrotaPct > 0) {
      desvioBadge = `<span class="badge badge-warning" title="Above fleet">+${desvioFrotaPct.toFixed(1)}%</span>`;
    } else {
      desvioBadge = `<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981;" title="Below fleet">${desvioFrotaPct.toFixed(1)}%</span>`;
    }

    // Cost/hour formatting with smart efficiency color badges
    let chHtml = `<span style="color: var(--text-muted);">—</span>`;
    if (eq.horas > 0 && eq.custoHora > 0) {
      if (eq.custoHora < 40) {
        chHtml = `<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; font-weight: 700;">R$ ${eq.custoHora.toFixed(2)}/h</span>`;
      } else if (eq.custoHora <= 100) {
        chHtml = `<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; font-weight: 700;">R$ ${eq.custoHora.toFixed(2)}/h</span>`;
      } else {
        chHtml = `<span class="badge badge-danger" style="font-weight: 800;">R$ ${eq.custoHora.toFixed(2)}/h</span>`;
      }
    }

    const hoursFmt = eq.horas > 0 ? `${formatNumber(eq.horas)} hrs` : `<span style="color: var(--text-muted); font-size: 11px;">${t('idleNotice')}</span>`;

    html += `
      <tr>
        <td><strong>#${index + 1}</strong></td>
        <td>
          <a href="javascript:void(0)" onclick="openRtgDetailModal('${eq.equipamento}')" style="color: var(--kone-blue); font-weight: 700; text-decoration: underline;">
            ${eq.rtg}
          </a>
        </td>
        <td>${eq.equipamento}</td>
        <td><span class="badge ${badgeClass}">${eq.modelo}</span></td>
        <td style="text-align: right; font-weight: 700; color: #38bdf8; background: rgba(56, 189, 248, 0.02);">
          ${hoursFmt}
        </td>
        <td style="text-align: right; background: rgba(245, 158, 11, 0.02);">
          ${chHtml}
        </td>
        <td style="text-align: right; font-weight: 700; color: ${mediaMensal >= 50000 ? 'var(--danger)' : 'var(--text-primary)'};">
          ${formatCurrency(eq.total)}
        </td>
        <td style="text-align: right; font-weight: 700; background: rgba(168, 85, 247, 0.03); color: #c084fc;">
          ${formatCurrency(mediaMensal)}${t('perMonthSuffix')}
        </td>
        <td style="text-align: center;">${desvioBadge}</td>
        <td style="text-align: right;">${pct.toFixed(2)}%</td>
        <td style="text-align: center;">${eq.count}</td>
        <td style="text-align: right;">${formatCurrency(avgItem)}</td>
        <td style="text-align: center;">
          <button class="btn btn-outline" style="padding: 4px 10px; font-size: 11px;" onclick="openRtgDetailModal('${eq.equipamento}')">
            ${t('viewMonthsBtn')}
          </button>
        </td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
}

window.handleSortRanking = (column) => {
  if (state.sortRanking.column === column) {
    state.sortRanking.direction = state.sortRanking.direction === 'asc' ? 'desc' : 'asc';
  } else {
    state.sortRanking.column = column;
    state.sortRanking.direction = 'desc';
  }
  renderCurrentTab();
};

// RTG Detail Modal Drilldown (Com Horímetros e Custo/Hora)
window.openRtgDetailModal = (tag) => {
  const equips = state.raw.resumo.rankingEquipamentos || [];
  const eq = equips.find((e) => (e.tag || e.equipamento) === tag);
  if (!eq) {
    alert(state.lang === 'en' ? 'Crane not found.' : 'Equipamento não encontrado.');
    return;
  }

  const modal = document.getElementById('rtg-modal');
  const container = document.getElementById('rtg-modal-content');
  if (!modal || !container) return;

  const mesesKeys = ['2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08'];
  const mesesNomes = state.lang === 'en'
    ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    : ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'];
  const mesesData = eq.meses || {};
  const mesesHoras = eq.horasMeses || {};
  const maxVal = Math.max(...mesesKeys.map((k) => mesesData[k] || 0), 1);

  let badgeClass = 'badge-kone';
  if (eq.modelo === 'Kalmar') badgeClass = 'badge-kalmar';
  if (eq.modelo === 'ZMPC') badgeClass = 'badge-zmpc';

  let desvioBadge = '';
  if (eq.desvioFrotaPct > 50) {
    desvioBadge = `<span class="badge badge-danger">+${eq.desvioFrotaPct.toFixed(1)}% vs Frota</span>`;
  } else if (eq.desvioFrotaPct > 0) {
    desvioBadge = `<span class="badge badge-warning">+${eq.desvioFrotaPct.toFixed(1)}% vs Frota</span>`;
  } else {
    desvioBadge = `<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981;">${eq.desvioFrotaPct.toFixed(1)}% vs Frota</span>`;
  }

  const hoursFmt = eq.horas > 0 ? `${formatNumber(eq.horas)} hrs` : (state.lang === 'en' ? '0 hrs (idle)' : '0 h (ocioso)');
  const chFmt = eq.custoHora > 0 ? `${formatCurrency(eq.custoHora)} / hr` : '—';

  let html = `
    <div style="margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <h2 style="color: var(--kone-blue); margin: 0;">${eq.rtg} (Tag ${eq.tag})</h2>
        <div>
          <span class="badge ${badgeClass}">${eq.modelo}</span>
          ${desvioBadge}
        </div>
      </div>
      <p style="color: var(--text-secondary); margin: 0; font-size: 13.5px;">
        ${t('modalSubtitle')}
      </p>
    </div>

    <!-- Mini KPI Cards (Grid de 6 Métricas incluindo Horímetro e R$/h) -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 10px; margin-bottom: 24px;">
      <div class="glass-panel" style="padding: 12px; text-align: center;">
        <div style="font-size: 10.5px; text-transform: uppercase; color: var(--text-muted);">${t('modalCost8m')}</div>
        <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-top: 4px;">${formatCurrency(eq.total)}</div>
      </div>
      <div class="glass-panel" style="padding: 12px; text-align: center; border-color: rgba(168, 85, 247, 0.3);">
        <div style="font-size: 10.5px; text-transform: uppercase; color: #c084fc;">${t('modalMonthlyAvg')}</div>
        <div style="font-size: 16px; font-weight: 700; color: #c084fc; margin-top: 4px;">${formatCurrency(eq.mediaMensal)}/mês</div>
      </div>
      <div class="glass-panel" style="padding: 12px; text-align: center; border-color: rgba(56, 189, 248, 0.3);">
        <div style="font-size: 10.5px; text-transform: uppercase; color: #38bdf8;">${t('modalHours')}</div>
        <div style="font-size: 16px; font-weight: 700; color: #38bdf8; margin-top: 4px;">${hoursFmt}</div>
      </div>
      <div class="glass-panel" style="padding: 12px; text-align: center; border-color: rgba(245, 158, 11, 0.3);">
        <div style="font-size: 10.5px; text-transform: uppercase; color: #f59e0b;">${t('modalCostHour')}</div>
        <div style="font-size: 16px; font-weight: 700; color: #f59e0b; margin-top: 4px;">${chFmt}</div>
      </div>
      <div class="glass-panel" style="padding: 12px; text-align: center;">
        <div style="font-size: 10.5px; text-transform: uppercase; color: var(--text-muted);">${t('modalPartsCount')}</div>
        <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-top: 4px;">${eq.count} itens</div>
      </div>
      <div class="glass-panel" style="padding: 12px; text-align: center;">
        <div style="font-size: 10.5px; text-transform: uppercase; color: var(--text-muted);">${t('modalAvgTicket')}</div>
        <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-top: 4px;">${formatCurrency(eq.ticketMedio)}</div>
      </div>
    </div>

    <!-- Monthly Evolution Bar Chart (HTML5) -->
    <h4 style="margin-bottom: 12px; color: var(--text-primary);">📅 ${t('modalCurveTitle')} ${eq.rtg}:</h4>
    <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 16px; margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; height: 160px; gap: 8px; padding-top: 20px;">
  `;

  mesesKeys.forEach((mKey, idx) => {
    const val = mesesData[mKey] || 0;
    const mHoras = mesesHoras[mKey] || 0;
    const heightPct = (val / maxVal) * 100;
    const isPeak = val === maxVal && val > 0;
    const tip = `${mesesNomes[idx]}/2026: ${formatCurrency(val)} • Horas: ${mHoras > 0 ? formatNumber(mHoras) + ' hrs' : '0'}`;

    html += `
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end;">
        <div style="font-size: 10px; color: ${isPeak ? 'var(--danger)' : 'var(--text-muted)'}; margin-bottom: 4px; font-weight: ${isPeak ? '700' : '400'};">
          ${val > 0 ? (val >= 1000 ? (val / 1000).toFixed(0) + 'k' : val.toFixed(0)) : '0'}
        </div>
        <div style="width: 100%; max-width: 32px; height: ${Math.max(4, heightPct)}%; background: ${isPeak ? 'linear-gradient(to top, #ef4444, #f87171)' : 'linear-gradient(to top, #0284c7, #38bdf8)'}; border-radius: 4px 4px 0 0;" title="${tip}"></div>
        <div style="font-size: 11px; font-weight: 600; color: var(--text-secondary); margin-top: 8px;">${mesesNomes[idx]}</div>
      </div>
    `;
  });

  html += `
      </div>
    </div>

    <!-- Top Components for this RTG -->
    <h4 style="margin-bottom: 12px; color: var(--text-primary);">🔩 ${t('modalTopPartsTitle')} ${eq.rtg}:</h4>
    <div class="table-responsive" style="margin-bottom: 20px;">
      <table class="data-table">
        <thead>
          <tr>
            <th>${state.lang === 'en' ? 'Component / Description' : 'Componente / Descrição'}</th>
            <th style="text-align: right;">${state.lang === 'en' ? 'Total Spent (R$)' : 'Total Aplicado (R$)'}</th>
            <th style="text-align: right;">% RTG</th>
          </tr>
        </thead>
        <tbody>
  `;

  const topMats = eq.topMateriais || [];
  if (topMats.length === 0) {
    html += `<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 20px;">${state.lang === 'en' ? 'No specific part mapped.' : 'Nenhum componente específico mapeado.'}</td></tr>`;
  } else {
    topMats.forEach((mat) => {
      const matPct = eq.total > 0 ? (mat.valor / eq.total) * 100 : 0;
      html += `
        <tr>
          <td><strong>${mat.material}</strong></td>
          <td style="text-align: right; font-weight: 700; color: var(--warning);">${formatCurrency(mat.valor)}</td>
          <td style="text-align: right;">${matPct.toFixed(1)}%</td>
        </tr>
      `;
    });
  }

  html += `
        </tbody>
      </table>
    </div>

    <div style="text-align: right; margin-top: 20px;">
      <button class="btn btn-secondary" onclick="document.getElementById('rtg-modal').style.display='none'">${t('modalCloseBtn')}</button>
    </div>
  `;

  container.innerHTML = html;
  modal.style.display = 'flex';
};

// 2. Render Comparativo Mensal Table
function renderMensalTable(container) {
  const meses = state.raw.resumo.meses || [];
  const grandTotal = meses.reduce((a, b) => a + b.totalGeral, 0);

  let html = `
    <div class="table-header">
      <h4>${state.lang === 'en' ? 'Monthly Cost Comparison (January to August 2026)' : 'Comparativo Mensal de Custos (Janeiro a Agosto de 2026)'}</h4>
      <span class="badge badge-kone">${state.lang === 'en' ? '8 Consolidated Months' : '8 Meses Consolidados'}</span>
    </div>
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th>${state.lang === 'en' ? 'Month / Year' : 'Mês / Ano'}</th>
            <th style="text-align: right;">${state.lang === 'en' ? 'Total (R$)' : 'Total Geral (R$)'}</th>
            <th style="text-align: right;">${state.lang === 'en' ? 'RTG Fleet (R$)' : 'Frota RTG (R$)'}</th>
            <th style="text-align: right;">KoneCranes (R$)</th>
            <th style="text-align: right;">Kalmar (R$)</th>
            <th style="text-align: right;">ZMPC (R$)</th>
            <th style="text-align: right;">${state.lang === 'en' ? 'Contractors (R$)' : 'Terceiros (R$)'}</th>
            <th style="text-align: right;">${state.lang === 'en' ? 'Workshop W900 (R$)' : 'Oficina W900 (R$)'}</th>
            <th style="text-align: center;">${state.lang === 'en' ? 'Items' : 'Qtd Lçtos'}</th>
            <th style="text-align: center;">${state.lang === 'en' ? 'Filter' : 'Filtrar'}</th>
          </tr>
        </thead>
        <tbody>
  `;

  meses.forEach((m) => {
    html += `
      <tr>
        <td><strong>${m.mesNome}</strong></td>
        <td style="text-align: right; font-weight: 700; color: var(--text-primary);">${formatCurrency(m.totalGeral)}</td>
        <td style="text-align: right; font-weight: 600; color: var(--kone-blue);">${formatCurrency(m.totalRTG)}</td>
        <td style="text-align: right;">${formatCurrency(m.koneTotal)}</td>
        <td style="text-align: right;">${formatCurrency(m.kalmarTotal)}</td>
        <td style="text-align: right;">${formatCurrency(m.zmpcTotal)}</td>
        <td style="text-align: right; color: var(--kalmar-orange);">${formatCurrency(m.totalTerceiros)}</td>
        <td style="text-align: right;">${formatCurrency(m.totalW900 + m.totalOutros)}</td>
        <td style="text-align: center;">${m.count}</td>
        <td style="text-align: center;">
          <button class="btn btn-outline" style="padding: 3px 8px; font-size: 11px;" onclick="filterByMonth('${m.anoMes}')">
            ${state.lang === 'en' ? 'Filter Month' : 'Filtrar Mês'}
          </button>
        </td>
      </tr>
    `;
  });

  html += `
        </tbody>
        <tfoot>
          <tr style="background: rgba(255, 255, 255, 0.05); font-weight: bold;">
            <td>${state.lang === 'en' ? 'CONSOLIDATED TOTAL' : 'TOTAL ACUMULADO'}</td>
            <td style="text-align: right; color: var(--kone-blue);">${formatCurrency(grandTotal)}</td>
            <td style="text-align: right;">${formatCurrency(meses.reduce((a, b) => a + b.totalRTG, 0))}</td>
            <td style="text-align: right; color: var(--kone-blue);">${formatCurrency(meses.reduce((a, b) => a + b.koneTotal, 0))}</td>
            <td style="text-align: right; color: var(--kalmar-orange);">${formatCurrency(meses.reduce((a, b) => a + b.kalmarTotal, 0))}</td>
            <td style="text-align: right; color: var(--zmpc-green);">${formatCurrency(meses.reduce((a, b) => a + b.zmpcTotal, 0))}</td>
            <td style="text-align: right;">${formatCurrency(meses.reduce((a, b) => a + b.totalTerceiros, 0))}</td>
            <td style="text-align: right;">${formatCurrency(meses.reduce((a, b) => a + b.totalW900 + b.totalOutros, 0))}</td>
            <td style="text-align: center;">${meses.reduce((a, b) => a + b.count, 0)}</td>
            <td style="text-align: center;">
              <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 11px;" onclick="filterByMonth('ALL')">${state.lang === 'en' ? 'All Months' : 'Todos'}</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  `;

  container.innerHTML = html;
}

window.filterByMonth = (anoMes) => {
  const mesFilter = document.getElementById('filter-mes');
  if (mesFilter) mesFilter.value = anoMes;
  state.filters.mes = anoMes;
  applyFilters();
};

// 3. Render Lançamentos Table
function renderLancamentosTable(container) {
  const total = state.filtered.length;
  const startIdx = (state.pagination.page - 1) * state.pagination.pageSize;
  const pageItems = state.filtered.slice(startIdx, startIdx + state.pagination.pageSize);

  let html = `
    <div class="table-header">
      <h4>${state.lang === 'en' ? 'All Registered Transactions' : 'Todos os Lançamentos Registrados'} (${total} ${state.lang === 'en' ? 'items in current filter' : 'itens no filtro atual'})</h4>
      <div>
        <span class="badge badge-kone">${state.lang === 'en' ? 'Page' : 'Página'} ${state.pagination.page} ${state.lang === 'en' ? 'of' : 'de'} ${Math.ceil(total / state.pagination.pageSize) || 1}</span>
      </div>
    </div>
    <div class="table-responsive">
      <table class="data-table" id="table-lancamentos">
        <thead>
          <tr>
            <th onclick="handleSort('data')">${state.lang === 'en' ? 'Date' : 'Data'} ↕</th>
            <th onclick="handleSort('anoMes')">${state.lang === 'en' ? 'Month' : 'Mês'} ↕</th>
            <th onclick="handleSort('tipo')">${state.lang === 'en' ? 'Category' : 'Categoria'} ↕</th>
            <th onclick="handleSort('equipamento')">${state.lang === 'en' ? 'Equipment / Tag' : 'Equipamento / Tag'} ↕</th>
            <th onclick="handleSort('modelo')">${state.lang === 'en' ? 'Model' : 'Modelo'} ↕</th>
            <th onclick="handleSort('descricao')">${state.lang === 'en' ? 'Material / Supplier / Description' : 'Material / Prestador / Descrição'} ↕</th>
            <th onclick="handleSort('natureza')">${state.lang === 'en' ? 'Nature' : 'Natureza'} ↕</th>
            <th onclick="handleSort('valor')" style="text-align: right;">${state.lang === 'en' ? 'Amount (R$)' : 'Valor (R$)'} ↕</th>
          </tr>
        </thead>
        <tbody>
  `;

  if (pageItems.length === 0) {
    html += `<tr><td colspan="8" style="text-align: center; padding: 40px; color: var(--text-muted);">${state.lang === 'en' ? 'No transactions found with selected filters.' : 'Nenhum lançamento encontrado com os filtros selecionados.'}</td></tr>`;
  } else {
    pageItems.forEach((r) => {
      let badgeClass = 'badge-kone';
      if (r.modelo === 'Kalmar') badgeClass = 'badge-kalmar';
      if (r.modelo === 'ZMPC') badgeClass = 'badge-zmpc';
      if (r.tipo === 'SERVICO_TERCEIRO') badgeClass = 'badge-warning';

      html += `
        <tr>
          <td>${r.data}</td>
          <td><span class="badge" style="background: rgba(255,255,255,0.06);">${r.anoMes}</span></td>
          <td><span class="badge ${badgeClass}">${r.categoria || r.tipo}</span></td>
          <td><strong>${r.rtgName || r.rtg || r.equipamento}</strong></td>
          <td>${r.modelo}</td>
          <td>${r.descricao}</td>
          <td><small style="color: var(--text-muted);">${r.natureza || '—'}</small></td>
          <td style="text-align: right; font-weight: 700; color: var(--text-primary);">${formatCurrency(r.valor)}</td>
        </tr>
      `;
    });
  }

  html += `
        </tbody>
      </table>
    </div>
    ${renderPaginationControls(total)}
  `;

  container.innerHTML = html;
}

// 4. Render Serviços de Terceiros Table
function renderTerceirosTable(container) {
  const terceiros = state.raw.resumo.servicosTerceiros || [];
  const total = terceiros.reduce((a, b) => a + b.total, 0);

  let html = `
    <div class="table-header">
      <div>
        <h4>${state.lang === 'en' ? 'Specialized Contractor & External Services Breakdown' : 'Mapeamento de Contratos e Serviços de Terceiros Especializados'}</h4>
        <small style="color: var(--text-muted);">${state.lang === 'en' ? 'Total Contractors Jan-Aug 2026' : 'Total Contratado Jan-Ago/2026'}: <strong>${formatCurrency(total)}</strong></small>
      </div>
      <span class="badge badge-kalmar">${terceiros.length} ${state.lang === 'en' ? 'Suppliers' : 'Prestadores'}</span>
    </div>
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>${state.lang === 'en' ? 'Contractor / Supplier' : 'Fornecedor / Razão Social'}</th>
            <th style="text-align: right;">${state.lang === 'en' ? 'Total (R$)' : 'Total Gasto (R$)'}</th>
            <th style="text-align: center;">${state.lang === 'en' ? 'Orders Count' : 'Qtd Lançamentos'}</th>
            <th style="text-align: right;">${state.lang === 'en' ? 'Avg Ticket (R$)' : 'Ticket Médio (R$)'}</th>
            <th style="text-align: right;">% Terceiros</th>
            <th style="text-align: right;">% Geral</th>
          </tr>
        </thead>
        <tbody>
  `;

  terceiros.forEach((tItem, idx) => {
    const avgTicket = tItem.count > 0 ? tItem.total / tItem.count : 0;
    html += `
      <tr>
        <td><strong>#${idx + 1}</strong></td>
        <td><strong>${tItem.fornecedor}</strong></td>
        <td style="text-align: right; font-weight: 700; color: var(--kalmar-orange);">${formatCurrency(tItem.total)}</td>
        <td style="text-align: center;">${tItem.count}</td>
        <td style="text-align: right;">${formatCurrency(avgTicket)}</td>
        <td style="text-align: right; font-weight: 600;">${tItem.percentual.toFixed(2)}%</td>
        <td style="text-align: right;">${tItem.percentualGeral.toFixed(2)}%</td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
}

// 5. Render Oficina W900 Table
function renderW900Table(container) {
  const w900 = state.raw.resumo.w900Itens || [];
  const total = w900.reduce((a, b) => a + b.valor, 0);

  let html = `
    <div class="table-header">
      <div>
        <h4>${state.lang === 'en' ? 'Workshop W900 (Support Supplies & Consumables)' : 'Lançamentos Apropriados na Oficina Geral W900'}</h4>
        <small style="color: var(--text-muted);">${state.lang === 'en' ? 'Total Workshop W900' : 'Total Oficina'}: <strong>${formatCurrency(total)}</strong></small>
      </div>
      <span class="badge badge-warning">${w900.length} ${state.lang === 'en' ? 'Items' : 'Itens'}</span>
    </div>
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th>${state.lang === 'en' ? 'Date' : 'Data'}</th>
            <th>${state.lang === 'en' ? 'Month' : 'Mês'}</th>
            <th>${state.lang === 'en' ? 'Description / Material' : 'Descrição / Material'}</th>
            <th style="text-align: right;">${state.lang === 'en' ? 'Amount (R$)' : 'Valor (R$)'}</th>
          </tr>
        </thead>
        <tbody>
  `;

  if (w900.length === 0) {
    html += `<tr><td colspan="4" style="text-align: center; padding: 20px; color: var(--text-muted);">${state.lang === 'en' ? 'No items recorded in W900.' : 'Nenhum lançamento registrado na W900.'}</td></tr>`;
  } else {
    w900.forEach((w) => {
      html += `
        <tr>
          <td>${w.data}</td>
          <td><span class="badge" style="background: rgba(255,255,255,0.06);">${w.anoMes}</span></td>
          <td><strong>${w.descricao}</strong></td>
          <td style="text-align: right; font-weight: 700; color: var(--text-primary);">${formatCurrency(w.valor)}</td>
        </tr>
      `;
    });
  }

  html += `
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
}

// 6. Render Top Materiais Table
function renderMateriaisTable(container) {
  const mats = state.raw.resumo.topMateriais || [];

  let html = `
    <div class="table-header">
      <div>
        <h4>${state.lang === 'en' ? 'Top 50 Most Applied Parts & Components on RTGs' : 'Top 50 Peças e Componentes Mais Requisitados na Frota RTG'}</h4>
        <small style="color: var(--text-muted);">${state.lang === 'en' ? 'Highest financial impact spare parts (Jan to Aug 2026)' : 'Materiais de maior impacto orçamentário acumulado nos 8 meses'}</small>
      </div>
      <span class="badge badge-kone">50 ${state.lang === 'en' ? 'Components' : 'Componentes'}</span>
    </div>
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>${state.lang === 'en' ? 'Part Description' : 'Descrição da Peça / Código'}</th>
            <th style="text-align: right;">${state.lang === 'en' ? 'Total Spent (R$)' : 'Total Aplicado (R$)'}</th>
            <th style="text-align: center;">${state.lang === 'en' ? 'Units Applied' : 'Qtd Itens'}</th>
            <th style="text-align: center;">${state.lang === 'en' ? 'RTGs Impacted' : 'RTGs Aplicados'}</th>
            <th style="text-align: right;">${state.lang === 'en' ? 'Avg Cost / Part' : 'Preço Médio / Item'}</th>
          </tr>
        </thead>
        <tbody>
  `;

  mats.forEach((m, idx) => {
    html += `
      <tr>
        <td><strong>#${idx + 1}</strong></td>
        <td><strong>${m.descricao}</strong></td>
        <td style="text-align: right; font-weight: 700; color: var(--warning);">${formatCurrency(m.total)}</td>
        <td style="text-align: center;">${m.count}</td>
        <td style="text-align: center;"><span class="badge badge-kone">${m.rtgCount} RTGs</span></td>
        <td style="text-align: right;">${formatCurrency(m.ticketMedio)}</td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
}

// 7. Render Diagnóstico Tab
function renderDiagnosticoTab(container) {
  if (state.lang === 'en') {
    container.innerHTML = `
      <div style="padding: 10px 0;">
        <h3 style="margin-bottom: 12px; color: var(--kone-blue);">Strategic Fleet Audit & Unit Cost Diagnosis • Jan to Aug 2026</h3>
        <p style="color: var(--text-secondary); margin-bottom: 24px; line-height: 1.6;">
          Detailed evaluation of 6,985 entries totaling <strong>R$ 11,634,334.24</strong> with <strong>169,263 operating hours</strong> and unit cost per operating hour.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 24px;">
          <div class="glass-panel" style="padding: 20px; border-left: 4px solid var(--kone-blue);">
            <h4 style="color: var(--kone-blue); margin-bottom: 10px;">🏗️ 1. Empirical Terminal Proof: Electric vs Diesel</h4>
            <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">
              <strong>RTG 01 to 03 (Electrified Kone 2001)</strong> operate at <strong>R$ 48.50 / hour</strong> with +35% availability vs identical diesel units <strong>RTG 04 to 06 (R$ 86.05 / hour)</strong>.
            </p>
          </div>

          <div class="glass-panel" style="padding: 20px; border-left: 4px solid var(--danger);">
            <h4 style="color: var(--danger); margin-bottom: 10px;">🚨 2. Top Critical Cost Offenders</h4>
            <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">
              <strong>KoneCranes 2008 (RTG 11-14)</strong> peak at <strong>R$ 162.93 / hr</strong> and <strong>KoneCranes 2011 (RTG 15-20)</strong> at <strong>R$ 147.16 / hr</strong>. Together they represent the primary budget drain.
            </p>
          </div>

          <div class="glass-panel" style="padding: 20px; border-left: 4px solid var(--zmpc-green);">
            <h4 style="color: var(--zmpc-green); margin-bottom: 10px;">💡 3. New Fleet Benchmark: ZPMC 2023</h4>
            <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">
              The 11 new ZPMC cranes logged 59,101 operating hours (avg 672 hrs/mo per crane) at just <strong>R$ 22.90 / operating hour</strong>.
            </p>
          </div>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div style="padding: 10px 0;">
        <h3 style="margin-bottom: 12px; color: var(--kone-blue);">Auditoria Estratégica Multimensal • Base V2 (Janeiro a Agosto de 2026)</h3>
        <p style="color: var(--text-secondary); margin-bottom: 24px; line-height: 1.6;">
          Análise detalhada de 6.985 registros totalizando <strong>R$ 11.634.334,24</strong>, <strong>169.263 horas operadas</strong> e cálculo do custo unitário por hora trabalhada.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 24px;">
          <div class="glass-panel" style="padding: 20px; border-left: 4px solid var(--kone-blue);">
            <h4 style="color: var(--kone-blue); margin-bottom: 10px;">🏗️ 1. Prova Empírica no Terminal: E-RTG vs Diesel</h4>
            <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">
              Os <strong>RTGs 01 a 03 (Eletrificados Kone 2001)</strong> operam a <strong>R$ 48,50 / hora</strong> com +35% de disponibilidade frente aos irmãos a diesel <strong>RTGs 04 a 06 (R$ 86,05 / hora)</strong>.
            </p>
          </div>

          <div class="glass-panel" style="padding: 20px; border-left: 4px solid var(--danger);">
            <h4 style="color: var(--danger); margin-bottom: 10px;">🚨 2. Top Ofensores Críticos</h4>
            <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">
              Os <strong>KoneCranes 2008 (RTG 11-14)</strong> custam <strong>R$ 162,93 / hr</strong> e os <strong>KoneCranes 2011 (RTG 15-20)</strong> custam <strong>R$ 147,16 / hr</strong>, sendo os principais candidatos a retrofit e substituição.
            </p>
          </div>

          <div class="glass-panel" style="padding: 20px; border-left: 4px solid var(--zmpc-green);">
            <h4 style="color: var(--zmpc-green); margin-bottom: 10px;">💡 3. Benchmark de Frota Nova: ZPMC 2023</h4>
            <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">
              A frota de 11 guindastes ZPMC operou 59.101 horas (672 h/mês por guindaste) com um custo unitário direto de apenas <strong>R$ 22,90 / hora operada</strong>.
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

// Pagination Controls
function renderPaginationControls(totalItems) {
  const totalPages = Math.ceil(totalItems / state.pagination.pageSize) || 1;
  const currPage = state.pagination.page;

  return `
    <div class="pagination-container">
      <div>${state.lang === 'en' ? 'Showing' : 'Mostrando'} ${totalItems === 0 ? 0 : (currPage - 1) * state.pagination.pageSize + 1} ${state.lang === 'en' ? 'to' : 'até'} ${Math.min(
    currPage * state.pagination.pageSize,
    totalItems
  )} ${state.lang === 'en' ? 'of' : 'de'} ${totalItems} ${state.lang === 'en' ? 'entries' : 'registros'}</div>
      <div class="pagination-controls">
        <button class="page-btn" ${currPage === 1 ? 'disabled' : ''} onclick="goToPage(1)">«</button>
        <button class="page-btn" ${currPage === 1 ? 'disabled' : ''} onclick="goToPage(${currPage - 1})">‹</button>
        <button class="page-btn active">${currPage}</button>
        <button class="page-btn" ${currPage >= totalPages ? 'disabled' : ''} onclick="goToPage(${currPage + 1})">›</button>
        <button class="page-btn" ${currPage >= totalPages ? 'disabled' : ''} onclick="goToPage(${totalPages})">»</button>
      </div>
    </div>
  `;
}

window.goToPage = (page) => {
  state.pagination.page = page;
  renderCurrentTab();
};

window.handleSort = (column) => {
  if (state.sort.column === column) {
    state.sort.direction = state.sort.direction === 'asc' ? 'desc' : 'asc';
  } else {
    state.sort.column = column;
    state.sort.direction = 'desc';
  }

  state.filtered.sort((a, b) => {
    let valA = a[column];
    let valB = b[column];

    if (typeof valA === 'string') valA = valA.toLowerCase();
    if (typeof valB === 'string') valB = valB.toLowerCase();

    if (valA < valB) return state.sort.direction === 'asc' ? -1 : 1;
    if (valA > valB) return state.sort.direction === 'asc' ? 1 : -1;
    return 0;
  });

  renderCurrentTab();
};

// Export to CSV (Com Horas e Custo/h)
function exportToCSV() {
  if (state.filtered.length === 0) {
    alert(state.lang === 'en' ? 'No data to export.' : 'Nenhum dado para exportar.');
    return;
  }

  let csv = 'Data;AnoMes;Categoria;Equipamento;Modelo;Fornecedor;Valor;Descricao;Natureza\r\n';
  state.filtered.forEach((r) => {
    const cleanDesc = (r.descricao || '').replace(/;/g, ' ').replace(/"/g, '""');
    csv += `${r.data};${r.anoMes};${r.categoria};${r.equipamento};${r.modelo};${r.fornecedor};${r.valor.toFixed(2).replace('.', ',')};"${cleanDesc}";${r.natureza}\r\n`;
  });

  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Relatorio_Custos_RTG_V2_${state.filters.mes}_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Export to Excel (Com Horas e Custo/h no resumo)
function exportToExcel() {
  if (typeof XLSX === 'undefined') {
    alert('Biblioteca XLSX carregando... utilize a exportação CSV.');
    return;
  }

  const exportData = state.filtered.map((r) => ({
    Data: r.data,
    'Mês': r.anoMes,
    Categoria: r.categoria,
    Equipamento: r.equipamento,
    RTG: r.rtgName || r.rtg || r.equipamento,
    Modelo: r.modelo,
    Fornecedor: r.fornecedor,
    'Valor (R$)': r.valor,
    'Descrição / Material': r.descricao,
    Natureza: r.natureza,
  }));

  const ws = XLSX.utils.json_to_sheet(exportData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Lancamentos_Filtrados');

  // Summary RTGs com Horímetro e Custo por Hora
  if (state.raw.resumo && state.raw.resumo.rankingEquipamentos) {
    const summaryData = state.raw.resumo.rankingEquipamentos.map((e) => ({
      RTG: e.rtg,
      Tag: e.tag || e.equipamento,
      Modelo: e.modelo,
      'Horas Operadas (8m)': e.horas || 0,
      'Custo por Hora (R$/h)': e.custoHora || 0,
      'Custo Total 8 Meses (R$)': e.total,
      'Média Mensal (R$/mês)': e.mediaMensal,
      'Desvio vs Frota (%)': e.desvioFrotaPct,
      'Percentual Frota (%)': e.percentualRTG || e.percentual,
      'Qtd Peças': e.count,
      'Ticket Médio / Peça (R$)': e.ticketMedio,
      'Principal Componente': e.topMaterial,
      'Valor Principal Peça (R$)': e.topMaterialValor,
    }));
    const wsSum = XLSX.utils.json_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(wb, wsSum, 'Resumo_RTGs_Horas_Custos');
  }

  // Monthly Summary
  if (state.raw.resumo && state.raw.resumo.meses) {
    const mesData = state.raw.resumo.meses.map((m) => ({
      'Mês': m.mesNome,
      'Ano-Mês': m.anoMes,
      'Total Geral (R$)': m.totalGeral,
      'Frota RTGs (R$)': m.totalRTG,
      'KoneCranes (R$)': m.koneTotal,
      'Kalmar (R$)': m.kalmarTotal,
      'ZMPC (R$)': m.zmpcTotal,
      'Terceiros (R$)': m.totalTerceiros,
      'Oficina W900 / Geral (R$)': m.totalW900 + m.totalOutros,
      'Qtd Itens': m.count,
    }));
    const wsMes = XLSX.utils.json_to_sheet(mesData);
    XLSX.utils.book_append_sheet(wb, wsMes, 'Resumo_Mensal');
  }

  XLSX.writeFile(wb, `Dashboard_Custos_RTG_V2_Horas_${state.filters.mes}.xlsx`);
}