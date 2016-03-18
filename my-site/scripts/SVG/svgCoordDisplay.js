// This is a script to calculate and display the 
// transformed coordinates for an SVG viewBox

function initSvgCoords(svg) {
  var svgContainer = $("div#svgTestD3");

  var svgCoordX = svgContainer.getElementById("coordx");
  var svgCoordY = svgContainer.getElementById("coordy");

  var svgObj = svgContainer.getDocumentElement();

  var viewBox = new String(svgObj.getAttribute("viewBox")).split(' ');
  var ulCorner = [ viewBox[0], viewBox[1] ];
  var lrCorner = [ viewBox[0] + viewBox[2], viewBox[1] + viewBox[3] ];

  var pixWidth = svgObj.getAttribute("width");
  var pixHeight = svgObj.getAttribute("height");

  origPixSize = width / pixWidth;

  
}