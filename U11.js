
function formatRGB(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`
}

function randomInt(range) {
    return Math.round(Math.random() * range)
}

function makeRGB(redInput, greenInput, blueInput) {
    let redOutput = redInput ?? randomInt(255)
    let greenOutput = greenInput ?? randomInt(255)
    let blueOutput = blueInput ?? randomInt(255)

    return `rgb(${redOutput}, ${greenOutput}, ${blueOutput})`
}


function drawRect(x,y) {
    let newRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newRectangle.setAttribute("id", "S");
    newRectangle.setAttribute("x", x);
    newRectangle.setAttribute("y", y);
    newRectangle.setAttribute("width", 250);
    newRectangle.setAttribute("height", 250);

    svg.appendChild(newRectangle);
}

function drawCircle(cx, cy, r) {
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute("id", "C");
    newCircle.setAttribute("cx", cx);
    newCircle.setAttribute("cy", cy);
    newCircle.setAttribute("r", r);
 
    svg.appendChild(newCircle);
  }

  function drawEllipse(x, y, w, h) {

    let newellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse")
    newellipse.setAttribute("id", "E");
    newellipse.setAttribute("cx", x)
    newellipse.setAttribute("cy", y)
    newellipse.setAttribute("rx", w)
    newellipse.setAttribute("ry", h)

    svg.appendChild(newellipse)
}