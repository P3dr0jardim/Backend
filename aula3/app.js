function started (){
        console.log('Started Download');
  
}
function update (){
    for(i=0;i<=100;i++){
        console.log(i + '% of Download')

    }
}
function completed (){
    console.log('Download completed')
    

}
function performDownload(){
    started();
    update();
    completed();
}

performDownload(started, update, completed);

var arrayUtils=require('./ArrayUtils.js');

var array= [1,2,3,4,5];

var isEmpty= arrayUtils.isEmpty(array);
console.log(isEmpty);

var max = arrayUtils.max(array);
console.log(max);

var min = arrayUtils.min(array);
console.log(min);

var average = arrayUtils.average(array);
console.log(average);

var indexOf= arrayUtils.indexOf(array,1);
console.log(indexOf);

var subArray= arrayUtils.subArray(array, 1 ,3);
console.log(subArray);

var isSameLength= arrayUtils.isSameLength([1,2,3] ,[1,2,3]);
console.log(isSameLength);

var reverse= arrayUtils.reverse([1,2,3,4]);
console.log(reverse);

var swap= arrayUtils.swap([1,2,3],1,2);
console.log(swap);

var contains= arrayUtils.contains([1,2,3,4,5,6,7,8],3);
console.log(contains);