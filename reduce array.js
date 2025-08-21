let num1=[1,2,3];
let mul=num1.reduce(function(a,b){
return a*b;
},1);
console.log("Reduce array:" , mul);