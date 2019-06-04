function multiplos(valor,multiplo){
    resto=valor%multiplo;
    if (resto==0)
        return true;
    else
        return false;

}
var multiplos_5=[];
for (var i=1;i<=20;i++) {
    if(multiplos(i,5))
    multiplos_5.push(i);
}
console.log(multiplos_5)