function start() {
    let dia = document.querySelector('input.txtd');
    let mes = document.querySelector('input.txtm');
    let zod = document.querySelector('div.result');

     if (dia.value.length == 0 || mes.value.length == 0 || dia.value.length > 31 || mes.value.length > 12) { //Minimizando os errros
         window.alert('[ERRO] Digite o dia nascimento.');
     } else { //Conversao de string p/ numero de novas variáveis
        let d = Number(dia.value);
        let m = Number(mes.value);
        let z = Text(zod.textContent);

        if ((d >= 21 && m == 3) || (d <= 20 && m == 4)) {
          z = z.innerHTML('Ares');
        }
     } 
}

/* Use o switch case ........
Áries: de 21 março a 20 abril
Touro: de 21 abril a 20 maio
Gêmeos: de 21 maio a 20 junho
Câncer: de 21 junho a 22 julho
Leão: de 23 julho a 22 agosto
Virgem: de 23 agosto a 22 setembro
Libra: de 23 setembro a 22 outubro
Escorpião: de 23 outubro a 21 novembro
Sagitário: de 22 novembro a 21 dezembro
Capricórnio: de 22 dezembro a 20 janeiro
Aquário: de 21 janeiro a 18 fevereiro
Peixes: de 19 fevereiro a 20 março. */