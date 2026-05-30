# 💊 PharmaCalc

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge&logo=github" alt="Status Concluído">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

O **PharmaCalc** é uma aplicação web interativa desenvolvida para simplificar e automatizar cálculos farmacêuticos cruciais utilizados no dia a dia de profissionais de saúde, farmácias e hospitais. O projeto renderiza de forma dinâmica três módulos de cálculo específicos dentro de uma interface moderna de SPA (Single Page Application).

<img width="1920" height="912" alt="preview_PharmaCalc" src="https://github.com/user-attachments/assets/5e7d3815-b11b-4f89-9fc9-ba75562cdae1" />


---

## 🚀 Funcionalidades e Módulos

O sistema conta com três módulos principais selecionáveis pelo menu lateral:

1. **Cálculo de Dosagem (Mg para Ml):** Converte a dose prescrita em miligramas para o volume exato em mililitros com base na concentração disponível do medicamento.
2. **Duração de Tratamento:** Calcula a quantidade exata de caixas ou frascos necessários para cobrir todo o período de tratamento prescrito, evitando desperdício ou falta de medicação.
3. **Cálculo de Gotejamento (Infusão):** Determina a velocidade de infusão de soros hospitalares, calculando o número exato de gotas por minuto necessários para que o volume corra no tempo correto.

---

## 🧮 Lógica Matemática Aplicada

O motor do JavaScript executa regras de negócio baseadas em fórmulas clínicas padronizadas:

### 🔹 Dosagem (Mg para Ml)
A lógica calcula a concentração por mililitro e depois divide a dose desejada por esse fator.
- **Fórmula:** `Resultado = Dose Prescrita / (Concentração Mg / Concentração Ml)`

### 🔹 Duração do Tratamento
O sistema calcula o total de comprimidos necessários e divide pelo conteúdo da embalagem, arredondando sempre para cima para garantir que a medicação não falte.
- **Total de Doses:** `Doses por Dia * Duração em Dias`
- **Total de Caixas:** `Math.ceil(Total de Doses / Quantidade na Caixa)`

### 🔹 Gotejamento (Macrogotas)
Calcula a velocidade do gotejamento com base na constante de tempo hospitalar (horas multiplicadas por 3), arredondando o resultado final para o número inteiro mais próximo.
- **Fórmula:** `Gotas por Minuto = Math.round(Volume em Ml / (Tempo em Horas * 3))`

---

## 🎨 Destaques do Design e Código

- **Single Page Application (SPA):** Transição de telas limpa utilizando manipulação do DOM com `container.innerHTML`, evitando recarregamentos desnecessários de página.
- **Identidade Visual Sólida:** Paleta de cores moderna com contraste profissional utilizando variáveis CSS (`--primario: #0C2C55` e `--secundario: #5DD3B6`).
- **Feedback Visual Fluido:** Efeito de transição suave (`transition: 0.5s`) nos botões do menu lateral e animação de entrada com `@keyframes surgir` para os formulários.
- **Captura Genérica de Eventos:** Uso inteligente de um único `addEventListener('submit')` no container principal, filtrando as ações dinamicamente através do `e.target.id`.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da aplicação.
- **CSS3:** Estilização baseada em Flexbox, custom properties (variáveis) e animações de interface.
- **JavaScript (ES6):** Manipulação dinâmica do DOM, controle de eventos de formulário e processamento matemático.
- **Fontes externas:** Integração com Google Fonts (Inter e Montserrat).

---

## 💻 Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Michael-Clicker/Calculo-faramceutico
   cd Calculo-faramceutico
Abra o arquivo index.html em seu navegador de preferência.
