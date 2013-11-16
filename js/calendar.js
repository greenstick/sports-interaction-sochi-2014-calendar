Calendar = function (r1, r2, margins, colors, days, sports)
{
	var pi = Math.PI;
	var chart = this;
	chart.inner = r1;
	chart.outer = r2;
//Validating correct radius input order
	if (chart.inner > chart.outer) {
		var outer = chart.inner;
		chart.inner = chart.outer;
		chart.outer = outer;
	};
	chart.margins = margins;
	chart.height = (chart.outer * 2) + chart.margins.top + chart.margins.bottom;
	chart.width = (chart.outer * 2) + chart.margins.left + chart.margins.right;
	chart.colors = colors;
	chart.rings = days;
	chart.segments = sports;
	chart.segmentWidth = chart.segments/360;
	console.log(chart.outer + ' outer');
	console.log(chart.inner + ' inner');
//Calculating areas and circumference
	chart.innerArea = function () {
		return (chart.inner * chart.inner * pi);
	};
	console.log(chart.innerArea() + ' inner area');
	chart.outerArea = function () {
		return (chart.outer * chart.outer * pi);
	};
	console.log(chart.outerArea() + ' outer area');
	chart.innerCircum = function () {
		return (chart.inner * 2 * pi);
	};
	console.log(chart.innerCircum() + ' inner circum');
	chart.outerCircum = function () {
		return (chart.outer * 2 * pi);
	};
	console.log(chart.outerCircum() + ' outer circum');
	var svg = d3.select('#calendar').append("svg")
		.attr("width", chart.width)
		.attr("height", chart.height);
	var arc = d3.svg.arc()
		.innerRadius(chart.inner)
		.outerRadius(chart.outer)
		.startAngle(360 * (pi/180))
		.endAngle(0 * (pi/180));
			svg.append("path")
				.attr("d", arc)
				.attr("fill", chart.colors[1])
				.attr("transform", "translate(" + chart.width/2 + ", " + chart.height/2 + ")");

	// var partition = d3.layout.partition()
	// 	.sort(null)
	// 	.size([2 * pi, chart.outer * chart.outer])
	// 	.value(function (d) { return 1;});
	// var arc = d3.svg.arc()
	// 	.startAngle(function(d) { return d.x;})
	// 	.endAngle(function(d) { return d.x + d.dx; })
	// 	.innerRadius(function(d) { return Math.sqrt(d.y);})
	// 	,outerRadius(function(d) { return Math.sqrt(d.y + d.dy);});
	// d3.json("data/calendar.json", function (error, root) {
	// 	var path = svg.datum(root).selectAll("path")
	// 		.data(partition.nodes).enter().append("path")
	// 			.attr("display", function(d) { return d.depth ? null : "none"; })
	// 			.attr("d", arc)
	// 			.style("stroke", chart.color[0])
	// 			.style("fill", function(d) { return color((d.children ? d : d.parent).name); })
	// 			.style("fill-rule", "evenodd")
	// 			.each(stash);
	// });
};
var calendar = new Calendar(300, 200, {top: 40, right: 40, bottom: 40, left: 40}, ['#AA33DD', '#AAEEAA'], 8, 8);

// Creating SVG element
// 	chart.svg = function (height, width) {
// 		var svg = document.getElementById("svg");
// 		var thisSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// 		thisSVG.setAttribute("version", "1.2");
// 		thisSVG.setAttribute("baseProfile", "full");
// 		thisSVG.setAttribute("height", height);
// 		thisSVG.setAttribute("width", width);
// 		svg.appendChild(thisSVG);
// 	};
// 	chart.svg(chart.height, chart.width);
// Creating Inner Circle element
// 	chart.circleInner = function () {
// 		var cInner = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// 		cInner.setAttribute("cx", "100");
// 		cInner.setAttribute("cy", "100");
// 		cInner.setAttribute("r", chart.inner);
// 		cInner.setAttribute("fill", chart.colors[0]);
// 		cInner.setAttribute("stroke", chart.colors[1]);
// 		cInner.setAttribute("stroke-width", "3px");
// 		svg.appendChild(cInner);
// 	};
// 	chart.circleInner();