$(function () {
//Globals Vars
var seasonID = 2,
	sportID = 1, 
	setDate = "2014-02-09",
	seasonParams = {
		seasonID: 2
	},
	sportParams = {
		seasonID: 2,
		sportID: 1
	},
	mappingData = 
			[
				{
					"sport": "Biathlon",
					"color": "#0000FF", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": true, 
						"15": true,
						"14": true,
						"13": true,
						"12": false,
						"11": true,
						"10": true,
						"9": false,
						"8": true,
						"7": true,
						"6": false,
						"5": true,
						"4": false,
						"3": true,
						"2": true,
						"1": false
					}

				},
				{
					"sport": "Speed_Skating",
					"color": "#D0F923", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": true, 
						"15": true,
						"14": true,
						"13": true,
						"12": true,
						"11": true,
						"10": false,
						"9": true,
						"8": true,
						"7": false,
						"6": true,
						"5": true,
						"4": false,
						"3": true,
						"2": true,
						"1": false
					}

				},
				{
					"sport": "Bobsleigh",
					"color": "#490E7C", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": false, 
						"15": false,
						"14": false,
						"13": false,
						"12": false,
						"11": false,
						"10": false,
						"9": false,
						"8": true,
						"7": true,
						"6": true,
						"5": true,
						"4": false,
						"3": false,
						"2": true,
						"1": true
					}

				},
				{
					"sport": "Alpine_Skiing",
					"color": "#32B208", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": false, 
						"15": true,
						"14": true,
						"13": false,
						"12": true,
						"11": false,
						"10": true,
						"9": true,
						"8": true,
						"7": false,
						"6": true,
						"5": true,
						"4": false,
						"3": true,
						"2": true,
						"1": false
					}

				},
				{
					"sport": "Skeleton",
					"color": "#7438A8", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": false, 
						"15": false,
						"14": false,
						"13": false,
						"12": false,
						"11": true,
						"10": true,
						"9": true,
						"8": false,
						"7": false,
						"6": false,
						"5": false,
						"4": false,
						"3": false,
						"2": false,
						"1": false
					}

				},
				{
					"sport": "Cross-Country_Skiing",
					"color": "#62E80C", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": true, 
						"15": true,
						"14": true,
						"13": true,
						"12": false,
						"11": true,
						"10": true,
						"9": false,
						"8": true,
						"7": true,
						"6": false,
						"5": true,
						"4": false,
						"3": true,
						"2": true,
						"1": false
					}

				},
				{
					"sport": "Curling",
					"color": "#AF1BFA", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": false, 
						"15": false,
						"14": true,
						"13": true,
						"12": true,
						"11": true,
						"10": true,
						"9": true,
						"8": true,
						"7": true,
						"6": true,
						"5": true,
						"4": true,
						"3": true,
						"2": false,
						"1": false
					}

				},
				{
					"sport": "Nordic_Combined",
					"color": "#045910", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": true, 
						"15": true,
						"14": false,
						"13": true,
						"12": false,
						"11": true,
						"10": true,
						"9": true,
						"8": true,
						"7": false,
						"6": false,
						"5": true,
						"4": false,
						"3": false,
						"2": true,
						"1": true
					}

				},
				{
					"sport": "Ice_Hockey",
					"color": "#FF0000", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": true, 
						"15": true,
						"14": true,
						"13": true,
						"12": true,
						"11": true,
						"10": true,
						"9": true,
						"8": true,
						"7": true,
						"6": true,
						"5": true,
						"4": true,
						"3": true,
						"2": true,
						"1": true
					}

				},
				{
					"sport": "Ski_Jumping",
					"color": "#20D382", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": true, 
						"15": true,
						"14": false,
						"13": true,
						"12": false,
						"11": false,
						"10": true,
						"9": true,
						"8": false,
						"7": true,
						"6": false,
						"5": false,
						"4": false,
						"3": false,
						"2": false,
						"1": false
					}

				},
				{
					"sport": "Luge",
					"color": "#F47920", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": true, 
						"15": true,
						"14": true,
						"13": true,
						"12": true,
						"11": true,
						"10": false,
						"9": false,
						"8": false,
						"7": false,
						"6": false,
						"5": false,
						"4": false,
						"3": false,
						"2": false,
						"1": false
					}

				},
				{
					"sport": "Freestyle",
					"color": "#05E5D4", 
					"day" :
					{
						"18": true,
						"17": false,
						"16": true, 
						"15": false,
						"14": true,
						"13": true,
						"12": false,
						"11": true,
						"10": true,
						"9": false,
						"8": false,
						"7": true,
						"6": true,
						"5": false,
						"4": true,
						"3": true,
						"2": false,
						"1": false
					}

				},
				{
					"sport": "Figure_Skating",
					"color": "#F7B11B", 
					"day" :
					{
						"18": true,
						"17": false,
						"16": true, 
						"15": true,
						"14": false,
						"13": true,
						"12": true,
						"11": true,
						"10": true,
						"9": false,
						"8": true,
						"7": true,
						"6": false,
						"5": true,
						"4": true,
						"3": false,
						"2": true,
						"1": false
					}

				},
				{
					"sport": "Snowboard",
					"color": "#09AEDB", 
					"day" :
					{
						"18": true,
						"17": false,
						"16": true, 
						"15": true,
						"14": false,
						"13": true,
						"12": true,
						"11": false,
						"10": false,
						"9": false,
						"8": true,
						"7": true,
						"6": false,
						"5": true,
						"4": false,
						"3": false,
						"2": true,
						"1": false
					}

				},
				{
					"sport": "Short_Track",
					"color": "#F9EE50", 
					"day" :
					{
						"18": false,
						"17": false,
						"16": false, 
						"15": false,
						"14": true,
						"13": false,
						"12": false,
						"11": true,
						"10": false,
						"9": true,
						"8": false,
						"7": false,
						"6": true,
						"5": false,
						"4": false,
						"3": true,
						"2": false,
						"1": false
					}

				}
			];

/**
 *	Utility Functions
 **/

 	function stripLetters (string) {
 		return string.replace(/\D/g,'');
 	}
 	function convertSpaces (string) {
 		return string.replace(" ", "_");
 	}

/**
 *	AJAX Request Methods - Retrieve Data From API
 **/

 	//Generate URL For AJAX Request
	var generateURL = function (location, params) {
 		var url = null;
 		var urlString = '';
 		var baseURL = "http://wwwtest.sportsinteraction.com/service/infostrada/" + location + ".cfm?";
	 		$.each(params, function (key, value) {
	 			return urlString = urlString + "&" + key + "=" + value;
	 		});
 		var url = "" + baseURL + urlString;
 		return url;
 	};

	//General AJAX request
	var asyncResource = function (url) {
		var data = null;
		$.ajax({
			async: false,
			type: "GET",
			url: url,
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
		console.log("URL requested: " + url);
		return data;
	};

/**
 *	General UI Handling
 **/

 	d3.select('.sportArc').on('mouseover', function () {
 		console.log(this);
 	});

/**
 *	Calendar Class
 *	@params Radius 1 (int), Radius 2 (int), Margins (object), Stroke Width (int), Stroke Color (hex/rgb), Colors (array - hex/rgb), Days (int), Sports (int)
 *		Params Passed to constructor by CalendarVM
 **/

	var Calendar = function (r1, r2, margins, strokeWidth, strokeColor, colors, days, sports, mapping) {
		//Defining variables
		var pi = Math.PI;
		var calendar = this;
			calendar.mapping = mapping,
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
			calendar.days = days,
			calendar.sports = sports,
			calendar.rings = days.length,
			calendar.segments = sports.length + 1,
			calendar.segmentWidth = calendar.segments/360;
			//Creating SVG element
			calendar.svg = d3.select('#calendar').append("svg")
				.attr("width", calendar.width)
				.attr("height", calendar.height);

			//Generating Calendar
			calendar.init = function (outer, inner, strokeColor, strokeWidth, segments, rings, colors, sports, days) {
				var ringWidth = (outer - inner)/rings;
				var offsetOdd = 0;
				var offsetEven = 7.5;
				for(var i = 0; i < segments; i++) {
					for(var j = 0; j < rings; j++) {
						if (calendar.mapping[i].day[j] && i%2 == 0) {
							var position = i + offsetOdd;
							var arc = d3.svg.arc()
									.innerRadius(inner + (ringWidth * j))
									.outerRadius(inner + (ringWidth * (j + 1)))
									.startAngle((360/segments) * (i + offsetOdd) * (pi/180))
									.endAngle((360/segments) * (i + 1 + offsetOdd) * (pi/180));
								calendar.svg.append("path")
									.attr("d", arc)
									.attr("class", ("sportArc day" + days[days.length - j] + " " + sports[i]))
									.attr("data-arc", "{day: " + days[days.length - j] + ", sport: " + sports[i] + "}")
									.attr("data-bind", "calendarHover: function () {calendar.hoverOver()}")
									.attr("fill", colors[i])
									.attr("stroke", strokeColor)
									.attr("stroke-width", strokeWidth + "px")
									.attr("transform", "translate(" + calendar.width/2 + ", " + calendar.height/2 + ")");
						};
						if (calendar.mapping[i].day[j] && i%2 == 1) {
							var position = i - offsetEven;
							var arc = d3.svg.arc()
									.innerRadius(inner + (ringWidth * j))
									.outerRadius(inner + (ringWidth * (j + 1)))
									.startAngle((360/segments) * (i + offsetEven) * (pi/180))
									.endAngle((360/segments) * (i + 1 + offsetEven) * (pi/180));
								calendar.svg.append("path")
									.attr("d", arc)
									.attr("class", ("sportArc day" + days[days.length - j] + " " + sports[i]))
									.attr("data-arc", "{day: " + days[days.length - j] + ", sport: " + sports[i] + "}")
									.attr("data-bind", "calendarHover: function () {calendar.hoverOver()}")
									.attr("fill", colors[i])
									.attr("stroke", strokeColor)
									.attr("stroke-width", strokeWidth + "px")
									.attr("transform", "translate(" + calendar.width/2 + ", " + calendar.height/2 + ")");
						};
					};
					offsetOdd = offsetOdd -.5;
					offsetEven = offsetEven -.5;
				};
			};
/**
 *	Calendar Methods
 **/
			//On Update
			calendar.filter = function (sport, color) {
				var sport = sport();
				console.log(sport);
					$('#sportsExit').fadeIn(600);
					$('#centerDate').addClass('selectable')
					d3.select("#centerCircle").transition().ease('easeOutQuart').duration(600).attr("stroke", color());
					$('.' + sport).animate({opacity: .70}, 600);
					$('.sportArc').not('.' + sport).animate({opacity: .15}, 400);
			};
			//Resets Calendar to Init State
			calendar.reset = function () {
				d3.select("#centerCircle").transition().ease('easeOutQuart').duration(600).attr("stroke", "#FFFFFF");
				$('.sportArc').animate({opacity: .70}, 600);
				$('#sportsExit').fadeOut(600);
				$('#centerDate').removeClass('selectable');
			}
			calendar.selectArc = function (day, sport) {
				console.log(day, sport)
			};
			//Hover Over Arc
			calendar.hoverOver = function (day, sport) {
				var sport = sport;
				d3.selectAll('.sportArc').on('mouseover', function (d) {
					console.log(d3.select(this));
				})
			};
			//Hover Out of Arc
			calendar.hoverOut = function () {
				$('.sportArc').animate({opacity: .70}, 600);
				console.log("hover out");
			};
	};

/**
 *	Calendar View Model
 *	@params (Inner Radius (int), Outer Radius(int), Margins(obj), Stroke Width(int), Stroke Color(str), Colors(arr), Days(int), Sports(int))
 **/

	var CalendarVM = function (r1, r2, margins, strokeWidth, strokeColor, colors, rings, segments) {
		var vm = this;
	
	/**
	 *	Mapping Logic
	 **/


			//Structures Mapping Data For Menu
			vm.menuData = function (data) {
				var sport = null;
				var color = null;
				var array = [];
				$.each(data, function (key, value) {
					sport = value.sport;
					color = value.color;
					if ((sport != null) && (color != null)) {
						array.push({sport: sport, color: color});
						sport = null;
						color = null;
					}
				});
				return array;
			};

			//Creates Sports Array With Formatted Names
			vm.sports = function (data) {
				var name = null;
				var array = [];
				$.each(data, function (key, value) {
					name = value.sport;
					array.push(name);
				});
				return array;
			};

			//Creates Days Array From First Sport Object in Mapping JSON
			vm.days = function (data) {
				var array = [];
				$.each(data[0].day, function (key, value) {
					array.push(key);
				});
				return array;
			};

			//Creates Colors Array
			vm.colors = function (data) {
				var color = null;
				var array = [];
				var data = data;
				$.each(data, function (key, value) {
					color = value.color;
					array.push(color);
				});
				return array;
			};

			//Setting Menu Data
			vm.menuRows = ko.mapping.fromJS(mappingData, {}, vm.menuRows);
			//Retrieving Sports From Map
			vm.mappedSports = vm.sports(mappingData);
			//Retrieving Days From Map
			vm.mappedDays = vm.days(mappingData);
			//Retrieving Colors From Map
			vm.mappedColors = vm.colors(mappingData);
			
	/**
	 *	Dynamic Data
	 **/

			//Creates Sports Array With Formatted Names * format may no longer be necessary - tentatively removed
			vm.apiSports = function (data) {
				var name = null;
				var array = [];
				$.each(data, function (key, value) {
					name = value.name;
					array.push(name);
				});
				return array;
			};

			vm.apiCountries = function (data) {
				var name = null;
				var id = null;
				var array = [];
				$.each(data, function (key, value) {
					name = value.name_short;
					id = value.infostrada_id;
					if ((name != null) && (id != null)) {
						array.push({country: name, id: id});
						name = null;
						id = null
					};
				});
				return array;
			};

			//Creates array with matching sport names & IDs
			vm.apiSportsIDs = function (data) {
				var name = null;
				var id = null;
				var array = [];
				$.each(data, function (key, value) {
					name = value.name;
					id = value.infostrada_id;
					if ((name != null) && (id != null)) {
						array.push({sport: name, id: id});
						name = null;
						id = null;
					};
				});
				return array;
			};

				//Mapping Data
				// mappingData = asyncResource('data/mapping.json');
				//Initial Data Retrieval
				// vm.sportCountryData = asyncResource(generateURL("summary", seasonParams));
				// console.log("vm.sportCountryData " + vm.sportCountryData);
				// vm.sportData = asyncResource(generateURL("summary", sportParams));
				// console.log("vm.sportData " + vm.sportData);

	/**
	 *	ViewModel Methods
	 **/

			//Calendar Initialization
			vm.init = function () {
				//Defining Calendar
				vm.calendar = new Calendar (328, 18, {top: 20, right: 20, bottom: 20, left: 20}, 2, '#07153D', vm.mappedColors, vm.mappedSports, vm.mappedDays, mappingData),
				vm.calendar.init(vm.calendar.outer, vm.calendar.inner, vm.calendar.strokeColor, vm.calendar.strokeWidth, vm.calendar.rings, vm.calendar.segments, vm.calendar.colors, vm.calendar.days, vm.calendar.sports);
			};
			vm.update = function (sport) {
				for (var i = 0; i < vm.sportData.length; i++) {
					vm.sportData[i] = sport ? console.log("NICE: " + vm.sportData[i]) : console.log("nope");
					break;
				};
			};

	/**
	 *	UI Methods
	 **/

			vm.exitDataView = function () {
				$('#dataPane').fadeOut();
			};
	};

/**
 *	KO Custom Bindings
 **/

	ko.bindingHandlers.calendarHover = {
		init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
			var calendar = valueAccessor();
		},
	    update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	      var calendar = valueAccessor();
	        ko.utils.registerEventHandler(element, "mouseover", function() {
	        	calendar.hoverOver();
	        });  
	        ko.utils.registerEventHandler(element, "mouseout", function() {
	        	calendar.hoverOut();
	        });      
	    } 
	};

/**
 *	Initializing ViewModel
 **/

		var viewmodel = new CalendarVM(328, 18, {top: 20, right: 20, bottom: 20, left: 20}, 2, '#07153D', ['#0000FF', '#490E7C', '#7438A8', '#AF1BFA', '#FF0000', '#F47920', '#F7B11B', '#F9EE50', '#D0F923', '#62E80C', '#32B208', '#045910', '#20D382', '#05E5D4', '#09AEDB'], 15, 18); 
		ko.applyBindings(viewmodel, document.getElementById('interactiveWrapper'));
		viewmodel.init();
});