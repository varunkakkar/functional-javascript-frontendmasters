// Create an object using bracket and dot notation that represents the characters and related data you may find in a car workshop.

var workshop = {};

workshop.owner = "Mr. Baljeet Pandey";

workshop['tools'] = [
    {
        type: "Mechanical",
        name: "Spanner"
    },
    {
        type: "Mechanical",
        name : "Wrench"
    },
    {
        type: "Electric",
        name: "D.C. Generator"
    }
];


workshop.name = [];
workshop.name[0] = "Baljeet Pandey Motor Works LLC";
workshop.name.push("M/s Baljeet Pandey Motor Works");
// ["Baljeet Pandey Motor Works LLC","M/s Baljeet Pandey Motor Works"]

//RECAP
/**
 * Dots - Strings ✅, Numbers ❌, Quotations ❌, Weird Characters ❌, Expressions ❌
 * Brackets - Strings ✅, Numbers ✅, Quotations ✅, Weird Characters ✅, Expressions ✅
 */
 
// Use Dots Because it saves time, Enhances Code Readability

/**
 * QUESTIONS - TODO WHEN FREE TO REFRESH
 * What is an Object ?
 * 
 * What is the difference between dot and Bracket Notation?
 * 
 * How do you add a property with a key that has special characters?
 * 
 * How do you add a property whose key and value are stored in different variable?
 * 
 * How do we loop through objects to acces the values?
 * 
 */