var tideChartD3 = function(tidesData){


  // var svgContainer = document.getElementById('svgTestD3').children[0];

  // var tidesData = [-0.91299251927959, 1.0049121683629985,-0.27793326004093283, 0.07051110184971858,-0.9679999715685375, 1.1495536133887616];
  var dataLength = tidesData.length;
  var width = 800;
  var widthSegment = (width/(dataLength-1));
  var height = 500;
  var multiplier = 150;
  var lineData = [ { "x": 0, "y": 500} ];

  for (i=0; i<dataLength; i++) {
    lineData.push( { "x": widthSegment*i, "y": tidesData[i] + " "} );
  }

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
                           return (i) * (widthSegment);
                         })
                         .attr("cy", function (d) {
                           d = (d * multiplier) + (height/2);
                           return d;
                         })
                         .attr("r", 20)
                         .style("fill", "red");

  var lineFunction = d3.svg.line()
                           .x(function(d) { 
                             d = d.x; 
                             return d;
                           })
                           .y(function(d) {
                             d = (d.y * multiplier) + (height/2);
                             return d;
                           })
                           .interpolate("monotone");

  var lineAttributes = svgContainer.append("path")
                                   .attr('d', lineFunction(lineData))
                                   .attr("fill", "#eee")
                                   .attr("stroke", "blue")
                                   .attr("stroke-width", 1);

  var coords = d3.select("div#svgTestD3")
                    .append("text")
                    .attr('id', 'xCoord')
                    .attr('x', '110')
                    .attr('y', '115');

  // $(document).ready(function(){
  //     $('[data-toggle="tooltip"]').tooltip(); 
  // });

            var IE = document.all?true:false


            if (!IE) document.captureEvents(Event.MOUSEMOVE)


            document.onmousemove = getMouseXY;


            var tempX = 0
            var tempY = 0



            function getMouseXY(e) {
                if (IE) { 

                tempX = event.clientX + document.body.scrollLeft
                tempY = event.clientY + document.body.scrollTop
                } 
                else 
                {  
                 tempX = e.pageX
                 tempY = e.pageY
                }  


                // document.Show.MouseX.value = tempX
                // document.Show.MouseY.value = tempY
                 
                coords.text(function(d) { return getSvgCoords(tempX, tempY)});

                return true
            }



  function getSvgCoords(origX, origY) {

    var svgDiv = document.getElementById("svgTestD3");
    var svgEl = svgDiv.getElementsByTagName("svg")[0];

    var svgViewBox = svgEl.getAttribute("viewBox");
    var svgViewBoxString = new String(svgViewBox);
    var viewBox = svgViewBoxString.split(' ');
    var ulCorner = [ viewBox[0], viewBox[1] ];
    var lrCorner = [ viewBox[0] + viewBox[2], viewBox[1] + viewBox[3] ];

    var pixWidth = getElementWidth(svgEl);
    var pixHeight = svgEl.getAttribute("height");

    var pixelWidthRatio = viewBox[2] / pixWidth;
    var pixelHeightRatio = viewBox[3] / pixHeight;

    // var rect = svgEl.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);
    var offset = getElementOffset( svgEl );
    var offsetX = offset.left;
    var offsetY = offset.top;

    var convertedX = ( origX - offsetX ) * pixelWidthRatio;
    var convertedY = ( origY - offsetY ) * pixelHeightRatio;

    return [ convertedX, convertedY ];
  }

  function getElementOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }
  

  function getElementWidth( el ) {
    var width = 0;
    if( el && !isNaN( el.clientWidth )) {
      width += el.clientWidth;
    }
    return width;
  }
}