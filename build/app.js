#! /usr/bin/env node
import inquirer from "inquirer";
let run = true;
while (run) {
    inquirer
        .prompt({
        message: "Enter the paragraph",
        name: "paragraph",
        type: "input",
    })
        .then((res) => {
        let { paragraph } = res;
        paragraph = paragraph.trim();
        const numberOfWords = paragraph.split(/\s+/).length;
        const numberOfCharacters = paragraph.match(/[a-z0-9]/gi)?.length;
        console.log("Number of Words:", numberOfWords);
        console.log("Number of characters:", numberOfCharacters);
    });
    inquirer
        .prompt({
        message: "Try again?",
        name: "tryAgain",
        type: "list",
        choices: ["Yes", "No"],
    })
        .then((res) => {
        if (res.tryAgain === "No") {
            run = false;
        }
    });
}
