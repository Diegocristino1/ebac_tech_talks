AOS.init();const e=new Date("Dec 12, 2024 19:00:00").getTime,o=setInterval(function(){let t=e-new Date().getTime(),n=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),a=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3);console.log(n),console.log(l),console.log(a),console.log(r),document.getElementById("contador").innerHTML="${diasAteOEvento}d ${horasAteOEvento}h ${minitosAteOEvento}m $[segundosAteOEvento]s",n<0&&(clearInterval(o),document.getElementById("contador").innerHTML="Evento Inspirado")},1e3);
//# sourceMappingURL=index.961b7d6c.js.map
