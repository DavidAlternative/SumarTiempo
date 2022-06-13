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
