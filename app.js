let textoEncriptado="";
let textoDesencriptado="";
function encriptarTexto(){
    let textoEncriptar =  document.getElementById("textoEncriptarDesencriptar").value;
    //iniciar la encriptacion
    for(let i = textoEncriptar.length -1; i >= 0 ;i--){
        textoEncriptado =  textoEncriptado + textoEncriptar.charAt(i) + Math.floor(Math.random() * 20);
    }
    document.getElementById("textoFinal").value = textoEncriptado;
}

function desencriptarTexto(){
    let textoDesencriptar= document.getElementById("textoEncriptarDesencriptar").value;
    let num = ["0","1","2","3","4","5","6","7","8","9"];
    let verificador = 0;
    for(let i = textoDesencriptar.length -1; i >= 0 ;i--){
        for(let j = 0; j <= num.length - 1;j++){
            if (textoDesencriptar.charAt(i) != num[j]){
                verificador++;
            }     
        }
        if(verificador == 10){
            textoDesencriptado = textoDesencriptado + textoDesencriptar.charAt(i);
        }
        verificador = 0;
    }
    document.getElementById("textoFinal").value = textoDesencriptado;
}