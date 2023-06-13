const inquirer = require('inquirer');
const fs = require('fs');
const { log } = require('console');
// const Shapes = require('./Develop/examples');


class Shape {
    constructor(logoName, textColor, shapeColor){
        this.logoName = logoName;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    rendersvg(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${this.renderShape()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text>

        </svg>`
    }
    renderShape(){
        return`<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}
class Square extends Shape{
    constructor(logoName, textColor, shapeColor) {
    super(logoName, textColor, shapeColor)
    }
    renderShape(){
        return`<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`
    }
}
class Circle extends Shape{
    constructor(logoName, textColor, shapeColor) {
    super(logoName, textColor, shapeColor)
    }
    renderShape(){
        return`<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}
class Triangle extends Shape{
    constructor(logoName, textColor, shapeColor) {
    super(logoName, textColor, shapeColor)
    }
    renderShape(){
        return`<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

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