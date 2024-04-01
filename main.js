#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.underline.blue("\t\tWelcome To ATM Machine\n\n"));
let myBalance = 10000;
let myPin = 2454;
let pinAns = await inquirer.prompt([{
        name: "pin",
        message: "\t\tEnter Your Pin Number : ",
        type: "number"
    }]);
if (pinAns.pin === myPin) {
    console.log(chalk.bold.green("\t\tCorrect Pin Code!!"));
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "\t\tPlease Select Option ?",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "\t\tEnter Your Amount ?",
                type: "number"
            }
        ]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log("\t\tYour remaining balance is : " + myBalance);
        }
        else {
            console.log(chalk.bold.red("\t\tInsufficent Balance"));
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.blueBright.bold("\t\tYour Total Balance Is : " + myBalance));
    }
    if (operationAns.operation === "Fast Cash") {
        let cashAns = await inquirer.prompt([{
                name: "cash",
                message: "Cash Amount",
                type: "list",
                choices: [2000, 4000, 6000]
            }]);
        if (cashAns.cash === 2000) {
            myBalance -= cashAns.cash;
            console.log(chalk.bold.greenBright("\t\tYour Remaining Balance is :" + myBalance));
        }
        if (cashAns.cash === 4000) {
            myBalance -= cashAns.cash;
            console.log("\t\tYour Remaining Balance is :" + myBalance);
        }
        if (cashAns.cash === 6000) {
            myBalance -= cashAns.cash;
            console.log("\t\tYour Remaining Balance is :" + myBalance);
        }
    }
}
else {
    console.log(chalk.bold.red("\t\tIncorrect Pin Code Please Try Again"));
}
