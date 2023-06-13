class Shape {
    constructor(logoName, textColor, shapeColor){
        this.logoName = logoName;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    rendersvg(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${this.render()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text>
</svg>`
    }
    setColor(shapeColor){
        this.shapeColor = shapeColor
    }
    render(){
        return`<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}
class Square extends Shape{
    constructor(logoName, textColor, shapeColor) {
    super(logoName, textColor, shapeColor)
    }
    render(){
        return`<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`
    }
}
class Circle extends Shape{
    constructor(logoName, textColor, shapeColor) {
    super(logoName, textColor, shapeColor)
    }
    render(){
        return`<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}
class Triangle extends Shape{
    constructor(logoName, textColor, shapeColor) {
    super(logoName, textColor, shapeColor)
    }
    render(){
        return`<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}


module.exports = {Triangle, Circle, Square};