
class Triangle {
  constructor(characters, fontColor, shape, shapeColor) {
    this.characters = characters;
    this.fontColor = fontColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
  
  setColor(color){
      this.shapeColor = color;
    }

  render() {
    if(this.shape !== "triangle")
      {
        return ``;
      }
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.characters}</text>
      </svg>`;
    }
}

module.exports = Triangle;