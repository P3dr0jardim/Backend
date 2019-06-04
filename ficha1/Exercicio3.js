function operacao(v1,v2,op){
    if (op== '+'){
        result=v1+v2;
        console.log(result)

    }
    if(op== 'x'){
        result=v1*v2;
        console.log(result)

    }
    if (op== '/'){
        result=v1/v2;
        console.log(result)

    }
    if (op== '^'){
        result=v1^v2;
        console.log(result)

    }
}
operacao(10,10,'x');