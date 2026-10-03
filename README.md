# 📊 Gestão Estratégica de Custos RTG • TCP

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?style=for-the-badge&logo=github)](https://andremelloo.github.io/Custo-RTG/)
[![Status](https://img.shields.io/badge/Status-Produção%20Ativa-success?style=for-the-badge)](https://andremelloo.github.io/Custo-RTG/)
[![Versão](https://img.shields.io/badge/Versão-2.1%20(7%20Famílias%20&%20Horímetros)-blue?style=for-the-badge)](https://andremelloo.github.io/Custo-RTG/)
[![Frota](https://img.shields.io/badge/Frota%20RTG-39%20Guindastes-orange?style=for-the-badge)](https://andremelloo.github.io/Custo-RTG/)
[![Período](https://img.shields.io/badge/Período-Jan%20a%20Ago%2F2026%20(8%20Meses)-purple?style=for-the-badge)](https://andremelloo.github.io/Custo-RTG/)

> **Aplicação Web Interativa para Auditoria Orçamentária, Benchmark por Horímetro e Gestão de Ativos da Frota de Guindastes RTG do Terminal de Contêineres de Paranaguá (TCP).**

🔗 **Acesse o Dashboard Online:** [https://andremelloo.github.io/Custo-RTG/](https://andremelloo.github.io/Custo-RTG/)

---

## 📌 Visão Geral dos Indicadores Globais (Jan a Ago/2026)

- **Total Geral Auditado:** R$ 11.634.334,24 (6.985 lançamentos)
- **Custo Estrito Frota RTG:** R$ 10.847.678,44 (93,2% dos custos totais)
- **Horas Operadas Acumuladas:** 169.263 horas (horímetros reais)
- **Custo Médio Unitário Horário:** R$ 64,09 / hora
- **Média Mensal por RTG:** R$ 34.768,20 / mês
- **Serviços Terceiros:** R$ 81.418,75 (16 contratos)
- **Apoio & Oficina W900:** R$ 705.237,05

---

## 🏗️ Lotes Tecnológicos & Famílias de RTG

O dashboard segmenta os 40 equipamentos da frota (39 operacionais ativos) em 7 Lotes Tecnológicos, calculando dinamicamente custo, intensidade operacional e custo horário:

| Lote / Família | Qtd | Total Gasto (8m) | Horas (8m) | Custo Unitário (R$/h) | Média Mensal / RTG | % da Frota |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **RTG 01 ao 03** (⚡ Eletrificado) | 3 un | **R$ 609.357,13** | 12.564 hrs | **R$ 48,50 / h** | R$ 25.389,88 / mês | 5,6% |
| **RTG 04 ao 06** (⛽ Diesel 2001) | 3 un | **R$ 800.696,92** | 9.305 hrs | **R$ 86,05 / h** | R$ 33.362,37 / mês | 7,4% |
| **RTG 08 ao 10** (⛽ Kalmar 2005) | 3 un | **R$ 538.547,12** | 9.592 hrs | **R$ 56,15 / h** | R$ 22.439,46 / mês | 5,0% |
| **RTG 11 ao 14** (🚨 Pico de Custo) | 4 un | **R$ 2.623.218,21** | 16.100 hrs | **R$ 162,93 / h** | R$ 81.975,57 / mês | 24,2% |
| **RTG 15 ao 20** (⛽ Retrofit 2011) | 6 un | **R$ 2.949.297,34** | 20.041 hrs | **R$ 147,16 / h** | R$ 61.443,69 / mês | 27,2% |
| **RTG 21 ao 30** (⛽ Retrofit 2014) | 10 un | **R$ 1.973.090,67** | 42.560 hrs | **R$ 46,36 / h** | R$ 24.663,63 / mês | 18,2% |
| **RTG 31 ao 41** (🌱 Frota Nova 2023) | 11 un | **R$ 1.353.471,05** | 59.101 hrs | **R$ 22,90 / h** | R$ 15.380,35 / mês | 12,5% |
| **TOTAL GERAL FROTA** | **40 un** | **R$ 10.847.678,44** | **169.263 hrs** | **R$ 64,09 / h** | **R$ 34.768,20 / mês** | **100%** |

---

## 🚀 Principais Funcionalidades

- ⚡ **Filtragem Multidimensional em Tempo Real:** Filtro unificado por mês (Jan a Ago/2026), por fabricante e por RTG específico.
- 🌐 **Bilinguismo Completo (PT/EN):** Alternância instantânea com 1 clique (títulos, métricas, sufixos, relatórios e modais traduzidos).
- ⏱️ **Auditoria de Horímetros Reais:** Horas acumuladas por máquina e cálculo preciso do R$/h realizado.
- 📊 **Gráficos Executivos:** Curva de evolução mensal, dispersão por fabricante (Kone vs Kalmar vs ZMPC) e ranking comparativo vs média da frota.
- 📥 **Exportação 100% Offline:** Download de dados filtrados em formato **Excel (.xlsx)** nativo e **CSV**, sem necessidade de internet.
- 🎨 **Design System Premium:** Interface moderna com Glassmorphism, tipografia Outfit/Inter e alternância entre Dark Mode e Light Mode.

---

## 💻 Como Executar Localmente

### Opção 1: Abertura Direta
Dê dois cliques no arquivo index.html ou em ABRIR_DASHBOARD.bat para abrir diretamente no navegador padrão.

### Opção 2: Servidor Web Local
`ash
# Com Python
python -m http.server 8080

# Ou com Node.js
npx serve .
`
Acesse http://localhost:8080 no navegador.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5 Semântico, CSS3 Moderno (Glassmorphism & CSS Custom Properties), JavaScript (ES6+ Vanilla)
- **Visualização de Dados:** [Chart.js](https://www.chartjs.org/)
- **Planilhas & Exportação:** [SheetJS (xlsx)](https://sheetjs.com/)
- **Deploy:** GitHub Pages + GitHub Actions (static.yml)

---

**Terminal de Contêineres de Paranaguá (TCP)**  
*Gerência de Engenharia de Manutenção & Gestão de Ativos*