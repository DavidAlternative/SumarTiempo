(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./sumarTiempo":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.sumarTiempo = exports.resultadosSuma = void 0;
exports.resultadosSuma = [];
function sumarTiempo(horas, minutos, segundos) {
    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;
    horas === null || horas === void 0 ? void 0 : horas.forEach((item) => {
        totalHoras += item;
    });
    minutos === null || minutos === void 0 ? void 0 : minutos.forEach((item) => {
        totalMinutos += item;
    });
    segundos === null || segundos === void 0 ? void 0 : segundos.forEach((item) => {
        totalSegundos += item;
    });
    while (totalSegundos >= 60) {
        totalSegundos -= 60;
        totalMinutos += 1;
    }
    while (totalMinutos >= 60) {
        totalMinutos -= 60;
        totalHoras += 1;
    }
    let resultadoSuma = {
        horas: totalHoras,
        minutos: totalMinutos,
        segundos: totalSegundos
    };
    exports.resultadosSuma.push(resultadoSuma);
}
exports.sumarTiempo = sumarTiempo;
function clear() {
    exports.resultadosSuma = [];
}
exports.clear = clear;

},{}]},{},[1]);
