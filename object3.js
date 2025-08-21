let obj2={name:"Shalini",
          age:21,
          employee:"Swivel", 
          role:"Web developer", 
          city:"Hosur",
          details : function()
{
console.log("Hello, this is " +this.name);
document.write("<h1 style='color:red;'> Hello, this is " +this.name +"</h1>");

console.log("employee of " +this.employee);
document.write("<h2 style='color:blue;'>Employee of " +this.employee + "</h2>");

console.log( this.role +" Role");
document.write("<h3 style='color:yellow;'> "+this.role +" Role" +"</h3>");

console.log("Lived in " +this.city);
document.write("<h3 style='color:purple;'> "+"Lived in " +this.city +"</h3>");
}
};
obj2.details();

