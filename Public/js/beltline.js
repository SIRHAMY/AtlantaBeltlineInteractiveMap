//Initialize value params
var MAP_WIDTH = 1000;
var MAP_HEIGHT = 1000;
var CENTER = [-84.43231544509, 33.65];

var svg = d3.select("map")
	.append("svg")
	.attr("width", MAP_WIDTH)
	.attr("height", MAP_HEIGHT);

var projection = d3.geo.conicConformal()
	.center(CENTER)
	.scale(121500)
	.translate([MAP_WIDTH/2, MAP_HEIGHT/2])
	.precision(0.1);

var path = d3.geo.path()
			.projection(projection);

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

d3.json("rsrc/NPUs.json", function(err, json) {
	
	svg.selectAll("path").data(json.features)
		.enter()
			.append()
				.attr("d", path)
				.style("fill", getColors);
});