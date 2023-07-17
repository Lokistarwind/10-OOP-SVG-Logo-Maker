
class Square {

  constructor(characters, fontColor, shape, shapeColor) {
    this.characters = characters;
    this.fontColor = fontColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
  setColor(color)
  {
    this.shapeColor = color;
  }

  render() {
    if(this.shape !== "square")
      {
        return ``;
      }
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75"  y="25" width="150" height="150" fill="${this.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.characters}</text>
    </svg>`;  }
  
}

module.exports = Square;