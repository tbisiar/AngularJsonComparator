
// Script for displaying coordinates of SVG element
var displayCoords = function( coordElementName ) {

  var coords = d3.select( '#' + coordElementName );//document.getElementById( coordElementName );
  // var coordsText = coords.getElementsByTagName( 'text' )[0];

  var IE = document.all ? true : false;

  if (!IE) { document.captureEvents( Event.MOUSEMOVE) }

  document.onmousemove = getMouseXY;

  function getMouseXY( e ) {

    var tempX = 0
    var tempY = 0

    if (IE) {
      tempX = event.clientX + document.body.scrollLeft
      tempY = event.clientY + document.body.scrollTop
    } else {
      tempX = e.pageX
      tempY = e.pageY
    }

    coords.text(function(d) { return getSvgCoords(tempX, tempY)});

	return true
  }


  function getSvgCoords(origX, origY) {

  	// Get the svg element, assuming it is first item in div
    var svgDiv = document.getElementById( 'svgTestD3' );
    var svgEl = svgDiv.getElementsByTagName( 'svg' )[0];

    var viewBox = new String( svgEl.getAttribute( 'viewBox' ) ).split( ' ' );

    var rect = svgEl.getBoundingClientRect();
    var offsetX = rect.left;
    var offsetY = rect.top;

    var pixWidth = getElementWidth(svgEl);
    var pixHeight = getElementHeight(svgEl);

    var pixelWidthRatio = viewBox[2] / pixWidth;
    var pixelHeightRatio = viewBox[3] / pixHeight;

    // var offset = getElementOffset( svgEl );
    // var offsetX = offset.left;
    // var offsetY = offset.top;

    var convertedX = ( origX - offsetX ) * pixelWidthRatio;
    var convertedY = ( origY - offsetY ) * pixelHeightRatio;

    return [ convertedX, convertedY ];
  }


  // function getElementOffset( el ) {
  //   var _x = 0;
  //   var _y = 0;
  //   while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
  //       _x += el.offsetLeft - el.scrollLeft;
  //       _y += el.offsetTop - el.scrollTop;
  //       el = el.offsetParent;
  //   }
  //   return { top: _y, left: _x };
  // }


  function getElementWidth( el ) {
    var width = 0;
    if( el && !isNaN( el.clientWidth )) {
      width += el.clientWidth;
    }
    return width;
  }


  function getElementHeight( el ) {
    var height = 0;
    if( el && !isNaN( el.clientHeight )) {
      height += el.clientHeight;
    }
    return height;
  }
}