/*
const Triangle = require('./Triangle.js');
const Circle = require('./Circle.js');
const Square = require('./Square.js');
*/
class Shape {
    constructor(characters, fontColor, shape, shapeColor) {
      this.characters = characters;
      this.fontColor = fontColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
  
    render() {
        this.shape.render();
    }
    
  }
  
  module.exports = Shape;
  