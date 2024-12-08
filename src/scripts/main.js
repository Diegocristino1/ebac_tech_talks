AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime;

const contaAshoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOevento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOevento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOevento % diaEmMs) / horasEmMs);
    const minutosAteOEvento =Math.floor((distanciaAteOevento % horasEmMs) / minutoEmMs);
    const segundosAteOEento = Math.floor((distanciaAteOevento % minutoEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEento);

    document.getElementById("contador").innerHTML = "${diasAteOEvento}d ${horasAteOEvento}h ${minitosAteOEvento}m $[segundosAteOEvento]s";
    
    if (diasAteOEvento < 0) {
        clearInterval(contaAshoras);
        document.getElementById("contador").innerHTML = "Evento Inspirado"
    }
}, 1000);

