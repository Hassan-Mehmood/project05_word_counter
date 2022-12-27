#! /usr/bin/env node
import inquirer from "inquirer";

inquirer
  .prompt({
    message: "Enter the paragraph",
    name: "paragraph",
    type: "input",
  })
  .then((res) => {
    let { paragraph }: { paragraph: string } = res;
    paragraph = paragraph.trim();

    const numberOfWords = paragraph.split(/\s+/).length;
    const numberOfCharacters = paragraph.match(/[a-z0-9]/gi)?.length;

    console.log("Number of Words:", numberOfWords);
    console.log("Number of characters:", numberOfCharacters);
  });
