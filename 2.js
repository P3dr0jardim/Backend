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