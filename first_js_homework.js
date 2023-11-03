// SECTION 1
// What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
    // Don't repeat yourself.
    // It's important to write efficient, easy-to-edit code.
    // Variables, loops, objects.

// What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources.
    // const variables won't change. let variables are intended to change. var variables can change, but var is out of date and we won't be using it much.


// SECTION 2
// Using the provided variable definitions, replace the underscores with a mathematical or boolean operator that evaluates the expression to true (some may have more than one right answer, just choose one)

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false; 

a < b

c > d

'Name' === 'Name'

a + b === c

a * a === d

e != 'Kevin'

48 == '48'

f !== e

// Set a new variable g to 0
let g = 0;

// console.log g
console.log(g)

// Then set the variable g to be equal to b + c
g = b + c;

// console.log g
console.log(g)

//Did you use const, let or var? Why did you choose the one you chose?
    // I used let, because I knew I was going to change it in a couple steps.

//What happens if you don't use const, let or var? Do you get an error? If so what does it say?
    // No. It worked and logged 0 and 110.

// what happens if you write 10 = g?
// 10 = g
    // I get an error that says, "Invalid left-hand side in assignment" in line 56.


// SECTION 3
// Infinite Loop: Is the code [in the homework] an infinite loop? Why or why not?
    // Yes, because it will run while the expression in the () is true, which is exactly what the expression is. And there is nothing in the rest of the function to change that.

// Infinite loop II: Infinite or not infinite? What is the expected output?
    // No, because it will only run while the expression in the () is true, which means it will run once and then the variable will change to false.

    // Expected output is one "Do not run this loop".


//set a variable letters to "A"
let letters = "A";
//set a variable i to 0
let i = 0;
    
//start a while loop that will run as long as i is less than 20
while (i < 20) {
    // set the variable letters to letters + "A"
    letters += "A";
    // add 1 to i
    i++;
    }
//log the value of letters to the terminal
console.log(letters);

//Expected result: It will log 20 A's in a row

//Reality: It logged 21 A's. My math was off and I learned that I need to play things out further (especially with math) instead of assuming I know where something is going.


//SECTION 4
//For loop: A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
    // For and while loops both create a process that repeats as long as a certain expression is true. For loops include all their stuff, like variables, in the syntax, which leaves less room for infinite loops.

 // The first part of the control panel is: the initial condition (what it is)
 // The second part of the control panel is: the while condition (under what circumstances the loop should run)
 // The third part of the control panel is: the repeating expression (what to do at the end of each loop)

 //For loop II
for (let i=0; i<1000; i++) {
    console.log(i)
}

//Bonus: What is the difference between \ (backslash) and / (forward slash)? What is \ doing in the string?
    // The backslash is used to create comments in code. The forward slash is used to make sure the string is still logged correctly even though it repeats the same '' used on the outside.

//For loop in reverse
for (let i=999; i>=0; i--) {
    console.log(i)
}

 for (let i=1; i<11; i++) {
    console.log("The value of i is: " + i + " of 10")
}

//Bonus
for (let i=1; i<11; i++) {
    console.log(`The value of i is: ${i} of 10`)
}

//Iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i=0; i<StarWars.length; i++) {
    console.log(StarWars[i])
}

for (let i=0; i<StarWars.length; i++) {
    console.log(StarWars[i] + " " + i)
}

//Bonus
for (let i=0; i<StarWars.length; i+=2) {
    console.log(StarWars[i])
}

