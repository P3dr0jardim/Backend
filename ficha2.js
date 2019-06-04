/*function imc(peso,altura){
    valor=peso/((altura)*(altura));
    console.log(valor);
        if(valor<=18.5){
           console.log("Abaixo do Peso");
        }
        if(valor >= 18.5 && valor <=25){
            console.log("No peso normal");
        }
        if(valor >= 25 && valor <=30){
            console.log("Acima do peso");
        }
        if(valor > 30){
            console.log("obeso");
        }
    
}
//imc(75,1.75);

/*function contrario(frase){
    palavra= "";
    for (i=frase.length -1;i>=0;i--){
        palavra += frase[i];
    }
    return palavra;
}
console.log(contrario('Hoje e domingo'));

function vogais(frase){
    var cont=0;
    for(i=0;i<= frase.length;i++){
        if(frase[i]=='a'){
            cont+=1;
        }
        if(frase[i]=='e'){
            cont+=1;
        }
        if(frase[i]=='i'){
            cont+=1;
        }
        if(frase[i]=='o'){
            cont+=1;
        }

        if(frase[i]=='u'){
            cont+=1;
        }
    }
    return cont;
}
console.log(vogais("ae"));
*/
function abcd(frase, letra){
    var cont=0;
    for(i=0;i<= frase.length;i++){
        if(frase[i]== letra){
            cont +=1;
        }
    }
    return cont;
}
console.log(abcd('alalala','a'));
