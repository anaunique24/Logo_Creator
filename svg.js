class SVG {
    render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text></svg>`
    }
    setText(logoName, textColor){
        this.logoName = logoName;
        this.textColor = textColor;
    }
}

module.exports = SVG;