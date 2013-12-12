$(function () {

/**
 *	Global Variables
 **/

	var seasonID = 1;

/**
 *	AJAX Requests - Retrieve Data From API
 **/

	getSeasons = function () {
		$.ajax({
			type: "GET",
			url: "http://www.sportsinteraction.com/service/infostrada/seasons.cfm",
			crossDomain: true,
			dataType: "jsonp",
			success: function (data) {
				console.log("DATA: " + $.parseJSON(data));
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				console.log("Error");
			}
		});
	};
	getSeasons();

	getSports = function (season) {
		$.ajax({
			type: "GET",
			url: "http://www.sportsinteraction.com/service/infostrada/sports.cfm?seasonID=" + season + "",
			crossDomain: true,
			dataType: "jsonp",
			success: function (data) {
				console.log("DATA: " + data);
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				console.log("Error");
			}
		});
	};
	getSports(seasonID);

	getEvent = function (season, sport, date) {
		$.ajax({
			type: "GET",
			url: "http://www.sportsinteraction.com/service/infostrada/event_phases.cfm?seasonID=" + season + "&sportID=" + sport+ "&date=" + date + "",
			crossDomain: true,
			dataType: "jsonp",
			success: function (data) {
				console.log("DATA: " + data);
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				console.log("Error");
			}
		});
	};
	// getEvent(seasonID, sportID, date);

	getMedals = function (season) {
		$.ajax({
			type: "GET",
			url: "http://www.sportsinteraction.com/service/infostrada/medals.cfm?seasonID=" + season + "",
			crossDomain: true,
			dataType: "jsonp",
			success: function (data) {
				console.log("DATA: " + data);
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				console.log("Error");
			}
		});
	};
	getMedals(seasonID);
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

	var calendar = new Calendar(305, 42, {top: 20, right: 20, bottom: 20, left: 20}, 2, '#000E5C', ['#0000FF', '#490E7C', '#7438A8', '#AF1BFA', '#FF0000', '#F47920', '#F7B11B', '#F9EE50', '#D0F923', '#62E80C', '#32B208', '#045910', '#20D382', '#05E5D4', '#09AEDB'], 19, 15);
})