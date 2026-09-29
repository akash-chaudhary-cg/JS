// // ============================================
// // JAVASCRIPT ASSIGNMENT
// // Variables and Data Types
// // ============================================

// // Q1. Variable Declaration Practice

// // var
// var name = "Shivam";

// // let
// let age = 18;

// // const
// const PI = 3.14159;

// console.log("Q1 - Name:", name);
// console.log("Q1 - Age:", age);
// console.log("Q1 - PI:", PI);


// // ============================================
// // Q2. Changing and Not Changing Values
// // ============================================

// let score = 0;

// console.log("\nQ2 - Initial score:", score);

// score += 10;
// console.log("After adding 10:", score);

// score += 5;
// console.log("After adding 5:", score);

// score -= 3;
// console.log("After subtracting 3:", score);


// // const cannot be changed
// const maxScore = 100;

// console.log("Maximum score:", maxScore);

// // Uncomment the line below to see the error
// // maxScore = 120;


// // ============================================
// // Q3. Primitive Data Types
// // ============================================

// let myNumber = 42;
// let myDecimal = 3.14;
// let myText = "Hello";
// let isReady = true;
// let notReady = false;
// let nothing;
// let emptyValue = null;
// let myBigInt = 123456789012345678901234567890n;

// console.log("\nQ3 - Primitive Data Types");

// console.log(
//     "myNumber:",
//     myNumber,
//     "Type:",
//     typeof myNumber
// );

// console.log(
//     "myDecimal:",
//     myDecimal,
//     "Type:",
//     typeof myDecimal
// );

// console.log(
//     "myText:",
//     myText,
//     "Type:",
//     typeof myText
// );

// console.log(
//     "isReady:",
//     isReady,
//     "Type:",
//     typeof isReady
// );

// console.log(
//     "notReady:",
//     notReady,
//     "Type:",
//     typeof notReady
// );

// console.log(
//     "nothing:",
//     nothing,
//     "Type:",
//     typeof nothing
// );

// console.log(
//     "emptyValue:",
//     emptyValue,
//     "Type:",
//     typeof emptyValue
// );

// console.log(
//     "myBigInt:",
//     myBigInt,
//     "Type:",
//     typeof myBigInt
// );


// // ============================================
// // Q4. Understanding undefined vs null
// // ============================================

// let x;
// let y = null;

// console.log("\nQ4 - undefined vs null");

// console.log("x =", x);
// console.log("y =", y);

// console.log("typeof x:", typeof x);
// console.log("typeof y:", typeof y);

// console.log("x == y:", x == y);
// console.log("x === y:", x === y);

// /*
// Explanation:

// undefined:
// A variable is undefined when it has been declared
// but no value has been assigned to it.

// Example:
// let x;

// null:
// null is used when we intentionally want to represent
// an empty or missing value.

// Example:
// let y = null;
// */


// // ============================================
// // Q5. Objects, Arrays, and Functions
// // ============================================


// // ---------- Part A: Object ----------

// let student = {
//     name: "Darshit",
//     age: 18,
//     isEnrolled: true
// };

// console.log("\nQ5 - Object");

// console.log("Whole student object:", student);

// console.log("Student name:", student.name);

// console.log("Student age:", student.age);


// // ---------- Part B: Array ----------

// let numbers = [1, 2, 3, 4, 5];

// let mixed = [1, "hello", true, null];

// console.log("\nQ5 - Array");

// console.log("First number:", numbers[0]);

// console.log("Last number:", numbers[numbers.length - 1]);

// console.log("Mixed array:", mixed);

// /*
// It is better to keep arrays with a single data type
// because it makes the data easier to understand,
// process and maintain.
// */


// // ---------- Part C: Function ----------

// function greet(name) {
//     return "Hello, " + name + "!";
// }

// let message1 = greet("Darshit");
// let message2 = greet("Rahul");

// console.log("\nQ5 - Function");

// console.log("Message 1:", message1);
// console.log("Message 2:", message2);


// // ============================================
// // Q6. Using typeof Operator
// // ============================================

// let a = 10;
// let b = "10";
// let c = true;
// let d;
// let e = null;
// let f = {
//     name: "Ali"
// };
// let g = [1, 2, 3];
// let h = function() {
//     return 5;
// };

// console.log("\nQ6 - typeof Operator");

// console.log("a =", a, "Type:", typeof a);
// console.log("b =", b, "Type:", typeof b);
// console.log("c =", c, "Type:", typeof c);
// console.log("d =", d, "Type:", typeof d);
// console.log("e =", e, "Type:", typeof e);
// console.log("f =", f, "Type:", typeof f);
// console.log("g =", g, "Type:", typeof g);
// console.log("h =", h, "Type:", typeof h);

// /*
// Answer:

// typeof e gives "object" even though e is null.

// typeof h gives "function".
// */


// // ============================================
// // Q7. Variable Naming Rules
// // ============================================


// // Valid variable names

// let firstName = "Darshit";

// let _private = "Private";

// let $element = "Element";

// let user123 = "User";

// console.log("\nQ7 - Valid Variable Names");

// console.log("firstName:", firstName);
// console.log("_private:", _private);
// console.log("$element:", $element);
// console.log("user123:", user123);


// // Invalid variable names

// // let 123user = "User";
// // Invalid because a variable name cannot start with a number.

// // let my-var = "Hello";
// // Invalid because hyphen (-) is not allowed in variable names.

// // let function = "Hello";
// // Invalid because "function" is a reserved JavaScript keyword.


// // ============================================
// // Q8. Declaration and Assignment Practice
// // ============================================


// // Declare without assigning a value

// let message;

// console.log("\nQ8 - Declaration and Assignment");

// console.log("Message before assignment:", message);


// // Assign a value later

// message = "Hello, World!";

// console.log("Message after assignment:", message);


// // Declare and assign in one line

// let studentName = "Alice";

// let studentAge = 25;

// let isStudent = true;


// // Constant

// const MAX_USERS = 100;


// // Print all variables

// console.log("Name:", studentName);

// console.log("Age:", studentAge);

// console.log("Is Student:", isStudent);

// console.log("Maximum Users:", MAX_USERS);


// // ============================================
// // Q9. Best Practices Refactoring
// // ============================================


// /*
// Bad code:

// let x;
// let a = 1, b = 2, c = 3;
// let pi = 3.14159;
// let username = "John";
// let itemcount = 0;
// */


// // Improved code

// let count = 0;
// // Renamed x to count and gave it a meaningful default value.


// let firstNumber = 1;
// // Renamed a to firstNumber.


// let secondNumber = 2;
// // Renamed b to secondNumber.


// let thirdNumber = 3;
// // Renamed c to thirdNumber.


// const PI_VALUE = 3.14159;
// // Changed pi from let to const because its value should not change.
// // Used an uppercase constant name.


// let userName = "John";
// // Changed username to userName using camelCase.


// let itemCount = 0;
// // Changed itemcount to itemCount using camelCase.


// console.log("\nQ9 - Improved Code");

// console.log("Count:", count);

// console.log("First Number:", firstNumber);

// console.log("Second Number:", secondNumber);

// console.log("Third Number:", thirdNumber);

// console.log("PI:", PI_VALUE);

// console.log("User Name:", userName);

// console.log("Item Count:", itemCount);