console.log('Hi I am Leen Rasllan')





let name = prompt("Please enter your name:");
let gender = prompt("Please enter your gender (male or female):").toLowerCase();
let age = parseInt(prompt("Please enter your age:"));

if (age <= 0) {
    alert("Invalid age. Age must be greater than zero.");
} else {

}

if (gender === "male" || gender === "female") {
    let title = gender === "male" ? "Mr." : "Ms.";
    let message = "Hello!, Welcome, " + title + " " + name + "!";
    alert(message);
} else {
    alert("Welcome, " + name + "!");
}
let organized = confirm("Do you like organize your life?");
let visited = confirm("Do you visit our site befor?");
let excited = confirm("Are you excited to start with us?");

if (name.trim() === "" || gender.trim() === "") {
    alert("Invalid input. Please try again.");
}


let operator = prompt("Please enter + or -   :-");
let num = prompt("Please enter any number");
let num2 = prompt("Please enter any number");
let result = 0;
switch (operator) {
    case '+':
        result = parseInt(num) + parseInt(num2);
        break;
    case '-':
        result = parseInt(num) - parseInt(num2);
        break;
    default:
        console.log="Opps wrong!!!"
}
console.log(result);


let arr=["hi","hello","you are welcome"]

for( let i=0;i<arr.length; i++){
    console.log(i);   
}

    console.log(arr);



