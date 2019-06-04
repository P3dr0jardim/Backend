function max(array){
    var m=array[0];
    for (var i=1;i<array.length;i++){
        if(array[i]>m){
            m=array[i];
        }
    }
    return m;
}
function min(array){
    var n=array[0];
    for (var i=0;i<array.length;i++){
        if(array[i]<n){
            n=array[i];
        }
    }
    return n;

}
function media(array){
    var med=array[0];
    d=array.length;
    for (var i=0;i<array.length;i++){
        if(array[i]>0){
            med+=array[i];
            med/d;
        }
    }
    return med;

}

var m=max([2,3,5,7]);
var n=min([2,3,5,7]);
var med=media([2,3,5,7]);
console.log(max([2,3,5,7]));
console.log(min([2,3,5,7]));
console.log(med([2,3,5,7]));
