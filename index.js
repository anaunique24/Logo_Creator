const inquirer = require(inquirer);
const fs = require(fs);

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
        type: "choice",
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
    const content = createFile(file)
    fs.writeFile("logo.svg", content, (error) => 
    error ? console.log("This file wasn't created. Try again!", error) : console.log("Generated logo.svg"));
});