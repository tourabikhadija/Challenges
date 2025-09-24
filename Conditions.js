const prompt = require("prompt-sync")();
let nombre = prompt ("Entrer votre numbre: ");
if(nombre % 2 === 0) {

    console.log("le nombre est pair");
 }else{
    console.log("le nombre est impair");
  } 
