class SVG {
    constructor(){
        this.text = '';
        this.shapeString = '';
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeString}${this.text}</svg>`
    }
    setText(text, color){
        if(text.length > 3){
            throw new Error("Text must not exceed 3 characters.")
        }
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shapeString = shape.render();
    }
}

module.exports = SVG;