const prompt = require("prompt-sync")();
let num = prompt ("Entrer votre numbre: ");

let count =0;
for (let i=2 ; i < num; i++){
    if(num % i ===0){
   count++;
   console.log(le nombre est impremier);
   break;
}
}
    if(count==0){
        console.log(le nombre est premier);
    }
