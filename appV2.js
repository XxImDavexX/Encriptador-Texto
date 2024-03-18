//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
let textoEncriptarDesencriptar = document.querySelector("#textoEncriptarDesencriptar");
let textoFinal  =   document.querySelector("#textoFinal");

function encriptarTexto(){
    let parametrosEncriptacion = [["e","enter"], ["i","imes"], ["a","ai"],  ["o","ober"], ["u","ufat"]];
    let textoEncriptar = textoEncriptarDesencriptar.value;
    textoEncriptar = textoEncriptar.toLowerCase();
    for(let i =0; i < parametrosEncriptacion.length; i++){
        if(textoEncriptar.includes(parametrosEncriptacion[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(parametrosEncriptacion[i][0],parametrosEncriptacion[i][1]);
        }

        textoFinal.value = "";
        textoFinal.value = textoEncriptar;
        textoEncriptarDesencriptar.value = "";
    }

        
}

function desencriptarTexto(){
    let parametrosDesencriptacion = [["e","enter"], ["i","imes"], ["a","ai"],  ["o","ober"], ["u","ufat"]];
    let textoDesencriptar = textoEncriptarDesencriptar.value;
    textoDesencriptar - textoDesencriptar.toLowerCase();
    for(let i =0; i < parametrosDesencriptacion.length; i++){
        if(textoDesencriptar.includes(parametrosDesencriptacion[i][1])){
            textoDesencriptar = textoDesencriptar.replaceAll(parametrosDesencriptacion[i][1],parametrosDesencriptacion[i][0]);
        }
    }
    textoFinal.value = "";
    textoFinal.value = textoDesencriptar;
    textoEncriptarDesencriptar.value = "";

}