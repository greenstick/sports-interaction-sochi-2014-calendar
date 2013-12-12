$(function () {

/**
 *	Calendar Class
 *	@params Passed to by CalendarVM
 **/

	var Calendar = function (r1, r2, margins, strokeWidth, strokeColor, colors, days, sports) {
		//Defining variables
		var pi = Math.PI;
		var calendar = this;
			calendar.inner = r1,
			calendar.outer = r2;
			//Validating correct radius input order
			if (calendar.inner > calendar.outer) {
				var outer = calendar.inner;
				calendar.inner = calendar.outer,
				calendar.outer = outer;
			};
			calendar.margins = margins,
			calendar.height = (calendar.outer * 2) + calendar.margins.top + calendar.margins.bottom,
			calendar.width = (calendar.outer * 2) + calendar.margins.left + calendar.margins.right,
			calendar.strokeWidth = strokeWidth,
			calendar.strokeColor = strokeColor,
			calendar.colors = colors,
			calendar.rings = days,
			calendar.segments = sports,
			calendar.segmentWidth = calendar.segments/360;
		//Creating SVG element
			calendar.svg = d3.select('#calendar').append("svg")
				.attr("width", calendar.width)
				.attr("height", calendar.height);

			//Generating Calendar
			calendar.init = function (outer, inner, strokeColor, strokeWidth, rings, segments, colors) {
				var ringWidth = (outer - inner)/rings;
				for(var i = 0; i < days; i++) {
					for(var j = 0; j < segments; j++) {
						var arc = d3.svg.arc()
							.innerRadius(inner + (ringWidth * i))
							.outerRadius(inner + (ringWidth * (i + 1)))
							.startAngle(((360/segments) * j) * (pi/180))
							.endAngle(((360/segments) * (j + 1)) * (pi/180));
								calendar.svg.append("path")
									.attr("d", arc)
									.attr("fill", calendar.colors[j])
									.attr("stroke", strokeColor)
									.attr("stroke-width", calendar.strokeWidth + "px")
									.attr("transform", "translate(" + calendar.width/2 + ", " + calendar.height/2 + ")");
					};
				};
			};
			//On Update
			calendar.update = function (sport) {
				console.log(sport());
				return;

			};
	};

/**
 *	Calendard View Model
 *	@params (Inner Radius (int), Outer Radius(int), Margins(obj), Stroke Width(int), Stroke Color(str), Colors(arr), Days(int), Sports(int))
 **/

	var CalendarVM = function (r1, r2, margins, strokeWidth, strokeColor, colors, days, sports) {
		
/**
 *	AJAX Request Methods - Retrieve Data From API
 **/

			var getSeasons = function () {
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
			// getSeasons();

			var getSports = function (season) {
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
			// getSports(seasonID);

			var getEvent = function (season, sport, date) {
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

			var getMedals = function (season) {
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
			// getMedals(seasonID);

			//General AJAX resource request
			var getResource = function (link) {
				$.ajax({
					type: "GET",
					url: link,
					crossDomain: false,
					dataType: "text",
					success: function (data) {
						console.log("RETURNED: " + data);
						return data;
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						console.log("Error");
					}
				});
			};

/**
 *	Globals
 **/
		var vm = this;
			vm.sportData = null,
			vm.colorData = null,
			vm.seasonID = null,
			vm.selected = ko.observable(null),
			vm.colorData = [
				{"sport":"BIATHLON","color":"#0000FF"},
				{"sport":"BOBSLEIGH","color":"#7438A8"},
				{"sport":"SKELETON","color":"#FF0000"},
				{"sport":"CURLING","color":"#F7B11B"},
				{"sport":"ICE-HOCKEY","color":"#D0F923"},
				{"sport":"LUGE","color":"#32B208"},
				{"sport":"FIGURE-SKATING","color":"#20D382"},
				{"sport":"SHORT-TRACK","color":"#09AEDB"},
				{"sport":"SPEED-SKATING","color":"#490E7C"},
				{"sport":"ALPINE-SKIING","color":"#AF1BFA"},
				{"sport":"CROSS-COUNTRY","color":"#F47920"},
				{"sport":"NORDIC-COMBINED","color":"#F9EE50"},
				{"sport":"SKI-JUMPING","color":"#62E80C"},
				{"sport":"FREESTYLE","color":"#045910"},
				{"sport":"SNOWBOARD","color":"#05E5D4"}
			],
			vm.sportsRows = ko.mapping.fromJS(vm.colorData, {}, vm.sportsRows),
			vm.calendar = new Calendar (305, 42, {top: 20, right: 20, bottom: 20, left: 20}, 2, '#000E5C', ['#0000FF', '#490E7C', '#7438A8', '#AF1BFA', '#FF0000', '#F47920', '#F7B11B', '#F9EE50', '#D0F923', '#62E80C', '#32B208', '#045910', '#20D382', '#05E5D4', '#09AEDB'], 19, 15),
			vm.selectedSport = ko.observable(null),
			vm.init = function () {
				vm.calendar.init(vm.calendar.outer, vm.calendar.inner, vm.calendar.strokeColor, vm.calendar.strokeWidth, vm.calendar.rings, vm.calendar.segments, vm.calendar.colors);
			}
			vm.update = function (sport) {
				vm.calendar.update(sport);
			}

			// [
			// 	{"sport":"BIATHLON","color":"#0000FF"},
			// 	{"sport":"SPEED SKATING","color":"#D0F923"},
			// 	{"sport":"BOBSLEIGH","color":"#490E7C"},
			// 	{"sport":"ALPINE SKIING","color":"#62E80C"},
			// 	{"sport":"SKELETON","color":"#7438A8"},
			// 	{"sport":"CROSS COUNTRY","color":"#32B208"},
			// 	{"sport":"CURLING","color":"#AF1BFA"},
			// 	{"sport":"NORDIC COMBINED","color":"#045910"},
			// 	{"sport":"ICE HOCKEY","color":"#FF0000"},
			// 	{"sport":"SKI JUMPING","color":"#20D382"},
			// 	{"sport":"LUGE","color":"#F47920"},
			// 	{"sport":"FREESTYLE","color":"#05E5D4"},
			// 	{"sport":"FIGURE SKATING","color":"#F7B11B"},
			// 	{"sport":"SNOWBOARD","color":"#09AEDB"},
			// 	{"sport":"SHORT TRACK","color":"#F9EE50"}
			// ]
	};
	var viewmodel = new CalendarVM(305, 42, {top: 20, right: 20, bottom: 20, left: 20}, 2, '#000E5C', ['#0000FF', '#490E7C', '#7438A8', '#AF1BFA', '#FF0000', '#F47920', '#F7B11B', '#F9EE50', '#D0F923', '#62E80C', '#32B208', '#045910', '#20D382', '#05E5D4', '#09AEDB'], 19, 15); 
	ko.applyBindings(viewmodel, document.getElementById('wrapper'));
	viewmodel.init();
});