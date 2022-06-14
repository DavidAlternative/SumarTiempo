import { resultadosSuma, sumarTiempo, clear } from "./sumarTiempo";

let horasSuma: number[]= [];
let minutosSuma: number[] = [];
let segundosSuma: number[] = [];

function addTime(horas: number,minutos: number,segundos:number)
{
    horasSuma.push(horas)
    minutosSuma.push(minutos)
    segundosSuma.push(segundos)
}

let listaTiempo: any = document.getElementById("tiempo");
let submitButton = document.getElementById("add") as HTMLButtonElement;
let segundos = document.getElementById("segundos") as HTMLInputElement;
let horas = document.getElementById("horas") as HTMLInputElement;
let minutos = document.getElementById("minutos") as HTMLInputElement;

horas.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    minutos.focus();
  }
})

minutos.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    segundos.focus();
  }
})

segundos.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    submitButton.click();
    horas.focus();
  }
})


submitButton.addEventListener("click", () => {
    let horas = document.getElementById("horas") as HTMLInputElement;
    let minutos = document.getElementById("minutos") as HTMLInputElement;
    let segundos = document.getElementById("segundos") as HTMLInputElement;
    if (horas.value == "") {
        horas.value = "0";
    }
    if (minutos.value == "") {
        minutos.value = "0";
    }
    if (segundos.value == "") {
        segundos.value = "0";
    }

    addTime(horas.valueAsNumber,minutos.valueAsNumber,segundos.valueAsNumber);
    let info = `Horas: ${horas.valueAsNumber} Minutos: ${minutos.valueAsNumber} Segundos: ${segundos.valueAsNumber}`;
    listaTiempo.appendChild(document.createElement("li")).innerHTML = info;
    horas.value = "";
    minutos.value = "";
    segundos.value = "";

})

const ok = document.getElementById("ok") as HTMLButtonElement;
ok.addEventListener("click", () => {
    while (listaTiempo.firstChild != null) {
      listaTiempo.removeChild(listaTiempo.firstChild);
    }
    sumarTiempo(horasSuma,minutosSuma,segundosSuma);
    let resultado = `Resultado: Horas: ${resultadosSuma[1].horas} Minutos: ${resultadosSuma[1].minutos} Segundos: ${resultadosSuma[1].segundos}`;
    listaTiempo.appendChild(document.createElement("li")).innerHTML = resultado;
    horasSuma = [];
    minutosSuma = [];
    segundosSuma = [];
    clear();

})

const clearBtn = document.getElementById("clear") as HTMLButtonElement;
clearBtn.addEventListener("click", () => {
    horasSuma = [];
    minutosSuma = [];
    segundosSuma = [];
    let horas = document.getElementById("horas") as HTMLInputElement;
    let minutos = document.getElementById("minutos") as HTMLInputElement;
    let segundos = document.getElementById("segundos") as HTMLInputElement;
    horas.value = "";
    minutos.value = "";
    segundos.value = "";
    clear();
    while (listaTiempo.firstChild != null) {
      listaTiempo.removeChild(listaTiempo.firstChild);
    }
})

sumarTiempo(horasSuma, minutosSuma, segundosSuma);


