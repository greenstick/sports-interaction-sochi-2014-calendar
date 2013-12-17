$(function () {
//Globals Vars
var seasonID = 1,
	sportID = 1, 
	setDate = "2014-02-09";
/**
 *	AJAX Request Methods - Retrieve Data From API
 **/

			var getSeasons = function () {
				var data = null;
				$.ajax({
					async: false,
					type: "GET",
					url: "http://www.corsproxy.com/www.sportsinteraction.com/service/infostrada/seasons.cfm",
					crossDomain: true,
					dataType: "json",
					success: function (response) {
						data = response;
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						console.log("Error");
						return;
					}
				});
				return data;
			};

			var getSports = function (season) {
				var data = null;
				$.ajax({
					async: false,
					type: "GET",
					url: "http://www.corsproxy.com/www.sportsinteraction.com/service/infostrada/sports.cfm?seasonID=" + season,
					crossDomain: true,
					dataType: "json",
					success: function (response) {
						data = response;
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						console.log("Error");
						return;
					}
				});
				return data;
			};

			var getEvent = function (season, sport, date) {
				var data = null;
				if (date == null) {
					$.ajax({
						async: false,
						type: "GET",
						url: "http://www.corsproxy.com/www.sportsinteraction.com/service/infostrada/event_phases.cfm?seasonID=" + season + "&sportID=" + sport,
						crossDomain: true,
						dataType: "json",
						success: function (response) {
							data = response;
						},
						error: function (XMLHttpRequest, textStatus, errorThrown) {
							console.log("Error");
							return;
						}
					});
				} else {
					$.ajax({
						async: false,
						type: "GET",
						url: "http://www.corsproxy.com/www.sportsinteraction.com/service/infostrada/event_phases.cfm?seasonID=" + season + "&sportID=" + sport+ "&date=" + date,
						crossDomain: true,
						dataType: "json",
						success: function (response) {
							data = response;
						},
						error: function (XMLHttpRequest, textStatus, errorThrown) {
							console.log("Error");
							return;
						}
					});
				}
				return data;
			};

			var getMedals = function (season) {
				var data = null;
				$.ajax({
					async: false,
					type: "GET",
					url: "http://www.corsproxy.com/www.sportsinteraction.com/service/infostrada/medals.cfm?seasonID=" + season,
					crossDomain: true,
					dataType: "json",
					success: function (response) {
						data = response;
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						console.log("Error");
						return;
					}
				});
				return data;
			};

			//General AJAX resource request
			var asyncResource = function (link) {
				var data = null;
				$.ajax({
					async: false,
					type: "GET",
					url: link,
					crossDomain: false,
					dataType: "json",
					success: function (response) {
						data = response;
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						console.log("Error");
						return;
					}
				});
				return data;
			};


/**
 *	Calendar Class
 *	@params Passed to constructor by CalendarVM
 **/

	var Calendar = function (r1, r2, margins, strokeWidth, strokeColor, colors, rings, segments, days, sports) {
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
			calendar.rings = rings,
			calendar.days = days,
			calendar.sports = sports,
			calendar.segments = segments,
			calendar.segmentWidth = calendar.segments/360;
		//Creating SVG element
			calendar.svg = d3.select('#calendar').append("svg")
				.attr("width", calendar.width)
				.attr("height", calendar.height);

			//Generating Calendar
			calendar.init = function (outer, inner, strokeColor, strokeWidth, rings, segments, colors, days, sports) {
				var ringWidth = (outer - inner)/rings;
				for(var i = 0; i < rings; i++) {
					for(var j = 0; j < segments; j++) {
						var arc = d3.svg.arc()
							.innerRadius(inner + (ringWidth * i))
							.outerRadius(inner + (ringWidth * (i + 1)))
							.startAngle(((360/segments) * j) * (pi/180))
							.endAngle(((360/segments) * (j + 1)) * (pi/180));
								calendar.svg.append("path")
									.attr("d", arc)
									.attr("class", ("day" + days[i] + " " + sports[j]))
									.attr("fill", colors[j])
									.attr("stroke", strokeColor)
									.attr("stroke-width", strokeWidth + "px")
									.attr("transform", "translate(" + calendar.width/2 + ", " + calendar.height/2 + ")");
					};
				};
			};
			//On Update
			calendar.update = function (sport) {

			};
	};

/**
 *	Calendard View Model
 *	@params (Inner Radius (int), Outer Radius(int), Margins(obj), Stroke Width(int), Stroke Color(str), Colors(arr), Days(int), Sports(int))
 **/

	var CalendarVM = function (r1, r2, margins, strokeWidth, strokeColor, colors, rings, segments) {

/**
 *	Globals
 **/
		var vm = this;
			vm.seasonsData = ko.observable(getSeasons()),
			vm.sportData = ko.observable(getSports(seasonID)),
			vm.eventDataSpecific = ko.observable(getEvent(seasonID, sportID)),
			vm.eventData = ko.observable(getEvent(seasonID, sportID, setDate)),
			vm.medalData = ko.observable(getMedals(seasonID)),
			vm.colorData = ko.observable(asyncResource('data/colors.json')),
			vm.seasonID = seasonID,
			vm.selected = ko.observable(null),
			vm.days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
			vm.sports = ['BIATHLON', 'BOBSLEIGH', 'SKELETON', 'CURLING', 'ICE-HOCKEY', 'LUGE', 'FIGURE-SKATING', 'SHORT-TRACK', 'SPEED-SKATING', 'ALPINE-SKIING', 'CROSS-COUNTRY', 'NORDIC-COMBINED', 'SKI-JUMPING', 'FREESTYLE', 'SNOWBOARD'],
			vm.sportsRows = ko.mapping.fromJS(vm.colorData, {}, vm.sportsRows),
			vm.calendar = new Calendar (305, 42, {top: 20, right: 20, bottom: 20, left: 20}, 2, '#000E5C', ['#0000FF', '#490E7C', '#7438A8', '#AF1BFA', '#FF0000', '#F47920', '#F7B11B', '#F9EE50', '#D0F923', '#62E80C', '#32B208', '#045910', '#20D382', '#05E5D4', '#09AEDB'], 19, 15, vm.days, vm.sports),
			vm.selectedSport = ko.observable(null),
			vm.init = function () {
				vm.calendar.init(vm.calendar.outer, vm.calendar.inner, vm.calendar.strokeColor, vm.calendar.strokeWidth, vm.calendar.rings, vm.calendar.segments, vm.calendar.colors, vm.calendar.days, vm.calendar.sports);
			};
			vm.update = function (sport) {
				for (var i = 0; i < vm.sportData().length; i++) {
					vm.sportData()[i] = sport ? console.log("NICE: " + vm.sportData()[i]) : console.log("nope")
					break;
				}
			};
			console.log("vm.seasonsData: " + vm.seasonsData());
			console.log("vm.sportData: " + vm.sportData());
			console.log("vm.eventData: " + vm.eventData());
			console.log("vm.eventDataSpecific: " + vm.eventDataSpecific());
			console.log("vm.medalData: " + vm.medalData());
			console.log("vm.colorData: " + vm.colorData());

	};
		var viewmodel = new CalendarVM(305, 42, {top: 20, right: 20, bottom: 20, left: 20}, 2, '#000E5C', ['#0000FF', '#490E7C', '#7438A8', '#AF1BFA', '#FF0000', '#F47920', '#F7B11B', '#F9EE50', '#D0F923', '#62E80C', '#32B208', '#045910', '#20D382', '#05E5D4', '#09AEDB'], 19, 15); 
		ko.applyBindings(viewmodel, document.getElementById('interactiveWrapper'));
		viewmodel.init();
});