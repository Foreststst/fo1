
const svg = document.getElementById("canvas");

window.addEventListener("resize", resizeSvg);

function resizeSvg(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
        
    for(let rect of svg.children){
        rect.setAttribute('r',  Math.min(bbox.width, bbox.height) * 0.1);
    }
    for(let square of svg.children){
        square.setAttribute('r',  Math.min(bbox.width, bbox.height) * 0.1);
    }
    for(let circle of svg.children){
        circle.setAttribute('r',  Math.min(bbox.width, bbox.height) * 0.1);
    }
    for(let ellipse of svg.children){
        ellipse.setAttribute('r',  Math.min(bbox.width, bbox.height) * 0.1);
    }
}

const generateSquaresButton = document.getElementById("generate-squares-button");
generateSquaresButton.addEventListener("click", function(e) {
    svg.replaceChildren();
    drawRect(200, 200)

    CS="square"

    })
const generateCirclesButton = document.getElementById("generate-circles-button");
generateCirclesButton.addEventListener("click", function(e) {
    svg.replaceChildren();
    drawCircle(250, 250, 200)
    CS="circle"
    })
const generateEllipsesButton = document.getElementById("generate-ellipses-button");
    generateEllipsesButton.addEventListener("click", function(e) {
    svg.replaceChildren();
     drawEllipse(250, 250, 200, 30)
     CS="ellipse"
    }) 

const button = document.getElementById("colour-button");
button.addEventListener("click", function(e) {
       if (CS==="square") {
        let Rectangle = document.getElementById("S");
        Rectangle .setAttribute("fill", makeRGB());
        }
        else if(CS==="circle"){
            let circle = document.getElementById("C");
            circle.setAttribute("fill", makeRGB());
        }
        else if (CS==="ellipse"){ 
            let ellipse = document.getElementById("E");
            ellipse.setAttribute("fill", makeRGB());
        }
} )