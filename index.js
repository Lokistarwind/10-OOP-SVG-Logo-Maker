const fs = require('fs');
const inquirer = require('inquirer');
const Triangle = require('./lib/Triangle.js');
const Circle = require('./lib/Circle.js');
const Square = require('./lib/Square.js');

//don't need shape.js for here maybe in testing

function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateShape(data), 
    (err) => err ? console.log(err) : console.log("Generated logo.svg"))
}

function generateShape(data){
  let shapeobj = null;
  if(data.shape === "circle"){
    shapeobj = new Circle(data.characters, data.fontColor, data.shape, data.shapeColor);
  }
  else if(data.shape === "triangle")
  {
    shapeobj = new Triangle(data.characters, data.fontColor, data.shape, data.shapeColor);
  }
  else if(data.shape === "square")
  {
    shapeobj = new Square(data.characters, data.fontColor, data.shape, data.shapeColor);
  }
  return shapeobj.render();
}


function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: `Enter 3 characters`,
        name: 'characters',
      },
      {
          type: 'input',
          message: `Type in a color keyword (OR a hexadecimal number) for text color`,
          name: 'fontColor',
        },
        {
          type: 'list',
          name: 'shape',
          message: `choose from one of these shapes`,
          choices: [
            'circle',
            'triangle',
            'square',
          ],
        },
        {
            type: 'input',
            message: `Type in a color keyword (OR a hexadecimal number) for shape color`,
            name: 'shapeColor',
          }
    ])
    .then((response) =>
      writeToFile(`logo.svg`, response));
  
}

// Function call to initialize app
init();


