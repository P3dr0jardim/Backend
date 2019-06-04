var obj={name: "Pedro",
age: 18,
gender: "Male"};

var obj2 = JSON.stringify(obj);
console.log(obj2);

var obj3= JSON.parse(obj2);
console.log(obj3.name);

var emitter= require("./emitter.js");
var emtr = new emitter();
emtr.on("start",function(){
    console.log('Teste');
});
emtr.emit('start');