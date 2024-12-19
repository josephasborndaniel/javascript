/*let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

let firstItem = shoppingList[1];
console.log(firstItem);


//puhing into the array
shoppingList.push("mango");
console.log(shoppingList)

//poping
shoppingList.pop();
let item  = shoppingList.slice();
console.log(item)

//using slice oprator to replace the elements
shoppingList[4].splice(1, 3, "Cucumbers", "Bell Peppers");

console.log(shoppingList);


//objects
let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

let studentName = student.name;
console.log(studentName);

//adding element
student.phone ="91236789";
console.log(student);


//removing
delete student.grade;
console.log(student);

//modify 
student.age = 21;
console.log(student);



//if else statement
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}


console.log(checkNumber(10)); // Output: Positive
console.log(checkNumber(-5)); // Output: Negative
console.log(checkNumber(0));  // Output: Zero



function evaluteGrade(score)
{
    if(score>=90 && score <=100){
        return "A";
    }
    else if(score >= 80 && score < 89){
     return "B";
    }
    else if(score >= 70 && score < 79){
        return "C";
        }
        else if(score >= 60 && score < 69){
            return "D";
            }
            else{
                return "F";
                }
}

console.log(evaluteGrade(100));
*/

function checkString(input)
{
    if (input)
    {
        return "truthy";
    }

    else{
        return "falsy";
    }
}

console.log(checkString("Hello"))