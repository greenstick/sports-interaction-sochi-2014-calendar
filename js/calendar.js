
/**
*	Calendar Class
**/

Calendar = function (r1, r2, margins, strokeWidth, strokeColor, colors, days, sports)
{
//Defining variables
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
	chart.strokeWidth = strokeWidth;
	chart.strokeColor = strokeColor;
	chart.colors = colors;
	chart.rings = days;
	chart.segments = sports;
	chart.segmentWidth = chart.segments/360;
//Calculating areas and circumference
	chart.innerArea = function () {
		return (chart.inner * chart.inner * pi);
	};
	chart.outerArea = function () {
		return (chart.outer * chart.outer * pi);
	};
	chart.innerCircum = function () {
		return (chart.inner * 2 * pi);
	};
	chart.outerCircum = function () {
		return (chart.outer * 2 * pi);
	};
//Creating SVG element
	var svg = d3.select('#calendar').append("svg")
		.attr("width", chart.width)
		.attr("height", chart.height);

//Generating sunburst through params & appending data
	chart.sunburst = function (outer, inner, strokeColor, strokeWidth, rings, segments, colors) {
		var ringWidth = (outer - inner)/rings;
		for(var i = 0; i < days; i++) {
			for(var j = 0; j < segments; j++) {
				var arc = d3.svg.arc()
					.innerRadius(inner + (ringWidth * i))
					.outerRadius(inner + (ringWidth * (i + 1)))
					.startAngle(((360/segments) * j) * (pi/180))
					.endAngle(((360/segments) * (j + 1)) * (pi/180));
						svg.append("path")
							.attr("d", arc)
							.attr("fill", chart.colors[j])
							.attr("stroke", strokeColor)
							.attr("stroke-width", chart.strokeWidth + "px")
							.attr("transform", "translate(" + chart.width/2 + ", " + chart.height/2 + ")");
			};
		};
	};
//Drawing sunburst
	chart.sunburst(chart.outer, chart.inner, chart.strokeColor, chart.strokeWidth, chart.rings, chart.segments, chart.colors);
};

var calendar = new Calendar(400, 50, {top: 40, right: 40, bottom: 40, left: 40}, 2, '#0E0E22', ['#1E0B7F', '#231355', '#2E1562', '#410D65', '#550D38', '#533136', '#544C35', '#52563A', '#445A38', '#285833', '#1C4633', '#112938', '#1C4C55', '#1E5070', '#1B3C72'], 30, 15);
