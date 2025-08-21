let fruits=new Map([["apple",50],["orange",40]]);
let f1="";
for(let[key,value]of fruits)
{
f1+="<p>" + key + "is"+ value +"</p>";
}
document.write(f1);