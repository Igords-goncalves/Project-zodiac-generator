function start() {
  let zod = document.querySelector('p.zod');
  let dia = document.querySelector('input.txtd');
  let mes = document.querySelector('select.txtm');
  let img = document.querySelector('img.img');
  
   if (dia.value.length == 0 || dia.value > 31 || dia.value == 0)  { 
       window.alert('[ERRO] Digite o dia nascimento e escolha o mês.');
       zod.innerHTML = 'testando conexão';
    } else //Signos - Proxima etapa do programa, reduzir a quantidade de "IF"
          if ((Number(dia.value) >=  22 && mes.value == "dezembro") || (Number(dia.value) <=  20 && mes.value == "janeiro")) { 
            zod.innerHTML = 'Capricórnio';
            img.src = './img/capricornio.png';
          } else 
                if ((Number(dia.value) >= 21 && mes.value == "janeiro" )|| (Number(dia.value) <=  18 && mes.value == "fevereiro")) {
                  zod.innerHTML = 'Auário';
                  img.src = './img/aquario.png';
                } else
                      if ((Number(dia.value) >= 19 && mes.value == "fevereiro" )|| (Number(dia.value) <=  20 && mes.value == "marco")) {
                        zod.innerHTML = 'Peixes';
                        img.src = './img/peixes.png';
                      } else
                            if ((Number(dia.value) >= 21 && mes.value == "marco" )|| (Number(dia.value) <=  20 && mes.value == "abril")) {
                              zod.innerHTML = 'Áries';
                              img.src = './img/ares.png';
                            } else
                                  if ((Number(dia.value) >= 21 && mes.value == "abril" )|| (Number(dia.value) <=  20 && mes.value == "maio")) {
                                    zod.innerHTML = 'Touro';
                                    img.src = './img/touro.png';
                                  } else
                                        if ((Number(dia.value) >= 21 && mes.value == "maio" )|| (Number(dia.value) <=  20 && mes.value == "junho")) {
                                          zod.innerHTML = 'Gêmeos';
                                          img.src = './img/gemeos.png';
                                        } else
    if ((Number(dia.value) >=  21 && mes.value == "junho") || (Number(dia.value) <=  22 && mes.value == "julho")) { 
      zod.innerHTML = 'Câncer';
      img.src = './img/cancer.png';
    } else 
          if ((Number(dia.value) >= 23 && mes.value == "julho" )|| (Number(dia.value) <=  22 && mes.value == "agosto")) {
            zod.innerHTML = 'Leão';
            img.src = './img/leao.png';
          } else
                if ((Number(dia.value) >= 23 && mes.value == "agosto" )|| (Number(dia.value) <=  22 && mes.value == "setembro")) {
                  zod.innerHTML = 'Virgem';
                  img.src = './img/virgem.png';
                } else
                      if ((Number(dia.value) >= 23 && mes.value == "setembro" )|| (Number(dia.value) <=  22 && mes.value == "outubro")) {
                        zod.innerHTML = 'Libra';
                        img.src = './img/libra.png';
                      } else
                            if ((Number(dia.value) >= 23 && mes.value == "outubro" )|| (Number(dia.value) <=  21 && mes.value == "novembro")) {
                              zod.innerHTML = 'Escropião';
                              img.src = './img/escorpiao.png';
                            } else
                                  if ((Number(dia.value) >= 22 && mes.value == "novembro" )|| (Number(dia.value) <=  21 && mes.value == "dezembro")) {
                                    zod.innerHTML = 'Sargitário';
                                    img.src = './img/sargitario.png';
                                  } else
                                        if (Number(dia.value) < 22 && mes.value == "dezembro" ) {
                                          zod.innerHTML = 'Capricórnio';
                                          img.src = './img/capricornio.png';
                                        }
}
/*
Capricórnio: de 22 dezembro a 20 janeiro
Aquário: de 21 janeiro a 18 fevereiro
Peixes: de 19 fevereiro a 20 março.
Áries: de 21 março a 20 abril
Touro: de 21 abril a 20 maio
Gêmeos: de 21 maio a 20 junho
Câncer: de 21 junho a 22 julho
Leão: de 23 julho a 22 agosto
Virgem: de 23 agosto a 22 setembro
Libra: de 23 setembro a 22 outubro
Escorpião: de 23 outubro a 21 novembro
Sagitário: de 22 novembro a 21 dezembro
*/
