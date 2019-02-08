let svg = document.getElementById("mySvg");
svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");
svg.setAttribute("style", "background-color: lightgray");

function drawCircle(x, y, r) {
   let circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
   );
   circle.setAttributeNS(null, "cx", 100);
   circle.setAttributeNS(null, "cy", 100);
   circle.setAttributeNS(null, "r", 50);
   circle.setAttributeNS(null, "fill", "yellow");
   circle.setAttributeNS(null, "stroke", "red");
   circle.setAttributeNS(null, "stroke-width", "1");
   document.getElementById("mySvg").appendChild(circle);
}
function drawRectangle(x, y, width, height) {
   let rectangle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
   );
   rectangle.setAttributeNS(null, "x", x);
   rectangle.setAttributeNS(null, "y", y);
   rectangle.setAttributeNS(null, "width", width);
   rectangle.setAttributeNS(null, "height", height);
   rectangle.setAttributeNS(null, "fill", "cornflowerblue");
   rectangle.setAttributeNS(null, "stroke", "black");
   rectangle.setAttributeNS(null, "stroke-width", "1");
   document.getElementById("mySvg").appendChild(rectangle);
}
function drawPolygon(points) {
   let polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
   );
   polygon.setAttributeNS(null, "points", "200,10 250,190 160,210");
   polygon.setAttributeNS(null, "fill", "lime");
   polygon.setAttributeNS(null, "stroke", "purple");
   polygon.setAttributeNS(null, "stroke-width", "1");
   document.getElementById("mySvg").appendChild(polygon);
}

drawPolygon();
drawCircle(200, 200, 40);
drawRectangle(100, 200, 80, 80);
