var tideChartD3 = function(tidesData){


  // var svgContainer = document.getElementById('svgTestD3').children[0];

  // var tidesData = [-0.91299251927959, 1.0049121683629985,-0.27793326004093283, 0.07051110184971858,-0.9679999715685375, 1.1495536133887616];
  var dataLength = tidesData.length;
  var width = 800;
  var widthSegment = (width/dataLength);
  var height = 500;
  var multiplier = 150;
  var lineData = [ { "x": 0, "y": 500} ];

  for (i=0; i<dataLength; i++) {
    lineData.push( { "x": widthSegment*i, "y": tidesData[i] + " "} );
  }

  // var lineData = [ { "x": 0,              "y": 500}, 
  //                  { "x": 0,              "y": tidesData[0]},
  //                  { "x": widthSegment,   "y": tidesData[1]},
  //                  { "x": widthSegment*2, "y": tidesData[2]},
  //                  { "x": widthSegment*3, "y": tidesData[3]},
  //                  { "x": widthSegment*4, "y": tidesData[4]},
  //                  { "x": widthSegment*5, "y": tidesData[5]}
  //                ];

  var svgContainer = d3.select("div#svgTestD3")
                       .append("svg")
                       .attr("width", "100%")
                       .attr("height", "200")
                       .attr("viewBox", "0 0 " + width + " " + height)
                       .attr("preserveAspectRatio", "none")
                       .attr("version", "1.1")
                       .attr("xmlns", "http://www.w3.org/2000/svg")
                       .attr("xmlns:xlink", "http://www.w3.org/1999/xlink");

  var circles = svgContainer.selectAll("circle")
                            .data(tidesData)
                            .enter()
                            .append("circle");

  var circleAttributes = circles
                         .attr("cx", function(d, i){
                           return (i) * (width / 5);
                         })
                         .attr("cy", function (d) {
                           d = (d * multiplier) + (height/2);
                           return d;
                         })
                         .attr("r", 20)
                         .style("fill", "red");

  // var line = d3.svg.line();

  var lineFunction = d3.svg.line()
                           .x(function(d) { return d.x; })
                           .y(function(d) {
                             d = (d.y * multiplier) + (height/2);
                             return d;
                           })
                           .interpolate("monotone");

  var lineAttributes = svgContainer.append("path")
                                   .attr('d', lineFunction(lineData))
                                   .attr("fill", "#eee")
                                   .attr("stroke", "none")
                                   .attr("stroke-width", 2);

// add tooltip
  // var tooltip = d3.select("body")
  //                 .append("div")
  //                 .style("position", "absolute")
  //                 .style("z-index", "10")
  //                 .style("visibility", "hidden")
  //                 .text("Initial Tooltip Text");

  // d3.select("svgTestD3 svg")
  //   .on("mouseover", function(){return tooltip.style("visibility", "visible");})
  //   .on("mousemove", function(){ return tolltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
  //   .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
}