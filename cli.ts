import inquirer from "inquirer";

async function promptUser() {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "numberOne",
            message: "Kindly enter your first number:",
        },
        {
            type: "number",
            name: "numberTwo",
            message: "Kindly enter your second number:",
        },
        {
            type: "list",
            name: "operator",
            choices: ["+", "-", "*", "/"],
            message: "Select operator:",
        },
    ]);

    const { numberOne, numberTwo, operator } = answer;

    if (typeof numberOne === 'number' && typeof numberTwo === 'number' && operator) {
        let result: number = 0;

        if (operator === "+") {
            result = numberOne + numberTwo;
        } else if (operator === "-") {
            result = numberOne - numberTwo;
        } else if (operator === "*") {
            result = numberOne * numberTwo;
        } else if (operator === "/") {
            result = numberOne / numberTwo;
        }

        console.log(`Your Result is ${result}`);
    } else {
        console.log("Invalid input. Please enter valid numbers and select an operator.");
    }
}

// Call the async function to prompt the user
promptUser();
