function start() {
    let dia = document.querySelector('input.txtd');
    let mes = document.querySelector('input.txtm');
    let zod = document.querySelector('input.txtz');

     if (dia.value.length == 0 || mes.value.length == 0) { //Minimizando os errros
         window.alert('Digite o dia e o mês de nascimento.');
     } else { //Conversao de string p/ numero de novas variáveis
        let d = Number(dia);
        let m = Number(mes);
        let z = Text(zod);

        if (d <= 31 && m <= 12) {
          zod =  document.write('Zodiaco'); //Tenho que fazer o resultado dos numeros digitado aparecerem aqui com o nome do signo
        }
     } 
}