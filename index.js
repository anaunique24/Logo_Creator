const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle} = require('../shapes');
const SVG = require("./svg");


inquirer.prompt([
    {
        type: "input",
        message: "Please provide 3 character text for logo.",
        name: "logoName"
    },
    {
        type: "input",
        message: "Please provide desired text color.",
        name: "textColor"
    },
    {
        type: "list",
        message: "Please select a shape from the options.",
        name: "logoShape",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        message: "Please provide desired shape color.",
        name: "shapeColor"
    }
])

.then((file) => {
    let shape;
    if(file.logoShape === "Circle"){
        shape = new Circle (file.logoName, file.textColor, file.shapeColor)
    }else if(file.logoShape === "Square"){
        shape = new Square (file.logoName, file.textColor, file.shapeColor)
    } else{
        shape = new Triangle (file.logoName, file.textColor, file.shapeColor)
    }
    
    console.log(file);
    const content = shape.rendersvg()
    fs.writeFile("logo.svg", content, (error) => 
    error ? console.log("This file wasn't created. Try again!", error) : console.log("Generated logo.svg"));
});