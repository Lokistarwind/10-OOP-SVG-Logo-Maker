// Constructor is imported.
const Triangle = require('../Triangle.js');
const Circle = require('../Circle.js');
const Square = require('../Square.js');

// A testing suite for Triangle
describe('Triangle', () => {
  // Test to check render function by setting the shape color
  describe('render', () => {
    it('should return svg file code with correct shape color', () => {
      const svg =
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text>
      </svg>`;
      const triangle = new Triangle('SVG', 'white', 'triangle', '');
      triangle.setColor(`blue`);
      expect(triangle.render().replace("\n", "")).toEqual(svg.replace("\n", ""));
    });

    // Test to check if object shape is a Triangle. Should fail since object passed in is square
    it('svg file code should fail for using a different shape', () => {
      const svg =
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text>
      </svg>`;
        const triangle = new Triangle("SVG", "white", "square", "");
        triangle.setColor(`blue`);
        expect(triangle.render().replace("\n", "")).toEqual(svg.replace("\n", ""));
      });
  });
});
// A testing suite for Circle
describe('Circle', () => {
  // Test to check render function by setting the shape color
  describe('render', () => {
    it('should return svg file code with correct shape color', () => {
      const svg =
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>`;
      const circle = new Circle('SVG', 'white', 'circle', '');
      circle.setColor(`blue`);
      expect(circle.render().replace("\n", "")).toEqual(svg.replace("\n", ""));
    });

    // Test to check if object shape is a Circle. Should fail since object passed in is triangle
    it('svg file code should fail for using a different shape', () => {
      const svg =
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>`;
      const circle = new Circle('SVG', 'white', 'triangle', '');
      circle.setColor(`blue`);
      expect(circle.render().replace("\n", "")).toEqual(svg.replace("\n", ""));
      });
  });
});
// A testing suite for Square
describe('Square', () => {
  // Test to check render function by setting the shape color
  describe('render', () => {
    it('should return svg file code with correct shape color', () => {
      const svg =
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75"  y="25" width="150" height="150" fill="blue"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`;
      const square = new Square('SVG', 'white', 'square', '');
      square.setColor(`blue`);
      expect(square.render().replace("\n", "")).toEqual(svg.replace("\n", ""));
    });

    // Test to check if object shape is a Square. Should fail since object passed in is circle
    it('svg file code should fail for using a different shape', () => {
      const svg =
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75"  y="25" width="150" height="150" fill="blue"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`;
      const square = new Square('SVG', 'white', 'circle', '');
      square.setColor(`blue`);
      expect(square.render().replace("\n", "")).toEqual(svg.replace("\n", ""));
      });
  });
});
