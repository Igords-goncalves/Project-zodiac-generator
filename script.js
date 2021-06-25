function start() {
    let zod = document.querySelector('p.zod');
    let dia = document.querySelector('input.txtd');
    let mes = document.querySelector('select.txtm');
    
     if (dia.value.length == 0 || dia.value > 31 || dia.value == 0)  { //Alertas bem sucedidos
         window.alert('[ERRO] Digite o dia nascimento.');
         zod.innerHTML = 'testando conexão'; /*Captura bem sucessida!*/
         
        } else if (Number(dia.value) >= 21 && mes.value == "0" ) { 
          window.alert('deu certo') /*Captura bem sucessida!*/
          zod.innerHTML = 'Áries';
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
Peixes: de 19 fevereiro a 20 março. 

jan "0" fev "1" mar "2" abr "3" mai "4" jun "5"
jul "6" ago "7" set "8" out "9" nov "10" dez "11" */