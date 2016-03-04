var MAP_WIDTH = 1000;
var MAP_HEIGHT = 1000;
var CENTER = [-84.43231544509, 33.65];
var selectedYear = 2012;


var fill = d3.scale.linear()
    .domain([-500, 0, 250])
    .range(["steelblue", "black", "brown"]);


//var fill = 

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

var crimeChange = {};

var getCrimeChange = function(selectedYear, NPU) {
  return crimeChange[+selectedYear][NPU.charCodeAt(0) - 65];
}

d3.csv("rsrc/NPUCrimeChange.csv", function(err, crimeChangeData) {
  
  crimeChangeData.forEach( function(row) {
      if(!crimeChange[+row.year]) crimeChange[+row.year] = {};
      crimeChange[+row.year][row.NPU.charCodeAt(0) - 65] = {};
      crimeChange[+row.year][row.NPU.charCodeAt(0) - 65] = +row.change;
  });

  d3.json("/rsrc/dNPUOut.json", function(error, us) {
  if (error) throw error;

  console.log("NPU");
  console.log(us);

  console.log("crimeChange");
  console.log(crimeChange);

  console.log("CrimeChange: 2011 - B: " + getCrimeChange(2011, 'B'));

  svg.append("g")
      .attr("class", "NPU")
    .selectAll("path")
      .data(topojson.feature(us, us.objects.dNPUs).features)
    .enter().append("path")
      .attr("d", path)
      .style("fill", function(d) { return fill(crimeChange[selectedYear][d.properties.NPU.charCodeAt(0) - 65]); });

});
});
