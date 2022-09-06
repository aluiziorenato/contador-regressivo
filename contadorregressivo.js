let dataFutura = new Date("Feb 19,2023 08:00:00");

const tempo = setInterval(function() {
    const retornoMilissegundos = new Date().getTime();
   const intervalo = dataFutura - retornoMilissegundos;

     const dia = Math.floor(intervalo / (1000 * 60 *60 * 24));

     const horas = Math.floor((intervalo % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));

     const minutos = Math.floor((intervalo % (1000 * 60 * 60)) / (1000 * 60));

     const segundos = Math.floor((intervalo % (1000 * 60)) / 1000);

     if(intervalo < 0) {
        clearInterval(tempo);

        alert("TERMINO !!!");
     }
     
     document.getElementById("dia").innerHTML = dia;
     document.getElementById("hora").innerHTML = horas;
     document.getElementById("minuto").innerHTML = minutos;
     document.getElementById("segundo").innerHTML = segundos;

   if (horas < 10) {
      document.getElementById("hora").innerHTML = "0" + horas;
   }
   if (minutos < 10) {
      document.getElementById("minuto").innerHTML = "0" + minutos;
   }
   if (segundos < 10) {
      document.getElementById("segundo").innerHTML = "0" + segundos;
   }

     

}, 1000);