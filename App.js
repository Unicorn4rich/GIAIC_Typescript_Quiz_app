// Create Project for GIAIC Quiz
// 1. json objects quiz
// 2. syntax erorr, and type error, assignability error, strong and inferece type
// 3. const and let
// 4. modules
// 5. native Ecmascript modules
// 6. import inquirer EcmaScript modules
// 7. chalk
// 8. union literals and union data type
// 9. objects and objects aliased
// 10. structural typing object literals and nested object
// 11. intersection types
// 12. any, unknown, never types
// 13. explicit casting
// 14. enum and const enum
// 15. arrays
// 16. functions, function optional parameter, function default parameter, function rest parameter, functions overloads
// 17. aync, callback function, API promises
// 18. tuples
// From sir Asharib
// 1. veriables
// 2. modules
// 3. loops
// 4. js-ts
// 5. synchronous and asynchronus
// 6. arrays
import inquirer from 'inquirer';
import chalk from "chalk";
// Veriable Data_base
let Veriable_Data_Base = [];
console.log("\n");
console.log(chalk.bgGreen.bold.italic.whiteBright("\t WELCOME TO GIAIC TYPESCIPT QUIZ WORLD"));
console.log("\n");
// Start All Methods list from here
let Quiz = await inquirer.prompt([
    {
        name: "data",
        message: "Please select topic to continue Test Quiz",
        type: "list",
        choices: ["Veriables", "Modules", "Loops", "Js-Ts", "Synchronous & Asynchronous", "Arrays"]
    }
]);
switch (Quiz.data) {
    case "Veriables":
        Veriables();
        break;
}
//<---------------------------------------------End----------------------------------------------->
// Veriables Quiz
async function Veriables() {
    console.log("\n");
    console.log(chalk.bgGrey.bold.italic("\t Welcome To Veriables Test Quiz"));
    console.log("\n");
    // quiz 1    
    let veriables = await inquirer.prompt([
        {
            name: "ver",
            message: "Q.1 Which keyword is used to declare a variable that can be reassigned in JavaScript?",
            type: "list",
            choices: ["(a): let", "(b): const", "(c): var", "(d): static", "\n Check Results", "Exit"]
        },
    ]);
    if (veriables.ver === "(a): let") {
        console.log(`You choose a correct Answer:  ${chalk.bold.green(veriables.ver)}`);
    }
    else {
        console.log(`Your Answer is wrong!: ${chalk.bold.red(veriables.ver)}`);
        //  console.log("\n\n Correct Answer: ", chalk.green("(a): let") )
    }
    ;
    // user se liya hua data Array mein push kar rhy hain...
    console.log("\n");
    Veriable_Data_Base.push({
        Question: "Q.1 Which keyword is used to declare a variable that can be reassigned in JavaScript?",
        UserAnswer: veriables.ver,
        CorrectAnswer: "(a): let",
        Result: veriables.ver === "(a): let" ? "Correct" : "Wrong"
    });
    // filter karenge apne data ko taky hamen correct or wrong answer pata chal saken...
    let Correct_ans_count = Veriable_Data_Base.filter((item) => item.Result === "Correct").length;
    let Wrong_ans_count = Veriable_Data_Base.filter((item) => item.Result === "Wrong").length;
    // yahn ham total, correct, or wrong, answers ki length show krwa rhy hain 
    console.log("Total Questions:", chalk.white(Veriable_Data_Base.length));
    console.log(chalk.green.italic("Correct Answers:", Correct_ans_count));
    console.log(chalk.red.italic("Wrong Answers:", Wrong_ans_count));
    // quiz 2
    console.log("\n");
    let veriables2 = await inquirer.prompt([
        {
            name: "ver2",
            message: "Q.2 Which keyword is used to declare a variable with a block scope in JavaScript?",
            type: "list",
            choices: ["(a): global", "(b): static", "(c): var", "(d): let", "\n Check Results", "Exit"]
        },
    ]);
    if (veriables2.ver2 === "(d): let") {
        console.log(`You choose a correct Answer: ${chalk.bold.green(veriables2.ver2)}`);
    }
    else {
        console.log(`Your Answer is wrong!: ${chalk.bold.red(veriables2.ver2)}`);
    }
    ;
    // ans ka data main array mein push kar rhy hain;
    console.log("\n");
    Veriable_Data_Base.push({
        Question: "Q.2 Which keyword is used to declare a variable with a block scope in JavaScript?",
        UserAns: veriables2.ver2,
        CorrectAns: "(d): let",
        Result: veriables2.ver2 === "(d): let" ? "Correct" : "Wrong"
    });
    // main data base se filter ka method use kar ke ham Correct or Wrong answers ki length nijal rhy hain.
    let Correct_ans_Count2 = Veriable_Data_Base.filter((item) => item.Result === "Correct").length;
    let Wrong_ans_Count2 = Veriable_Data_Base.filter((item) => item.Result === "Wrong").length;
    // yahn ham total, correct, or wrong, answers ki length show krwa rhy hain 
    console.log("Total Questions:", chalk.white(Veriable_Data_Base.length));
    console.log(chalk.green.italic("Correct Answer:", Correct_ans_Count2));
    console.log(chalk.red.italic("Wrong Answer:", Wrong_ans_Count2));
    // Quiz 3
    console.log("\n");
    let veriable3 = await inquirer.prompt({
        name: "ver3",
        message: "Q.3 What does the 'const' keyword in JavaScript prevent?",
        type: "list",
        choices: ["(a): Redeclaration", "(b): Reassignment", "(c): Block scoping", "(d): Accessing global variables", "\n Check Results", "Exit"]
    });
    if (veriable3.ver3 === "(b): Reassignment") {
        console.log("You choose correct Answer: ", chalk.green.bold(veriable3.ver3));
    }
    else {
        console.log("Your answer is Wrong: ", chalk.red.bold(veriable3.ver3));
    }
    ;
    // main data base mein push kar rhy hain user answer ko
    Veriable_Data_Base.push({
        Question: "Q.3 What does the 'const' keyword in JavaScript prevent?",
        UserAns: veriable3.ver3,
        CorrectAns: "(b): Reassignment",
        Result: veriable3.ver3 === "(b): Reassignment" ? "Correct" : "Wrong"
    });
    // main data base se filter ka method use kar ke ham Correct or Wrong answers ki length nijal rhy hain.
    let Correct_ans_count3 = Veriable_Data_Base.filter((item) => item.Result === "Correct").length;
    let Wrong_ans_count3 = Veriable_Data_Base.filter((item) => item.Result === "Wrong").length;
    console.log("\n");
    // yahn ham total, correct, or wrong, answers ki length show krwa rhy hain 
    console.log("Total Questions: ", chalk.white(Veriable_Data_Base.length));
    console.log(chalk.green.italic("Correct Answers:", Correct_ans_count3));
    console.log(chalk.red.italic("Wrong Answers:", Wrong_ans_count3));
}
;
