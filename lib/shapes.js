// lib/shapes.js
class Shape {
    constructor(color) {
      this.color = color;
    }
    render() {
      // To be overridden by child classes
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }