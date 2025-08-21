let obj3={name:"Shalini", age:21, qualification:"ECE", employee:"swivel", role:"web developer", city:"theni"};

console.log(Object.keys(obj3));
document.write(Object.keys(obj3)+"<br>");

console.log(Object.values(obj3));
document.write(Object.values(obj3)+"</br>");

console.log(Object.entries(obj3));
document.write(Object.entries(obj3)+"</br>");


obj3.age=40;
document.write("<h1> Now object is mutable: " +obj3.age +"</h1>");

let obj4={name:"Shalini", age:21, qualification:"ECE", employee:"swivel", role:"web developer", city:"theni"};
Object.freeze(obj4)
obj3.age=40;
document.write("<h1> Now object is changed as unmutable by using freeze method: " +obj4.age +"</h1>");


console.log("role" in obj4);
document.write("qualification" in obj4);