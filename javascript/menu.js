const container = document.getElementById("calculadora")

function renderDosagem() {
  container.innerHTML = ` 
   <div class=animar-entrada>
  <h1>Calculo de dosagem</h1>
      <form class="calc-dosagem" id="calc-dosagem"> <!--mg/(mg/ml)=ml-->
        <label>Informe o medicamento:
          <input type="text" class="medicamento" id="CalcMedicamento" name="input" placeholder="nome do Remedio" required>
        </label>
        <label>Informe a quantidade de Miligramas (Mg):
          <input type="number" class="mg" id="inMg" name="input" placeholder="Dose prescrita" required>
        </label>
        <div class="mg-ml">
        <label class="mg">Informe a concentração (Mg):
          <input type="number" class="mg" id="conc_mg" name="input" placeholder="Concentração da unidade" required>
        </label>
        <label class="ml">Informe a concentração (Ml):
          <input type="number" class="ml" id="conc_ml" name="input" placeholder="Concentração da unidade" required>
        </div>
        </label>
        <input type="submit" value="Calcular dosagem">
      </form>
      </div>`
}

function renderDuracao() {
  container.innerHTML = `
  <div class=animar-entrada>
  <h1>Duração de tratamento</h1>
      <form class="calc-duração" id ="calc-duração">
        <label>Informe o medicamento:
          <input type="text" class="medicamento" id ="durMedicamento" name="input" placeholder="nome do Remedio" required>
        </label>
        <label>Informe quantidade de doses por dia:
          <input type="number" class="doseDia" name="input" id ="qnt_dia" placeholder="quantidade por dia" required>
        </label>
        <label>Informe a duração(dias):
          <input type="number" class="duracao" name="input" id="durDias" placeholder="duração do tratamento em dias" required>
        </label>
        <label>Informe quantidade na caixa:
          <input type="number" class="doseDia" name="input" id="inCaixa" placeholder="quantidade comprimidos por caixa" required>
        </label>
        <input type="submit" value="Calcular dosagem">
      </form>
      </div>`
}

function renderGotejar() {
  container.innerHTML = ` 
  <div class=animar-entrada>
  <h1>Calculo de Gotejamento</h1>
      <form class="calc-gotejamento" id ="calc-gotejamento"> 
        <label>Informe o medicamento:
          <input type="text" class="bolsaMedicamento" id ="gMedicamento" name="input" placeholder="nome do Remedio" required>
        </label>
        <label>Informe a quantidade na bolsa (ml):
          <input type="number" class="bolsa" name="input" id ="inBolsa" placeholder="Quantidade em ml" required>
        </label>
        <label>Informe em quantas horas o soro deve correr:
          <input type="number" class="tempo" name="input" id ="inHoras" placeholder="Intervalo em horas" required>
        </label>
        <input type="submit" value="Calcular Gotejamento">
      </form> 
      </div>`
}

let resp = document.querySelector('h4')
let nome = document.querySelector('h3')
let desc = document.getElementById('desc')
const respContainer = document.getElementById('resposta')

container.addEventListener('submit', (e) => {
    e.preventDefault();

const formularioAtivo = e.target.id;
//calc dosagem
if (formularioAtivo === 'calc-dosagem') {  
const frm_calc = document.getElementById('calc-dosagem')  
const calcMedicamento = (frm_calc.CalcMedicamento.value)
const dose = Number(frm_calc.inMg.value)
const concentracao_mg = Number(frm_calc.conc_mg.value)
const concentracao_ml = Number(frm_calc.conc_ml.value)

conc_final = concentracao_mg/concentracao_ml
resultado = dose/conc_final
resp.innerText = resultado.toFixed(2)
respContainer.style.display = "flex" 
desc.innerText = `Você deverá tomar ${resultado.toFixed(2)}`
nome.innerText = calcMedicamento
}
//calc dosagem
else if (formularioAtivo === 'calc-duração') {
const frm_dur = document.getElementById('calc-duração')

const durMedicamento = (frm_dur.durMedicamento.value)
const qDia = Number(frm_dur.qnt_dia.value)
const dur = Number(frm_dur.durDias.value)
const caixa = Number(frm_dur.inCaixa.value)

total_dose = qDia*dur
total_final = Math.ceil(total_dose/caixa)

resp.innerText = total_final
respContainer.style.display = "flex"
desc.innerText = `Você precisará de ${total_final} caixas`
nome.innerText = durMedicamento
}
else if (formularioAtivo === 'calc-gotejamento') {
const frm_gotejamento = document.getElementById('calc-gotejamento')

const gMedicamento = (frm_gotejamento.gMedicamento.value)
const bolsa = (frm_gotejamento.inBolsa.value)
const horas = (frm_gotejamento.inHoras.value)

Gotas = Math.round(bolsa/(horas*3))
resp.innerText = Gotas
respContainer.style.display = "flex"
desc.innerText = `No total será ${Gotas} gotas por minuto`
nome.innerText = gMedicamento
}})

