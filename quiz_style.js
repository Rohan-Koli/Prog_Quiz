  // document.addEventListener("DOMContentLoaded", function () {
        // document.getElementById('myForm').addEventListener('submit', function (event) {
        //     event.preventDefault();
        // rest of your code



        // var input = document.createElement("input");


        // input.setAttribute("type", "hidden");
        // input.setAttribute("id", "local_email");
        // input.setAttribute("name", "local_email");
        // input.setAttribute("value",localStorage.getItem('email'))


        // document.body.appendChild(input);
        const questions = [{
            question: "HTML stands for -",
            answers: [

                {
                    text: "HighText Machine Language",
                    correct: false
                },
                {
                    text: "HyperText Markup Language",
                    correct: true
                },
                {
                    text: "HyperText and links Markup Language",
                    correct: false
                },
                {
                    text: "None of these",
                    correct: false
                },
            ],
            type: "HTML"

        },
        {
            question: "The correct sequence of HTML tags for starting a webpage is -",
            answers: [

                {
                    text: "HTML, Head, Title, Body",
                    correct: true
                },
                {
                    text: "HTML, Head, Title, Body",
                    correct: false
                },
                {
                    text: "HTML, Body, Title, Headi",
                    correct: false
                },
                {
                    text: "Head, Title, HTML, body",
                    correct: false
                },
            ],
            type: "HTML"

        },
        {
            question: "Who is the father of HTML?",
            answers: [

                {
                    text: "Rasmus Lerdorf",
                    correct: false
                },
                {
                    text: "Brendan Eich",
                    correct: false
                },
                {
                    text: "Tim Berners-Lee",
                    correct: true
                },
                {
                    text: "Sergey Brin",
                    correct: false
                },
            ],
            type: "HTML"

        },
        {
            question: "What is HTML?",
            answers: [

                {
                    text: "HTML describes the structure of a webpage",
                    correct: false
                },
                {
                    text: "HTML is the standard markup language mainly used to create web pages",
                    correct: false
                },
                {
                    text: "HTML consists of a set of elements that helps the browser how to view the content",
                    correct: false
                },
                {
                    text: "All of the mentioned",
                    correct: true
                },
            ],
            type: "HTML"

        },
        {
            question: "In which part of the HTML metadata is contained?",
            answers: [

                {
                    text: "head tag",
                    correct: true
                },
                {
                    text: "body tag",
                    correct: false
                },
                {
                    text: "html tag",
                    correct: false
                },
                {
                    text: "title tag",
                    correct: false
                },
            ],
            type: "HTML"

        },
        {
            question: "Which element is used for or styling HTML5 layout?",
            answers: [

                {
                    text: "jQuery",
                    correct: false
                },
                {
                    text: "JavaScript",
                    correct: false
                },
                {
                    text: "PHP",
                    correct: false
                },
                {
                    text: " CSS",
                    correct: true
                },
            ],
            type: "HTML"

        },
        {
            question: "Which of the following extension is used to save an HTML file?",
            answers: [

                {
                    text: ".h",
                    correct: false
                },
                {
                    text: ".html",
                    correct: true
                },
                {
                    text: ".hl",
                    correct: false
                },
                {
                    text: ".hmtl",
                    correct: false
                },
            ],
            type: "HTML"

        },
        {
            question: "Which attribute is used to specify an alternate text for an image, in case the image cannot be displayed?",
            answers: [

                {
                    text: "src",
                    correct: false
                },
                {
                    text: "img-alt",
                    correct: false
                },
                {
                    text: "alt",
                    correct: true
                },
                {
                    text: "href",
                    correct: false
                },
            ],
            type: "HTML"

        },
        {
            question: "Which element is used to create an unordered list in HTML?",
            answers: [

                {
                    text: "OL",
                    correct: false
                },
                {
                    text: "UL",
                    correct: true
                },
                {
                    text: "LI",
                    correct: false
                },
                {
                    text: "None of these",
                    correct: false
                },
            ],
            type: "HTML"

        },
        {
            question: "Which element is used to create an ordered list in HTML?",
            answers: [

                {
                    text: "OL",
                    correct: true
                },
                {
                    text: "UL",
                    correct: false
                },
                {
                    text: "LI",
                    correct: false
                },
                {
                    text: "None of these",
                    correct: false
                },
            ],
            type: "HTML"

        },
        {
            question: "CSS stands for -",
            answers: [

                {
                    text: "Color and style sheets",
                    correct: false
                },
                {
                    text: "Cascading style sheets",
                    correct: true
                },
                {
                    text: "Cascade style sheets",
                    correct: false
                },
                {
                    text: "None of these",
                    correct: false
                },
            ],
            type: "CSS"

        },
        {
            question: "The property in CSS used to change the background color of an element is -",
            answers: [

                {
                    text: "background-color",
                    correct: true
                },
                {
                    text: "bgcolor",
                    correct: false
                },
                {
                    text: "color",
                    correct: false
                },
                {
                    text: "All of the above",
                    correct: false
                },
            ],
            type: "css"

        },
        {
            question: "Who is the father of HTML?",
            answers: [

                {
                    text: "Rasmus Lerdorf",
                    correct: false
                },
                {
                    text: "Brendan Eich",
                    correct: false
                },
                {
                    text: "Tim Berners-Lee",
                    correct: true
                },
                {
                    text: "Sergey Brin",
                    correct: false
                },
            ],
            type: "CSS"

        },
        {
            question: "The CSS property used to control the element's font-size is -",
            answers: [

                {
                    text: "text-size",
                    correct: false
                },
                {
                    text: "text-style",
                    correct: false
                },
                {
                    text: "font-size",
                    correct: true
                },
                {
                    text: "None of the aboved",
                    correct: false
                },
            ],
            type: "CSS"

        },
        {
            question: "Which of the following CSS property is used to set the background image of an element?",
            answers: [

                {
                    text: "background-image",
                    correct: true
                },
                {
                    text: "background-attachment",
                    correct: false
                },
                {
                    text: "background-color",
                    correct: false
                },
                {
                    text: "None of the above",
                    correct: false
                },
            ],
            type: "CSS"

        },
        {
            question: "Which of the following property is used as the shorthand property for the padding properties?",
            answers: [

                {
                    text: "padding-right",
                    correct: false
                },
                {
                    text: "padding-left",
                    correct: false
                },
                {
                    text: "padding",
                    correct: true
                },
                {
                    text: "All of the above",
                    correct: false
                },
            ],
            type: "CSS"

        },
        {
            question: "The CSS property used to make the text bold is -",
            answers: [

                {
                    text: "font: bold",
                    correct: false
                },
                {
                    text: "font-weight : bold",
                    correct: true
                },
                {
                    text: "weight: bold",
                    correct: false
                },
                {
                    text: "style: bold",
                    correct: false
                },
            ],
            type: "CSS"

        },
        {
            question: "Which of the following property is used as the shorthand property of margin properties?",
            answers: [

                {
                    text: "margin-right",
                    correct: false
                },
                {
                    text: "margin-left",
                    correct: false
                },
                {
                    text: "margin",
                    correct: true
                },
                {
                    text: "None of the abovef",
                    correct: false
                },
            ],
            type: "CSS"

        },
        {
            question: "The CSS property used to specify the transparency of an element is -",
            answers: [

                {
                    text: "filter",
                    correct: false
                },
                {
                    text: "opacity",
                    correct: true
                },
                {
                    text: "visibility",
                    correct: false
                },
                {
                    text: "overlay",
                    correct: false
                },
            ],
            type: "CSS"

        },
        {
            question: "How to select the elements with the class name 'example'?",
            answers: [

                {
                    text: ".example",
                    correct: true
                },
                {
                    text: "example",
                    correct: false
                },
                {
                    text: "#example",
                    correct: false
                },
                {
                    text: "None of these",
                    correct: false
                },
            ],
            type: "CSS"

        },
        {
            question: "What is the purpose of a closure in JavaScript?",
            answers: [

                {
                    text: "a) To enhance code readability",
                    correct: false
                },
                {
                    text: "b) To store private data",
                    correct: true
                },
                {
                    text: "c) To access variables outside of a function's scope",
                    correct: false
                },
                {
                    text: "d) To access variables outside of a function's scope",
                    correct: false
                },
            ],
            type: "JS"

        },
        {
            question: "What does the this keyword refer to in JavaScript?",
            answers: [

                {
                    text: "a) The current function's prototype",
                    correct: false
                },
                {
                    text: "b) The global object",
                    correct: false
                },
                {
                    text: "c) The object that is currently executing the JavaScript code",
                    correct: true
                },
                {
                    text: "d) The previous function in the call stack",
                    correct: false
                },
            ],
            type: "JS"

        },
        {
            question: "What does the term hoisting refer to in JavaScript?",
            answers: [

                {
                    text: "a) Automatic lifting of function declarations",
                    correct: true
                },
                {
                    text: "b) Moving variables to the bottom",
                    correct: false
                },
                {
                    text: "c) Storing data in cache",
                    correct: false
                },
                {
                    text: "d) Applying styles to elements",
                    correct: false
                },
            ],
            type: "JS"

        },
        {
            question: "What does the Promise object represent in JavaScript?",
            answers: [

                {
                    text: "a) Guaranteed value",
                    correct: false
                },
                {
                    text: "b) Immutable data structure",
                    correct: false
                },
                {
                    text: "c) Placeholder for value to be resolved",
                    correct: true
                },
                {
                    text: "d) Synchronous function call",
                    correct: false
                },
            ],
            type: "JS"

        },
        {
            question: "What is the purpose of the finally block in a try...catch statement?",
            answers: [

                {
                    text: "a) Execute code regardless of errors",
                    correct: true
                },
                {
                    text: "b) Catch errors within try block",
                    correct: false
                },
                {
                    text: "c) Execute code only if error occurs",
                    correct: false
                },
                {
                    text: "d) Execute code only if error occurs in catch",
                    correct: false
                },
            ],
            type: "JS"

        },
        {
            question: "What is the difference between == and === operators in JavaScript?",
            answers: [

                {
                    text: "a) == checks value, === checks value and type",
                    correct:true
                },
                {
                    text: "b) == checks strict equality, === checks loose equality",
                    correct: false
                },
                {
                    text: "c) == performs type coercion, === does not",
                    correct: false
                },
                {
                    text: "d) == compares references, === compares values",
                    correct: false
                },
            ],
            type: "JS"

        },
        {
            question: "What does event delegation refer to in JavaScript?",
            answers: [

                {
                    text: "a) Assigning multiple event listeners",
                    correct: false
                },
                {
                    text: "b) Handling events at higher level",
                    correct: true
                },
                {
                    text: "c) Triggering events programmatically",
                    correct: false
                },
                {
                    text: "d) Capturing events before reaching target",
                    correct: false
                },
            ],
            type: "JS"

        },
        {
            question: "What is the purpose of the Array.reduce() method in JavaScript?",
            answers: [

                {
                    text: "a) Filtering array elements",
                    correct: false
                },
                {
                    text: "b) Adding new elements to the array",
                    correct: false
                },
                {
                    text: "c) Reducing array to a single value",
                    correct: true
                },
                {
                    text: "d) Reversing the order of array elements",
                    correct: false
                },
            ],
            type: "JS"

        },
        {
            question: "What is the purpose of the typeof operator in JavaScript?",
            answers: [

                {
                    text: "a) Checking the type of a variable",
                    correct: true
                },
                {
                    text: "b) Converting variables to a specific type",
                    correct: false
                },
                {
                    text: "c) Declaring a variable",
                    correct: false
                },
                {
                    text: "d) Defining the scope of a variable",
                    correct: false
                },
            ],
            type: "JS"

        },
        {
            question: "What is the primary advantage of using arrow functions in JavaScript?",
            answers: [

                {
                    text: "a) Implicit return of values",
                    correct: true
                },
                {
                    text: "b) Ability to use this keyword",
                    correct: false
                },
                {
                    text: "c) Support for default function parameters",
                    correct: false
                },
                {
                    text: "d) Access to outer function's variables",
                    correct: false
                },
            ],
            type: "JS"

        },
        {
            question: "What is the purpose of the printf function in C?",
            answers: [

                {
                    text: "A) Reading input from the user",
                    correct: false
                },
                {
                    text: "B) Printing output to the console ",
                    correct: true
                },
                {
                    text: "C) Declaring variables",
                    correct: false
                },
                {
                    text: "D) Looping through an array",
                    correct: false
                },
            ],
            type: "C"

        },
        {
            question: "Which of the following is the correct syntax to declare an integer variable named num ?",
            answers: [

                {
                    text: "A) int num;",
                    correct: true
                },
                {
                    text: "b) Ability to use this keyword",
                    correct: false
                },
                {
                    text: "c) Support for default function parameters",
                    correct: false
                },
                {
                    text: "d) Access to outer function's variables",
                    correct: false
                },
            ],
            type: "C"

        },
        {
            question: "What does the %d format specifier indicate when used with printf in C?",
            answers: [

                {
                    text: "A) Double",
                    correct: false
                },
                {
                    text: "B) Character",
                    correct: false
                },
                {
                    text: "C) Integer ",
                    correct: true
                },
                {
                    text: "D) String",
                    correct: false
                },
            ],
            type: "C"

        },
        {
            question: "What is the purpose of the scanf function in C?",
            answers: [

                {
                    text: "A) Printing output to the console",
                    correct: false
                },
                {
                    text: "B) Reading input from the user",
                    correct: true
                },
                {
                    text: "C) Declaring variables",
                    correct: false
                },
                {
                    text: "D) Looping through an array",
                    correct: false
                },
            ],
            type: "C"

        },
        {
            question: "Which data type in C is used to store decimal numbers?",
            answers: [

                {
                    text: "A) int",
                    correct: false
                },
                {
                    text: "B) float",
                    correct: true
                },
                {
                    text: "C) double",
                    correct: false
                },
                {
                    text: "D) char",
                    correct: false
                },
            ],
            type: "C"

        },
        {
            question: "Which of the following is a valid way to declare and initialize a constant in C?",
            answers: [

                {
                    text: "A) const PI = 3.14;",
                    correct: false
                },
                {
                    text: "B) #define PI 3.14",
                    correct: true
                },
                {
                    text: "C) final float PI = 3.14;",
                    correct: false
                },
                {
                    text: "D) const float PI = 3.14;",
                    correct: false
                },
            ],
            type: "C"

        },
        {
            question: "What is the purpose of the break statement in C?",
            answers: [

                {
                    text: "A) To exit the loop",
                    correct: true
                },
                {
                    text: "B) To skip the current iteration",
                    correct: false
                },
                {
                    text: "C) To continue to the next iteration",
                    correct: false
                },
                {
                    text: "D) To terminate the program",
                    correct: false
                },
            ],
            type: "C"

        },
        {
            question: "Which operator is used to access the value stored in a pointer variable in C?",
            answers: [

                {
                    text: "A) *",
                    correct: false
                },
                {
                    text: "B) &",
                    correct: false
                },
                {
                    text: "C) -> ",
                    correct: true
                },
                {
                    text: "D) ::",
                    correct: false
                },
            ],
            type: "C"

        },
        {
            question: "Which of the following is the correct way to define a function in C that returns an integer and takes two integer arguments?",
            answers: [

                {
                    text: "A) int function(int a, int b) {}",
                    correct: true
                },
                {
                    text: "B) function(int a, int b) int {}",
                    correct: false
                },
                {
                    text: "C) void function(int a, int b) {}",
                    correct: false
                },
                {
                    text: "D) function(int a, int b) {}",
                    correct: false
                },
            ],
            type: "C"

        },
        {
            question: "What is the primary advantage of using arrow functions in JavaScript?",
            answers: [

                {
                    text: "A) Calculates the length of a string",
                    correct: true
                },
                {
                    text: "B) Converts a string to lowercase",
                    correct: false
                },
                {
                    text: "C) Prints a string",
                    correct: false
                },
                {
                    text: "D) Reverses a string",
                    correct: false
                },
            ],
            type: "C"

        },
        {
            question: "What is the purpose of the cout object in C++ ?",
            answers: [

                {
                    text: "A) Reading input from the user",
                    correct: false
                },
                {
                    text: "B) Declaring variables",
                    correct: false
                },
                {
                    text: "C) Printing output to the console",
                    correct: true
                },
                {
                    text: "D) Looping through an array",
                    correct: false
                },
            ],
            type: "C++"

        },
        {
            question: "What does the cin object in C++ do?",
            answers: [

                {
                    text: "A) Print output to the console",
                    correct: false
                },
                {
                    text: "B) Read input from the user",
                    correct: true
                },
                {
                    text: "C) Declare variables",
                    correct: false
                },
                {
                    text: "D) Loop through an array",
                    correct: false
                },
            ],
            type: "C++"

        },
        {
            question: "What is the purpose of the new operator in C++? ?",
            answers: [

                {
                    text: "A) Allocate memory dynamically ",
                    correct: true
                },
                {
                    text: "B) Print output to the console",
                    correct: false
                },
                {
                    text: "C) Declare variables",
                    correct: false
                },
                {
                    text: "D) Looping through an array",
                    correct: false
                },
            ],
            type: "C++"

        },
        {
            question: "Which of the following is a correct way to declare and initialize a constant in C++?",
            answers: [

                {
                    text: "A) const PI = 3.14;",
                    correct: false
                },
                {
                    text: "B) #define PI 3.14",
                    correct: false
                },
                {
                    text: "C) final float PI = 3.14;",
                    correct: false
                },
                {
                    text: "D) const float PI = 3.14;",
                    correct: true
                },
            ],
            type: "C++"

        },
        {
            question: "What is the correct way to allocate memory dynamically in C++?",
            answers: [

                {
                    text: "A) malloc()",
                    correct: false
                },
                {
                    text: "B) new",
                    correct: true
                },
                {
                    text: "C) allocate()",
                    correct: false
                },
                {
                    text: "D) mallocate()",
                    correct: false
                },
            ],
            type: "C++"

        },
        {
            question: "Which function is used to open a file in C++?",
            answers: [

                {
                    text: "A) open()",
                    correct: false
                },
                {
                    text: "B) read()",
                    correct: false
                },
                {
                    text: "C) fopen()",
                    correct: false
                },
                {
                    text: "D) ifstream",
                    correct: true
                },
            ],
            type: "C++"

        },
        {
            question: "What is the purpose of the void keyword in a function declaration in C++?",
            answers: [

                {
                    text: "A) Indicate that the function does not return any value",
                    correct: true
                },
                {
                    text: "B) Indicate that the function takes no arguments",
                    correct: false
                },
                {
                    text: "C) Specify the return type of the functione",
                    correct: false
                },
                {
                    text: "D) Specify the access level of the function",
                    correct: false
                },
            ],
            type: "C++"

        },
        {
            question: "What does the strcmp() function in C++ do?",
            answers: [

                {
                    text: "A) Concatenate two strings",
                    correct: false
                },
                {
                    text: "B) Compare two strings",
                    correct: true
                },
                {
                    text: "C) Copy one string to another",
                    correct: false
                },
                {
                    text: "D) Search for a substring within a string",
                    correct: false
                },
            ],
            type: "C++"

        },
        {
            question: "Which header file is required for using dynamic memory allocation functions in C++ ?",
            answers: [

                {
                    text: "A) <stdlib.h>",
                    correct: false
                },
                {
                    text: "B) <stdio.h>",
                    correct: false
                },
                {
                    text: "C) <string.h>",
                    correct: false
                },
                {
                    text: "D) <iostream> ",
                    correct: true
                },
            ],
            type: "C++"

        },
        {
            question: "What does the strlen() function in C++ do?",
            answers: [

                {
                    text: "A) Calculate the length of a string",
                    correct: true
                },
                {
                    text: "B) Convert a string to lowercase",
                    correct: false
                },
                {
                    text: "C) Print a string",
                    correct: false
                },
                {
                    text: "D) None of the above",
                    correct: false
                },
            ],
            type: "C++"

        },
        {
            question: "Which of the following is not a primitive data type in Go?",
            answers: [

                {
                    text: "A) int",
                    correct: false
                },
                {
                    text: "B) float",
                    correct: false
                },
                {
                    text: "C) string",
                    correct: false
                },
                {
                    text: "D) array ",
                    correct: true
                },
            ],
            type: "GO"

        },
        {
            question: "What is the keyword used to declare a variable in Go?",
            answers: [

                {
                    text: "A) var",
                    correct: true
                },
                {
                    text: "B) let",
                    correct: false
                },
                {
                    text: "C) variable",
                    correct: false
                },
                {
                    text: "D) def",
                    correct: false
                },
            ],
            type: "GO"

        },
        {
            question: "What is the correct way to declare and initialize a variable in Go?",
            answers: [

                {
                    text: "A) var x int = 5;",
                    correct: false
                },
                {
                    text: "B) x := 5;",
                    correct: true
                },
                {
                    text: "C) int x = 5;",
                    correct: false
                },
                {
                    text: "D) let x = 5;",
                    correct: false
                },
            ],
            type: "GO"

        },
        {
            question: "What is the purpose of the make function in Go?",
            answers: [

                {
                    text: "A) Allocate memory dynamically",
                    correct: false
                },
                {
                    text: "B) Create a new variable",
                    correct: false
                },
                {
                    text: "C) Initialize a map, slice, or channel ",
                    correct: true
                },
                {
                    text: "D) Read input from the user",
                    correct: false
                },
            ],
            type: "GO"

        },
        {
            question: "What is the value of len('hello') in Go?",
            answers: [

                {
                    text: "A) 4",
                    correct: false
                },
                {
                    text: "B) 5",
                    correct: true
                },
                {
                    text: "C) 6",
                    correct: false
                },
                {
                    text: "D) 7",
                    correct: false
                },
            ],
            type: "GO"

        },
        {
            question: "What is the purpose of the range keyword in Go?",
            answers: [

                {
                    text: "A) Iterate over elements in a slice, array, map, or string ",
                    correct: true
                },
                {
                    text: "B) Declare a new variable",
                    correct: false
                },
                {
                    text: "C) Create a new slice",
                    correct: false
                },
                {
                    text: "D) Initialize a variable",
                    correct: false
                },
            ],
            type: "GO"

        },
        {
            question: "Which keyword is used to define a function in Go?",
            answers: [

                {
                    text: "A) func",
                    correct: true
                },
                {
                    text: "B) function",
                    correct: false
                },
                {
                    text: "C) def",
                    correct: false
                },
                {
                    text: "D) fun",
                    correct: false
                },
            ],
            type: "GO"

        },
        {
            question: "What is the correct way to allocate memory dynamically in Go?",
            answers: [

                {
                    text: "A) new()",
                    correct: false
                },
                {
                    text: "B) allocate()",
                    correct: false
                },
                {
                    text: "C) make()",
                    correct: false
                },
                {
                    text: "D) make() ",
                    correct: true
                },
            ],
            type: "GO"

        },
        {
            question: "Which of the following is a correct way to define a function in Go that returns an integer and takes two integer arguments?",
            answers: [

                {
                    text: "A) func add(a, b int) {}",
                    correct: false
                },
                {
                    text: "B) func add(a int, b int) {}",
                    correct: false
                },
                {
                    text: "C) func add(a, b int) int {}",
                    correct: true
                },
                {
                    text: "D) function add(a int, b int) {}",
                    correct: false
                },
            ],
            type: "GO"

        },
        {
            question: "Which package is used for handling input/output operations in Go?",
            answers: [

                {
                    text: "A) fmt ",
                    correct: true
                },
                {
                    text: "B) io",
                    correct: false
                },
                {
                    text: "C) os",
                    correct: false
                },
                {
                    text: "D) bufio",
                    correct: false
                },
            ],
            type: "GO"

        },
        {
            question: "In Java, which of the following keywords is used to explicitly call the superclass constructor?",
            answers: [

                {
                    text: "A) super()",
                    correct: false
                },
                {
                    text: "B) this()",
                    correct: false
                },
                {
                    text: "C) super ",
                    correct: true
                },
                {
                    text: "D) parent()",
                    correct: false
                },
            ],
            type: "JAVA"

        },
        {
            question: "What is the difference between == and .equals() when comparing objects in Java?",
            answers: [

                {
                    text: "A) They are identical; both are used to compare objects.",
                    correct: false
                },
                {
                    text: "B) == compares object references, while .equals() compares object contents.",
                    correct: true
                },
                {
                    text: "C) .equals() compares object references, while == compares object contents.",
                    correct: false
                },
                {
                    text: "D) .equals() is used for primitive data types, while == is used for objects.",
                    correct: false
                },
            ],
            type: "JAVA"

        },
        {
            question: "In Java, which of the following keywords is used to prevent a method from being overridden in subclasses?",
            answers: [

                {
                    text: "A) final",
                    correct: true
                },
                {
                    text: "B) static",
                    correct: false
                },
                {
                    text: "C) private",
                    correct: false
                },
                {
                    text: "D) abstract",
                    correct: false
                },
            ],
            type: "JAVA"

        },
        {
            question: "In Java, what is the purpose of the assert keyword?",
            answers: [

                {
                    text: "A) It is used to check for syntax errors during compilation.",
                    correct: false
                },
                {
                    text: "B) It is used to declare a constant variable.",
                    correct: false
                },
                {
                    text: "C) It is used to perform assertion checking during runtime. ",
                    correct: true
                },
                {
                    text: "D) It is used to define a method that must be implemented by subclasses.",
                    correct: false
                },
            ],
            type: "JAVA"

        },
        {
            question: "Which of the following is NOT a valid declaration of a Java interface?",
            answers: [

                {
                    text: "A) interface MyInterface {}",
                    correct: false
                },
                {
                    text: "B) public interface MyInterface {}",
                    correct: true
                },
                {
                    text: "C) abstract interface MyInterface {}",
                    correct: false
                },
                {
                    text: "D) interface MyInterface extends AnotherInterface {}",
                    correct: false
                },
            ],
            type: "JAVA"

        },
        {
            question: "In Java, what does the strictfp keyword do?",
            answers: [

                {
                    text: "A) It restricts access to a method or variable within the same package",
                    correct: false
                },
                {
                    text: "B) It indicates that a class should be implemented strictly following a predefined contract.",
                    correct: false
                },
                {
                    text: "C) It enforces strict floating-point precision behavior across platforms.",
                    correct: true
                },
                {
                    text: "D) It specifies that a method cannot be overridden in subclasses.",
                    correct: false
                },
            ],
            type: "JAVA"

        },
        {
            question: "Which of the following is true about the java.lang.Object class in Java?",
            answers: [

                {
                    text: "A) It is the root class for all classes in Java.",
                    correct: true
                },
                {
                    text: "B) It cannot be subclassed.",
                    correct: false
                },
                {
                    text: "C) It does not contain any methods.",
                    correct: false
                },
                {
                    text: "D) It is not possible to call methods on objects of this class.",
                    correct: false
                },
            ],
            type: "JAVA"

        },
        {
            question: "What is the purpose of the try-catch block in Java?",
            answers: [

                {
                    text: "A) Print output to the console",
                    correct: false
                },
                {
                    text: "B) Handle exceptions",
                    correct: true
                },
                {
                    text: "C) Declare variables",
                    correct: false
                },
                {
                    text: "D) Loop through an array",
                    correct: false
                },
            ],
            type: "JAVA"

        },
        {
            question: "Which keyword is used to import packages in Java?",
            answers: [

                {
                    text: "A) package",
                    correct: false
                },
                {
                    text: "B) include",
                    correct: false
                },
                {
                    text: "C) import ",
                    correct: true
                },
                {
                    text: "D) using",
                    correct: false
                },
            ],
            type: "JAVA"

        },
        {
            question: "What is the value of str.length() if str is a string containing 'hello' in Java?",
            answers: [

                {
                    text: "A) 4",
                    correct: false
                },
                {
                    text: "B) 5",
                    correct: true
                },
                {
                    text: "C) 6",
                    correct: false
                },
                {
                    text: "D) 7",
                    correct: false
                },
            ],
            type: "JAVA"

        },
        {
            question: "What does PHP stand for?",
            answers: [

                {
                    text: "A) Personal Hypertext Processor",
                    correct: false
                },
                {
                    text: "B) Pretext Hypertext Processor",
                    correct: false
                },
                {
                    text: "C) PHP: Hypertext Preprocessor ",
                    correct: true
                },
                {
                    text: "D) Pre-processed Hypertext Pages",
                    correct: false
                },
            ],
            type: "PHP"

        },
        {
            question: "Which function is used to output text in PHP?",
            answers: [

                {
                    text: "A) echo",
                    correct: true
                },
                {
                    text: "B) print",
                    correct: false
                },
                {
                    text: "C) printf",
                    correct: false
                },
                {
                    text: "D) writeln",
                    correct: false
                },
            ],
            type: "PHP"

        },
        {
            question: "Which of the following data types is not supported in PHP?",
            answers: [

                {
                    text: "A) integer",
                    correct: false
                },
                {
                    text: "B) double",
                    correct: false
                },
                {
                    text: "C) char",
                    correct: false
                },
                {
                    text: "D) float ",
                    correct: true
                },
            ],
            type: "PHP"

        },
        {
            question: "Which of the following is the correct way to start a single-line comment in PHP?",
            answers: [

                {
                    text: "A) //",
                    correct: false
                },
                {
                    text: "B) #",
                    correct: true
                },
                {
                    text: "C) --",
                    correct: false
                },
                {
                    text: "D) /*",
                    correct: false
                },
            ],
            type: "PHP"

        },
        {
            question: "How do you end a PHP statement?",
            answers: [

                {
                    text: "A) With a semicolon (;) ",
                    correct: true
                },
                {
                    text: "B) With a colon (:)",
                    correct: false
                },
                {
                    text: "C) With a comma (,)",
                    correct: false
                },
                {
                    text: "D) With a period (.)",
                    correct: false
                },
            ],
            type: "PHP"

        },
        {
            question: "Which PHP function is used to find the length of a string?",
            answers: [

                {
                    text: "A) str_length",
                    correct: false
                },
                {
                    text: "B) string_length",
                    correct: false
                },
                {
                    text: "C) strlen",
                    correct: true
                },
                {
                    text: "D) len",
                    correct: false
                },
            ],
            type: "PHP"

        },
        {
            question: "What does the $_POST superglobal variable contain in PHP?",
            answers: [

                {
                    text: "A) Cookies",
                    correct: false
                },
                {
                    text: "B) Session data",
                    correct: false
                },
                {
                    text: "C) Form data sent via POST method",
                    correct: true
                },
                {
                    text: "D) Query parameters",
                    correct: false
                },
            ],
            type: "PHP"

        },
        {
            question: "Which PHP function is used to redirect the user to a different web page?",
            answers: [

                {
                    text: "A) header()",
                    correct: true
                },
                {
                    text: "B) redirect()",
                    correct: false
                },
                {
                    text: "C) forward()",
                    correct: false
                },
                {
                    text: "D) location()",
                    correct: false
                },
            ],
            type: "PHP"

        },
        {
            question: "Which of the following is used to define a constant in PHP?",
            answers: [

                {
                    text: "A) define() ",
                    correct: true
                },
                {
                    text: "B) const()",
                    correct: false
                },
                {
                    text: "C) var()",
                    correct: false
                },
                {
                    text: "D) constant()",
                    correct: false
                },
            ],
            type: "PHP"

        },
        {
            question: "What does the json_encode() function do in PHP?",
            answers: [

                {
                    text: "A) Decodes a JSON string into a PHP variable",
                    correct: false
                },
                {
                    text: "B) Encodes a PHP variable into a JSON string",
                    correct: true
                },
                {
                    text: "C) Checks if a string is valid JSON",
                    correct: false
                },
                {
                    text: "D) Converts a PHP array into a JSON string",
                    correct: false
                },
            ],
            type: "PHP"

        },
        {
            question: "What does the print() function do in Python?",
            answers: [

                {
                    text: "a) Reads user input ",
                    correct: false
                },
                {
                    text: "b) Displays output to the console",
                    correct: true
                },
                {
                    text: "c) Performs mathematical calculations",
                    correct: false
                },
                {
                    text: "d) Executes a loop",
                    correct: false
                },
            ],
            type: "PYTHON"

        },
        {
            question: "Which of the following data types is mutable in Python?",
            answers: [

                {
                    text: "a) Tuple",
                    correct: false
                },
                {
                    text: "b) String",
                    correct: false
                },
                {
                    text: "c) List",
                    correct: true
                },
                {
                    text: "d) Set",
                    correct: false
                },
            ],
            type: "PYTHON"

        },
        {
            question: "What is the correct way to declare a comment in Python?",
            answers: [

                {
                    text: "a) // This is a comment ",
                    correct: false
                },
                {
                    text: "b) # This is a comment",
                    correct: true
                },
                {
                    text: "c) /* This is a comment */",
                    correct: false
                },
                {
                    text: "d) <!-- This is a comment -->",
                    correct: false
                },
            ],
            type: "PYTHON"

        },
        {
            question: "Which of the following statements is true about Python indentation?",
            answers: [

                {
                    text: "a) Indentation is optional",
                    correct: false
                },
                {
                    text: "b) Python uses tabs for indentation",
                    correct: false
                },
                {
                    text: "c) Indentation doesn't affect code execution",
                    correct: false
                },
                {
                    text: "d) Indentation defines the block of code",
                    correct: true
                },
            ],
            type: "PYTHON"

        },
        {
            question: "What does the range() function in Python return?",
            answers: [

                {
                    text: "a) A list of integers ",
                    correct: false
                },
                {
                    text: "b) A generator object",
                    correct: true
                },
                {
                    text: "c) A tuple of integers",
                    correct: false
                },
                {
                    text: "d) A dictionary of integers",
                    correct: false
                },
            ],
            type: "PYTHON"

        },
        {
            question: "Which of the following is not a valid variable name in Python?",
            answers: [

                {
                    text: "a) _variable",
                    correct: false
                },
                {
                    text: "b) 1st_variable",
                    correct: true
                },
                {
                    text: "c) variable_name",
                    correct: false
                },
                {
                    text: "d) variableName",
                    correct: false
                },
            ],
            type: "PYTHON"

        },
        {
            question: "What is the correct way to open a file named data.txt in Python for reading?",
            answers: [

                {
                    text: "a) open('data.txt', 'w')",
                    correct: false
                },
                {
                    text: "b) open('data.txt', 'r')",
                    correct: true
                },
                {
                    text: "c) open('data.txt', 'a')",
                    correct: false
                },
                {
                    text: "d) open('data.txt', 'rb')",
                    correct: false
                },
            ],
            type: "PYTHON"

        },
        {
            question: "Which of the following is a method for removing an element from a list in Python?",
            answers: [

                {
                    text: "a) remove()",
                    correct: false
                },
                {
                    text: "b) delete()",
                    correct: false
                },
                {
                    text: "c) pop()",
                    correct: true
                },
                {
                    text: "d) discard()",
                    correct: false
                },
            ],
            type: "PYTHON"

        },
        {
            question: "Which of the following is not a valid comparison operator in Python?",
            answers: [

                {
                    text: "a) !=",
                    correct: false
                },
                {
                    text: "b) ==",
                    correct: false
                },
                {
                    text: "c) < >",
                    correct: true
                },
                {
                    text: "d) <=",
                    correct: false
                },
            ],
            type: "PYTHON"

        },
        {
            question: "What does the strip() function do in Python?",
            answers: [

                {
                    text: "a) Removes leading and trailing whitespaces",
                    correct: true
                },
                {
                    text: "b) Removes a specified character from the beginning and end of a string",
                    correct: false
                },
                {
                    text: "c) Splits a string into a list of substrings",
                    correct: false
                },
                {
                    text: "d) None of the above",
                    correct: false
                },
            ],
            type: "PYTHON"

        },


    ];
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    var scoreElement = document.getElementById("score");
    var question_attempt = document.getElementById("question_attempt");
    document.getElementById("local_email").value = localStorage.getItem("email");
    // document.getElementById("fname").value = localStorage.getItem("name");
    document.getElementById("fname").value=localStorage.getItem("name");
    document.getElementById("subject").value = localStorage.getItem("quiz");
    const submit = document.getElementById("submit");
    var question_no;
    var ele = document.getElementById('timer');
    var timer;
    let currentQuestionIndex = 0;
    let score = 0;
    

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        question_no = 0;
        showQuestion();
        
    }

    function restarttimer(){
        clearInterval(timer);
        var sec =0;
        timer = setInterval(()=>{
            ele.innerHTML ="00: "+sec;
            sec++;
            if(sec>=60){
                handleNextButton();
                sec=0;
            }
        },1000);
    }
    restarttimer();

    function showQuestion() {
        resetState();

        // console.log(quiz_name1)
        
        
        
        // ele.style.display="block";
        

        // restarttimer();
        let currentQuestion = questions[currentQuestionIndex];
        console.log("Current Question type = ", currentQuestion.type)
        console.log("quiz name = ", localStorage.getItem("quiz"));
        if (currentQuestion.type == localStorage.getItem("quiz")) {
            let questionNo = currentQuestionIndex + 1;

            questionElement.innerHTML = (question_no + 1) + ". " + currentQuestion.question;

            currentQuestion.answers.forEach(answer => {
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                answerButtons.appendChild(button);
                if (answer.correct) {
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener("click", selectAnswer);
            });
            question_no = question_no + 1;
            
        } else {
            handleNextButton();
        }





    }

    function resetState() {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }

    function showScore() {
        
        resetState();
        clearInterval(timer);
        questionElement.innerHTML = `You scored ${score} out of ${question_no}!!!`;
        // nextButton.innerHTML = "Play Again";
        nextButton.style.display = "hidden";
        
        // clearInterval(timer);
        // var local_email = localStorage.getItem("email");
        // alert(score);
        // alert(localStorage.getItem("email"));
        // alert(question_no);
        // nextButton.addEventListener("click",startQuiz());
        try {
            function passValue() {
                scoreElement.value = score;
                question_attempt.value = question_no;
                // local_email.value = localStorage.getItem("email");
            }
            passValue();;
        } catch (err) {
            // Block of code to handle errors
            console.error(err.message);
        }
        // alert(scoreElement.value);
        // alert(question_attempt.value);
        // alert(local_email.value)


    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            console.log("currentquestionindes = ", currentQuestionIndex);
            console.log("question.length = ", questions.length);
            showQuestion();
        } else {
            showScore();
        }
    }

    nextButton.addEventListener("click", () => {
        // clearInterval(timer);
        // ele.style.display="none";
        
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
            restarttimer();
            
        }
    })

    startQuiz();


    var quiz_name1 = localStorage.getItem("quiz")
    document.getElementById("h1").textContent = quiz_name1
    // console.log("Quiz_name = ",quiz_name1 )
    if (quiz_name1 == "HTML") {

    } else if (quiz_name1 == "CSS") {

    } else if (quiz_name1 == "JS") {

    } else if (quiz_name1 == "JAVA") {

    } else if (quiz_name1 == "PYTHON") {

    } else if (quiz_name1 == "C++") {

    } else if (quiz_name1 == "C") {

    } else if (quiz_name1 == "PHP") {

    } else if (quiz_name1 == "GO") {

    }
    console.log(quiz_name1)
    console.log("user email = ", localStorage.getItem('email'));
    // });
    // });