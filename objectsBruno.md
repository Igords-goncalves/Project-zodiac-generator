var dia = 20; // input dia
var mes = "fevereiro"; //select 

object literals 
var signos2 = {
    janeiro: {
        inicio_signo: "capricornio",
        dia_limite: 21,
        fim_signo: "aquario",
    },
    fevereiro: {
        inicio_signo: "peixes",
        dia_limite: 19,
        fim_signo: "touro"
    }
};

var setMes = signos2[mes];
var result = null;

if (dia >= setMes.dia_limite) {
    result =  setMes.inicio_signo;
}
else {
    result =  setMes.fim_signo;
} 


// ------------------------
var dia = "20"; // input dia
var mes = "fevereiro"; //select 
var img = { src: null } //<img src="" />

var imagens = {
    capricornio: "img/capricornio.jpg",
    aquario: "img/aquario.jpg",
    peixes: "img/peixes.jpg",
    touro: "img/touro.jpg",
}

// object literals 
var signoMes = {
    janeiro: {
        inicio_signo: "capricornio",
        dia_limite: 21,
        fim_signo: "aquario",
    },
    fevereiro: {
        inicio_signo: "peixes",
        dia_limite: 


        
