/*function grinder(items)
{
    console.log('grinding ..', items);
}

grinder('tomato');
grinder('coffe');



function add(a,b)
{
    console.log(a+b)
}

add(2,5);



function sqr(n){
    let result = n * n;
    return result;
}
console.log(sqr(3));



function CalculateSalary(name,salary)
{
    let tds =salary * 0.1;
    let inhand = salary - tds;
    return inhand;
}

let inhand1 = CalculateSalary('yash',54000);
console.log(inhand1)


//basic arrow function

let sum = (a,b) =>a+b;

console.log(sum(4,5));


//block arrow function

let demo = () => {
    console.log('this is a dummy arrow function!');
};
demo();



//looping

//forloop

for (let i = 0; i < 5; i++) {
   console.log(i)

}



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(n => {
    console.log(n * n);
});


//Looping through Objects in Arrays:

let users = [
    { name: 'yash', email: 'yash@gmail.com', age: 14 },
    { name: 'ashish', email: 'ashish@gmail.com', age: 16 },
    { name: 'himanshu', email: 'himanshu@gmail.com', age: 24 }
];

users.forEach(user => {
    console.log(user.name);
});


//Combining Functions and Loops
function sumOfSquares(arr) {
    let sum = 0;
    arr.forEach(n => {
        sum += n * n;
    });
    return sum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumOfSquares(numbers)); // Output: 55
*/