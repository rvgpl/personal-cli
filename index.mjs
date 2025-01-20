#!/usr/bin/env node

import colors from "yoctocolors";
import inquirer from "inquirer";
import Table from "cli-table3";
import figlet from "figlet";
import { promisify } from "util";

import data from "./data.js";

const figletPromise = promisify(figlet);

async function main() {
  console.clear();

  // Generate ASCII art using figlet
  const name = await figletPromise(data.firstName, {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  const surname = await figletPromise(data.lastName, {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  console.log(colors.yellowBright(name));
  console.log(colors.yellowBright(surname));

  console.log(
    colors.cyan(
      `Hey there, I'm ${colors.italic(data.firstName)} ${colors.italic(
        data.lastName
      )}!`
    )
  );
  console.log(colors.cyan("Welcome to my personal w̶e̶b̶s̶i̶t̶e̶ npm module \n"));

  let exit = false;
  while (!exit) {
    const { menuChoice } = await inquirer.prompt([
      {
        type: "list",
        name: "menuChoice",
        message: "Select an option:",
        choices: ["About Me", "Social Links", "Projects", "Exit"],
      },
    ]);

    switch (menuChoice) {
      case "About Me":
        await showAbout();
        break;
      case "Social Links":
        await showSocialLinks();
        break;
      case "Projects":
        await showProjects();
        break;
      case "Exit":
      default:
        console.log(
          colors.green(
            "\nThanks for checking out my CLI npm module. Have a great day!\n"
          )
        );
        exit = true;
        break;
    }
  }
}

async function showAbout() {
  console.log(
    "\n" + colors.yellowBright(colors.bold("----- About Me -----")) + "\n"
  );
  console.log(colors.whiteBright(data.bio) + "\n");
  console.log(
    colors.whiteBright(
      `Read more about me at ${colors.bold(
        colors.yellowBright(data.bioLink)
      )}\n`
    )
  );
}

async function showSocialLinks() {
  console.log(
    "\n" + colors.yellowBright(colors.bold("----- Social Links -----")) + "\n"
  );

  const table = new Table({
    head: [
      colors.bold(colors.cyan("Website")),
      colors.bold(colors.cyan("URL")),
    ],
    style: {
      head: [],
      border: [],
    },
  });

  data.links.forEach((link) => {
    table.push([
      colors.whiteBright(link.name),
      colors.bold(colors.yellowBright(link.url)),
    ]);
  });

  console.log(table.toString());
  console.log("\n");
}

async function showProjects() {
  console.log(
    "\n" + colors.yellowBright(colors.bold("----- Projects -----")) + "\n"
  );

  const table = new Table({
    head: [colors.bold(colors.cyan("Name")), colors.bold(colors.cyan("Link"))],
    style: {
      head: [],
      border: [],
    },
  });

  data.projects.forEach((project) => {
    table.push([
      colors.whiteBright(project.name),
      colors.bold(colors.yellowBright(project.link)),
    ]);
  });

  console.log(table.toString());

  console.log(
    colors.whiteBright(
      `\n There are more projects listed on my personal website,\n visit ${colors.bold(
        colors.yellowBright(data.moreProjectsLink)
      )} \n`
    )
  );
}

main();
