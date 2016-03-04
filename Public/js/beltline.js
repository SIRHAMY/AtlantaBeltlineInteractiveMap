var MAP_WIDTH = 1000;
var MAP_HEIGHT = 1000;
var CENTER = [-84.43231544509, 33.65];

var fill = d3.scale.log()
    .domain([10, 500])
    .range(["brown", "steelblue"]);

var projection = d3.geo.mercator().center(CENTER)
  .scale(100000)
  .translate([MAP_WIDTH/2, MAP_HEIGHT/2])
  .precision(0.1);

var path = d3.geo.path().projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", MAP_WIDTH)
    .attr("height", MAP_HEIGHT);

var counter = 0;
//Test the ability to change NPU colors
var getColors = function() {
  counter++;
  if(counter % 2 === 0) {
    console.log("Red");
    return "red";
  }
  else {
    console.log("Blue");
    return "blue";
  }
}

d3.json("/rsrc/cNPUOut.json", function(error, us) {
  if (error) throw error;

  console.log("NPU");
  console.log(us);

  svg.append("g")
      .attr("class", "NPU")
    .selectAll("path")
      .data(topojson.feature(us, us.objects.cNPUs).features)
    .enter().append("path")
      .attr("d", path)
      .style("fill", function(d) { return getColors(); });

});