let svg = document.getElementById("mySvg");
svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");
svg.setAttribute("style", "background-color: lightgray");

function drawCircle(x, y, r) {
   let circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
   );
   circle.setAttributeNS(null, "cx", x);
   circle.setAttributeNS(null, "cy", y);
   circle.setAttributeNS(null, "r", r);
   circle.setAttributeNS(null, "fill", "yellow");
   circle.setAttributeNS(null, "stroke", "red");
   circle.setAttributeNS(null, "stroke-width", "1");
   document.getElementById("mySvg").appendChild(circle);
}
function drawSquare(x, y, width) {
   let rectangle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
   );
   rectangle.setAttributeNS(null, "x", x);
   rectangle.setAttributeNS(null, "y", y);
   rectangle.setAttributeNS(null, "width", width);
   rectangle.setAttributeNS(null, "height", width);
   rectangle.setAttributeNS(null, "fill", "cornflowerblue");
   rectangle.setAttributeNS(null, "stroke", "black");
   rectangle.setAttributeNS(null, "stroke-width", "1");
   document.getElementById("mySvg").appendChild(rectangle);
}

drawCircle(100, 100, 50);
drawSquare(150, 50, 100);
drawSquare(50, 150, 100);
drawCircle(200, 200, 50);
