export let resultadosSuma: Array<any> = [];
export function sumarTiempo(horas: number[] | null, minutos: number[] | null, segundos: number[] | null){
  let totalHoras = 0;
  let totalMinutos = 0;
  let totalSegundos = 0;
  horas?.forEach((item)=>{
    totalHoras += item;
  })
  minutos?.forEach((item)=>{
    totalMinutos += item;
  })
  segundos?.forEach((item)=>{
    totalSegundos += item;
  })
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
  }
  resultadosSuma.push(resultadoSuma);
}

export function clear() {
  resultadosSuma = [];
}
