"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sumarTiempo_1 = require("./sumarTiempo");
let horasSuma = [];
let minutosSuma = [];
let segundosSuma = [];
function addTime(horas, minutos, segundos) {
    horasSuma.push(horas);
    minutosSuma.push(minutos);
    segundosSuma.push(segundos);
}
let listaTiempo = document.getElementById("tiempo");
let submitButton = document.getElementById("add");
let segundos = document.getElementById("segundos");
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
horas.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        minutos.focus();
    }
});
minutos.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        segundos.focus();
    }
});
segundos.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        submitButton.click();
        horas.focus();
    }
});
submitButton.addEventListener("click", () => {
    let horas = document.getElementById("horas");
    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");
    if (horas.value == "") {
        horas.value = "0";
    }
    if (minutos.value == "") {
        minutos.value = "0";
    }
    if (segundos.value == "") {
        segundos.value = "0";
    }
    addTime(horas.valueAsNumber, minutos.valueAsNumber, segundos.valueAsNumber);
    let info = `Horas: ${horas.valueAsNumber} Minutos: ${minutos.valueAsNumber} Segundos: ${segundos.valueAsNumber}`;
    listaTiempo.appendChild(document.createElement("li")).innerHTML = info;
    horas.value = "";
    minutos.value = "";
    segundos.value = "";
});
const ok = document.getElementById("ok");
ok.addEventListener("click", () => {
    while (listaTiempo.firstChild != null) {
        listaTiempo.removeChild(listaTiempo.firstChild);
    }
    (0, sumarTiempo_1.sumarTiempo)(horasSuma, minutosSuma, segundosSuma);
    let resultado = `Resultado: Horas: ${sumarTiempo_1.resultadosSuma[1].horas} Minutos: ${sumarTiempo_1.resultadosSuma[1].minutos} Segundos: ${sumarTiempo_1.resultadosSuma[1].segundos}`;
    listaTiempo.appendChild(document.createElement("li")).innerHTML = resultado;
    horasSuma = [];
    minutosSuma = [];
    segundosSuma = [];
    (0, sumarTiempo_1.clear)();
});
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
    horasSuma = [];
    minutosSuma = [];
    segundosSuma = [];
    let horas = document.getElementById("horas");
    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");
    horas.value = "";
    minutos.value = "";
    segundos.value = "";
    (0, sumarTiempo_1.clear)();
    while (listaTiempo.firstChild != null) {
        listaTiempo.removeChild(listaTiempo.firstChild);
    }
});
(0, sumarTiempo_1.sumarTiempo)(horasSuma, minutosSuma, segundosSuma);
