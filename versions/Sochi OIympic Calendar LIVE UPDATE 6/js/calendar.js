$(function () {
//Globals Vars
var mappingData =
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
			"color": "#CCFF00", 
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
			"color": "#46A81A", 
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
			"color": "#0F7B00", 
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
				"16": false, 
				"15": false,
				"14": false,
				"13": false,
				"12": true,
				"11": false,
				"10": false,
				"9": false,
				"8": false,
				"7": false,
				"6": true,
				"5": false,
				"4": true,
				"3": false,
				"2": false,
				"1": false
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
			"color": "#FF7800", 
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
			"sport": "Freestyle_Skiing",
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
			"color": "#FFAE00", 
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
				"2": false,
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
			"color": "#FFF000", 
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
	//Update to Current Season ID as Needed
	var initialParams = {
			seasonID: 1
		},
		seasonID = 1,
		processingXHR = false,
		notifications = [];

/**
 *	Utility Functions - String Formatters and Date Object Parsers
 **/

 	//Strips Letters
 	function stripLetters (string) {
 		return string.replace(/\D/g,'');
 	}

 	//Converts Spaces to Underscores
 	function convertSpaces (string) {
 		return string.replace(" ", "_");
 	}

 	//Converts Underscores to Spaces
 	function convertMDash (string) {
 		return string.replace("_", " ");
 	}

 	//Format Status
 	function formatStatus (string) {
 		switch (string) {
 			case "did_not_start" : string =  "DNS";
 			break;
 			case "did_not_finish" : string =  "DNF";
 			break;
 			case "normal" : string = "NR";
 			break;
 			default: string = "NR";
 		}
 		return string;
 	}

 	//Format Gender
 	function formatGender (string) {
 		switch (string) {
 			case "Men" : string = "Men's";
 			break;
 			case "Women" : string = "Women's";
 			break;
 			case "Mixed" : string = string;
 			break;
 			default: string = "";
 		}
 		return string;
 	}

 	//Format ParsedDate Object to EST Hour
	formatZone = function (time, offset) {
		if (time == null) {
			return "- - : - -";
		} else {
			var parsedDate = new ParsedDate(time);
			var hour = parsedDate.time.substr(0, 5);
			var hours = parseInt(hour.substr(0, 2));
			var minutes = hour.substr(3, 2);
			var m = '';
			var zone = hours - offset;
			if (zone < 0) {
				return zone = zone + 24;
			}
			zone = zone.toString();
			if (parseInt(zone) > 12) {
				zone = zone - 12;
				m = "pm";
			} else {
				m = "am";
			}
			if (parseInt(zone) == 0) {
				zone = 12;
			}
			zone = zone + ":" + minutes + " " + m;
			return zone;
		}
	}

	//Date Parsing Function
	var ParsedDate = function (date) {
		if (date == null) {
			return "- - : - -";
		} else {
			var months = [{"month": "01", "name": "January"}, {"month": "02", "name": "February"}, {"month": "03", "name": "March"}, {"month": "04", "name": "April"}, {"month": "05", "name": "May"}, {"month": "06", "name": "June"}, {"month": "07", "name": "July"}, {"month": "08", "name": "August"}, {"month": "09", "name": "September"}, {"month": "10", "name": "October"}, {"month": "11", "name": "November"}, {"month": "12", "name": "December"}];
				if (date.length === 20){
					var ISO8061 = date,
						splitDate = ISO8061.split('T'),
						year = splitDate[0].substr(0, 4),
						month = splitDate[0].substr(5, 2),
						monthName = '',
						day = splitDate[0].substr(8, 2);
						if (day[0] == 0) {
							day = day[1];
						};
						time = splitDate[1].substr(0, 8);
						for (var i = 0; i < months.length; i++) {
							if (months[i].month == month) {
								var monthName = months[i].name;
								break;
							};
						};
						this.year = year;
						this.month = month;
						this.monthName = monthName;
						this.day = day;
						this.time = time;
				} else if (date.length === 10 && date[10] === "Z") {
					var ISO8061 = date.substr(0, 9),
						time = ISO8061.substr(0, 8);
						this.time = time;
				} else if (date.length === 10) {
					var ISO8061 = date,
						year = ISO8061.substr(0, 4),
						month = ISO8061.substr(5, 2),
						monthName = '',
						day = ISO8061.substr(8, 2);
						if (day[0] == 0) {
							day = day[1];
						};
						for (var i = 0; i < months.length; i++) {
							if (months[i].month == month) {
								var monthName = months[i].name;
								break;
							};
						};
						this.year = year;
						this.month = month;
						this.monthName = monthName;
						this.day = day;
				} else {
					return;
				};
			};
	};
	ParsedDate.prototype.year = function () {
		return this.year;
	};
	ParsedDate.prototype.month = function () {
		return this.month;
	};
	ParsedDate.prototype.monthName = function () {
		return this.monthName;
	};
	ParsedDate.prototype.day = function () {
		return this.day;
	};
	ParsedDate.prototype.time = function () {
		return this.time;
	};

	//Allows For The Comparing of Date Objects
	pastPresent = function (test) {
		var dates = {
		    convert:function(d) {
		        return (
		            d.constructor === Date ? d :
		            d.constructor === Array ? new Date(d[0],d[1],d[2]) :
		            d.constructor === Number ? new Date(d) :
		            d.constructor === String ? new Date(d) :
		            typeof d === "object" ? new Date(d.year,d.month,d.date) :
		            NaN
		        );
		    },
		    compare:function(a,b) {
		        return (
		            isFinite(a=this.convert(a).valueOf()) &&
		            isFinite(b=this.convert(b).valueOf()) ?
		            (a>b)-(a<b) :
		            NaN
		        );
		    }
		}
		//Create New Date (Present) and Compare Output
		var now = null;
		var formatted = new Date(test.started);
		test.updated != null ? now = new Date(test.updated) : now = new Date();
		if (dates.compare(now, formatted) == -1 || dates.compare(now, formatted) == 0) {
			return false;
		} else {
			return true;
		}
	}

/**
 *	AJAX Request Methods - Retrieve Data From API
 **/

 	//Generate URL For AJAX Request
	var generateURL = function (location, params) {
 		var url = null;
 		var urlString = '';
 		var baseURL = "//wwwtest.sportsinteraction.com/service/infostrada/" + location + ".cfm?";
	 		$.each(params, function (key, value) {
	 			return urlString = urlString + "&" + key + "=" + value;
	 		});
 		var url = "" + baseURL + urlString;
 		return url;
 	};

	//General AJAX Request With a Few Styling for Data Pane Loading Header
	var asyncResource = function (url) {
		processingXHR = true;
		// console.debug("XHR Status: Requesting...");
		$('#sportDisplay').html('');
		$('.c1 .bubblingsmall').fadeIn(400);
		$('.c2 .dateDisplay').html('<br>');
		return $.ajax(url, {
				async: true,
				crossDomain: true,
				dataType: "json",
			});
		};

/**
 *	Calendar Class
 *	@params Radius 1 (int), Radius 2 (int), Margins (object), Stroke Width (int), Stroke Color (hex/rgb), Colors (array - hex/rgb), Days (int), Sports (int)
 *	Params Passed to constructor by ViewModel
 **/

	var Calendar = function (r1, r2, margins, strokeWidth, strokeColor, colors, days, sports, mapping, parentViewmodel) {
		//Defining variables
		var pi = Math.PI;
		var calendar = this;
			calendar.mapping = mapping,
			calendar.inner = r1,
			calendar.outer = r2;
			//Ensuring Largest Radius Will Always Be Assigned to Outer Radius
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
			calendar.segmentWidth = calendar.segments/360,
			//Creating SVG Element
			calendar.svg = d3.select('#calendar').append("svg")
				.attr("width", calendar.width)
				.attr("height", calendar.height),
			calendar.date = {},
			calendar.viewmodel = parentViewmodel,
			calendar.filterHistory = [],
			calendar.selectedHistory = [],
			calendar.arcHistory = [],
			calendar.temp = [],
			//Control Flow Variables
			calendar.filtering = false,
			calendar.dataDisplaying = false;
			
	/**
	 *	Calendar Methods
	 **/

			//Outputs Calendar Chart and Binds Event Handlers
			calendar.init = function (outer, inner, strokeColor, strokeWidth, segments, rings, colors, sports, days) {
				var ringWidth = (outer - inner)/rings;
				var offsetOdd = 0;
				var offsetEven = calendar.rings/2;
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
									.attr("data-arc", '{"day": ' + days[days.length - j] + ', "sport": "' + sports[i] + '"}')
									.attr("fill", colors[i])
									.attr("stroke", strokeColor)
									.attr("stroke-width", strokeWidth + "px")
									.attr("transform", "translate(" + calendar.width/2 + ", " + calendar.height/2 + ")")
									.on("mouseover", function () {
										var arcData = d3.select(this).attr("data-arc");	
											calendar.hoverOver(arcData);
									})
									.on("click", function () {
										var arcData = d3.select(this).attr("data-arc");	
											calendar.selectArc(arcData); 
									})
									.on("touchend", function (d) {
										var arcData = d3.select(this).attr("data-arc");
											calendar.selectArc(arcData);
									})
									.on("mouseleave", function () {
										var arcData = d3.select(this).attr("data-arc");	
											calendar.hoverOut(arcData);
									});
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
									.attr("data-arc", '{"day": ' + days[days.length - j] + ', "sport": "' + sports[i] + '"}')
									.attr("fill", colors[i])
									.attr("stroke", strokeColor)
									.attr("stroke-width", strokeWidth + "px")
									.attr("transform", "translate(" + calendar.width/2 + ", " + calendar.height/2 + ")")
									.on("mouseover", function () {
										var arcData = d3.select(this).attr("data-arc");	
											calendar.hoverOver(arcData);
									})
									.on("click", function (d) {
										var arcData = d3.select(this).attr("data-arc");	
											calendar.selectArc(arcData);
									})
									.on("touchend", function (d) {
										var arcData = d3.select(this).attr("data-arc");
											calendar.selectArc(arcData);
									})
									.on("mouseleave", function (d) {
										var arcData = d3.select(this).attr("data-arc");	
											calendar.hoverOut(arcData);
									});
						};
					};
					offsetOdd -= .5;
					offsetEven -= .5;
				};
			};

			//Called in View
			calendar.filter = function (sport, color) {
				var sport = sport();
				var color = color();
				calendar.selectedHistory.splice(0, 2);
				calendar.filterHistory.splice(0, 1);
				calendar.filterHistory.push(sport);
				calendar.filtering = true;
				$('#sportsPane .header .headtype .c2 span').fadeIn(600);
				d3.select("#centerCircle").transition().ease('easeOutQuart').duration(600).attr("stroke", color);
				$('#centerDismiss').addClass('selectable');
				$('.' + sport).stop().animate({opacity: .9}, 600);
				$('.col2, .col4').stop().animate({opacity: 1}, 600);
				$('.col1 svg circle, .col3 svg circle').stop().animate({opacity: 1}, 600);
				$('.sportArc').not('.' + sport).stop().animate({opacity: .15}, 400);
				$('.col2, .col4').not('#' + sport).stop().animate({opacity: .15}, 400);
				$('.col1 svg circle, .col3 svg circle').not('.' + sport + "Circle").stop().animate({opacity: .15}, 400);
			};
			//Resets Calendar to Init State
			calendar.reset = function () {
				calendar.filterHistory.splice(0, 1);
				calendar.filtering = false;
				$('#sportsPane .header .headtype .c2 span').stop().fadeOut(400);
				d3.select("#centerCircle").transition().ease('easeOutQuart').duration(600).attr("stroke", "#FFFFFF");
				$('#centerDismiss').removeClass('selectable');
				$('#centerDismiss .dateDisplay').stop().fadeOut(600);
				$('.col2, .col4').stop().animate({opacity: 1}, 600);
				$('.col1 svg circle, .col3 svg circle').stop().animate({opacity: 1}, 600);
				$('.sportArc').stop().animate({opacity: 1}, 600);
				$('#sportsExit').stop().fadeOut(600);
				calendar.selectedHistory.splice(0, 2);
			};
			//Resets Calendar to Init State
			calendar.softReset = function () {
				calendar.filterHistory.splice(0, 1);
				calendar.filtering = false;
				$('#sportsPane .header .headtype .c2 span').stop().fadeOut(400);
				d3.select("#centerCircle").transition().ease('easeOutQuart').duration(600).attr("stroke", "#FFFFFF");
				$('.col2, .col4').stop().animate({opacity: 1}, 600);
				$('.col1 svg circle, .col3 svg circle').stop().animate({opacity: 1}, 600);
				$('.sportArc').stop().animate({opacity: 1}, 600);
				// calendar.selectedHistory.splice(0, 2);
				$('#sportsExit').stop().fadeOut(600);
			};

			//Retrieves Arc Data & Matches it to API Data From Initial XHR Request
			calendar.selectArc = function (arcData) {
					var data = $.parseJSON(arcData);
					if (processingXHR !== true) {
						$('.' + calendar.selectedHistory[0] + '.' + calendar.selectedHistory[1]).stop().animate({"opacity": .20});
						calendar.selectedHistory.splice(0, 2);
						calendar.selectedHistory.push("day" + data.day, data.sport);
					}
					$('.' + calendar.selectedHistory[0] + '.' + calendar.selectedHistory[1]).stop().animate({"opacity": 1});
					var apiDate = function () {
						var date = '';
						$.each(calendar.viewmodel.calendarDates, function (key, value) {
							if (value == data.day) {
								date = key;
							};
						});
						return date;
					};
					var apiSport = function () {
						var id = null;
						$.each(calendar.viewmodel.sportIDs, function (key, value) {
							var sport = convertMDash(data.sport);
							if (key == sport) {
								id = value;
							};
						});
						return id;
					}
					calendar.displayData(apiSport(), apiDate(), data, arcData);
			};

			//Hover Over Arc
			calendar.hoverOver = function (arcData) {
				var data = $.parseJSON(arcData);
				if (calendar.filtering === true) {
					$('#centerDismiss .dateDisplay').show().addClass('selectable');
					$('#' + data.sport + ', .' + data.sport + 'Circle').stop().animate({opacity: .7});
					$('.col2, .col4').not('#' + data.sport + ', #' + calendar.filterHistory[0]).stop().animate({opacity: .15});
					$('.col1 svg circle, .col3 svg circle').not('.' + data.sport + "Circle, ." + calendar.filterHistory[0] + "Circle").stop().animate({opacity: .15});
					var apiDate = function () {
						var date = '';
						$.each(calendar.viewmodel.calendarDates, function (key, value) {
							if (value == data.day) { date = key };
						});
						return date;
					};
					try {
						calendar.date = new ParsedDate(apiDate());
						$('#centerDismiss .dateDisplay').html(((calendar.date.monthName).substr(0, 3)) + " " + calendar.date.day);
					} catch (error) {
						notifications.push("Error: Hover Data Unavailable - Initial API Request Failed \n" + error);
					}
				} else {
					$('#' + data.sport + ', .' + data.sport + 'Circle').stop().animate({opacity: .7});
					$('.col2, .col4').not('#' + data.sport + ', #' + calendar.selectedHistory[1]).stop().animate({opacity: .15});
					$('.col1 svg circle, .col3 svg circle').not('.' + data.sport + "Circle, ." + calendar.selectedHistory[1] + "Circle").stop().animate({opacity: .15});
					$('.sportArc').stop().animate({opacity: .2});
					$('.day' + data.day).stop().animate({opacity: .6});
					$('#centerDismiss .dateDisplay').show().addClass('selectable');
					var apiDate = function () {
						var date = '';
						$.each(calendar.viewmodel.calendarDates, function (key, value) {
							if (value == data.day) { date = key };
						});
						return date;
					};
					try {
						calendar.date = new ParsedDate(apiDate());
						$('#centerDismiss .dateDisplay').html(((calendar.date.monthName).substr(0, 3)) + " " + calendar.date.day);
					} catch (error) {
						notifications.push("Error: Hover Data Unavailable - Initial API Request Failed \n" + error);
					}
				}
				$('.' + calendar.selectedHistory[0] + '.' + calendar.selectedHistory[1]).stop().animate({"opacity": 1});
			};

			//Hover Out of Arc
			calendar.hoverOut = function (arcData) {
				var data = $.parseJSON(arcData);
				if (calendar.filtering === true) {
					$('.col2, .col4').not('#' + calendar.filterHistory[0]).stop().animate({opacity: .15}, 400);
					$('.col1 svg circle, .col3 svg circle').not('.' + calendar.filterHistory[0]).stop().animate({opacity: .15}, 400);
					return;
				} else if (calendar.selectedHistory.length !== 0) {
					$('#' + calendar.selectedHistory[1] + ", ." + calendar.selectedHistory[1] + "Circle").stop().animate({opacity: 1}, 600);
					$('.col2, .col4').not('#' + calendar.selectedHistory[1]).stop().animate({opacity: .15}, 600);
					$('.col1 svg circle, .col3 svg circle').not('.' + calendar.selectedHistory[1] + "Circle").stop().animate({opacity: .15}, 600);
					$('.sportArc').not('.' + calendar.selectedHistory[0] + '.' + calendar.selectedHistory[1]).stop().animate({opacity: .20});
				} else {
					$('.col2, .col4').stop().animate({opacity: 1});
					$('.col1 svg circle, .col3 svg circle').stop().animate({opacity: 1});
					var data = $.parseJSON(arcData);
					$('.sportArc').stop().animate({opacity: 1});
					$('.day' + data.day).stop().animate({opacity: 1});
					$('#centerDismiss .dateDisplay').hide().removeClass('selectable');
				}
				if (processingXHR !== true) {
					try {
						calendar.date = new ParsedDate(calendar.arcHistory[0]);
						$('#centerDismiss .dateDisplay').html(((calendar.date.monthName).substr(0, 3)) + " " + calendar.date.day);
					} catch (error) {
						notifications.push("Error: Hover Data Unavailable - Initial API Request Failed \n" + error);
					}
					$('.' + calendar.selectedHistory[0] + '.' + calendar.selectedHistory[1]).stop().animate({"opacity": 1});
				}
			};

			//Called From selectArc Method, Retrieves Data From API and Constructs New Data Object
			calendar.displayData = function (selectedSport, selectedDate, data, arcData) {
				// Retrieving Data From API
				if (calendar.filtering === true && data.sport != calendar.filterHistory[0]) {
					calendar.softReset();
					calendar.hoverOver(arcData);
				}
				//Temp Selected Arc Cache - Reverts Arc Selection on New XHR Failure
				calendar.temp.push(calendar.selectedHistory[0], calendar.selectedHistory[1]);
				//Clearing Old Data in Preparation for New XHR
				if (data.sport != calendar.selectedHistory[1] && processingXHR !== true) {
					calendar.softReset();
					calendar.hoverOver(arcData);
				//Prevents Stacking of XHR
				} else if (processingXHR === true) {
					calendar.selectedHistory.splice(0 , 2);
					calendar.selectedHistory.push(calendar.temp[0], calendar.temp[1]);
					calendar.temp.splice(0, 10);
					$('.' + calendar.temp[0] + '.' + calendar.temp[1]).stop().animate({"opacity": 1});
					// console.debug("XHR Status: Request Failed. Please Wait For Prior Request to Resolve.");
					$('.c1 .bubblingsmall').fadeIn(600);
					$('.c2 .dateDisplay').html('<br>');
					if(calendar.dataDisplaying == false) {	
						$('#dataPane').fadeIn(600);
						d3.select("#dataExit").on("click", function () {
							calendar.exitDataView();
						});
						d3.select("#centerDismiss").on("click", function () {
							calendar.exitDataView();
						});
						calendar.dataDisplaying = true;
						return;
					};
				// Retrieving Data From API
				} else {
					if (calendar.filtering == true) {
						$('.' + calendar.selectedHistory[1]).stop().animate({opacity: .9});
					}
					calendar.arcHistory.splice(0, 10);
					calendar.arcHistory.push(selectedDate);
					//User Requested Data
					var params = {seasonID: seasonID, sportID: selectedSport, date: selectedDate};
					//Setting Template Rendering Observables to False
					calendar.viewmodel.teamSchedule(false);
					calendar.viewmodel.singleSchedule(false);
					calendar.viewmodel.teamResult(false);
					calendar.viewmodel.singleResult(false);
					calendar.viewmodel.noData(false);
					calendar.viewmodel.waitingResults(false);
					calendar.viewmodel.loadingData(true);
					calendar.viewmodel.displayTeamResults = false;
					calendar.viewmodel.displaySingleResults = false;
					//XHR
					asyncResource(generateURL("summary", params)).done(function (response) {
						//Fadeout loading css / update scrollbar / display sport & date
						$('.c1 .bubblingsmall').fadeOut(0);
						$('#sportDisplay').html(convertMDash(format(data.sport)).toUpperCase());
						$('.c2 .dateDisplay').html((calendar.date.monthName.substr(0, 3)) + " " + calendar.date.day);
						$('.dataOut').perfectScrollbar('update');
						//Constructing New Data Object
						calendar.viewmodel.dataOutput.removeAll();
						var sportData = response;
						//Determines Which Template to Render in Data Pane
						try {
							try {
								for (var h = 0; h < sportData.sports[0].event_phases.length; h++) {
									for (var i = 0; i < sportData.sports[0].event_phases[h].phases.length; i++) {
										try {
											for (var j = 0; j < sportData.sports[0].event_phases[h].phases[i].matches.length; j++) {
												if ((sportData.sports[0].event_phases[h].phases[i].matches[j].home_result != undefined) && (data.sport != "Ice_Hockey" || data.sport != "Curling")) {
													calendar.viewmodel.displayTeamResults = true;
													break;
												}
											}
										} catch (error) {
											notifications.push("Notification: Team Match Has No Results Data \n" + error);
										}
									}
								}
							} catch (error) {
								notifications.push("Notification: Team Phase Has No Match Data \n" + error);
							}
							try {
								for (var i = 0; i < sportData.sports[0].event_phases[0].phases.length; i++) {
									try {
										for (var j = 0; j < sportData.sports[0].event_phases[0].phases[i].results.length; j++) {
											if ((sportData.sports[0].event_phases[0].phases[i].results[j].rank != null) && (data.sport != "Ice_Hockey" && data.sport != "Curling")) {
												calendar.viewmodel.displaySingleResults = true;
												break;
											}
										}
									} catch (error) {
										notifications.push("Notification: Single Phase Has No Results Data \n" + error);
									}
								}
							} catch (error) {
								notifications.push("Notification: Single Phase Has No Results Data \n" + error);
							}
							if (calendar.viewmodel.displaySingleResults == false && (data.sport != "Ice_Hockey" && data.sport != "Curling")) {
								calendar.viewmodel.singleSchedule(true);
							} else if (calendar.viewmodel.displaySingleResults == true && (data.sport != "Ice_Hockey" && data.sport != "Curling")) {
								calendar.viewmodel.singleResult(true);
							} else if (calendar.viewmodel.displayTeamResults === false && (data.sport == "Ice_Hockey")) {
								calendar.viewmodel.teamSchedule(true);
							} else if (calendar.viewmodel.displayTeamResults === true && (data.sport == "Ice_Hockey")) {
								calendar.viewmodel.teamResult(true);
							} else if (calendar.viewmodel.displayTeamResults === false && (data.sport == "Curling")) {
								calendar.viewmodel.teamSchedule(true);
							} else if (calendar.viewmodel.displayTeamResults === true && (data.sport == "Curling")) {
								calendar.viewmodel.teamResult(true);
							} else {
								calendar.viewmodel.noData(true);
							}
							//Contructing Data Object
							//Team Schedule
							if (calendar.viewmodel.teamSchedule() == true) {
								var obj =  {};
									obj.events = [];
								try {
									for (var i = 0; i < sportData.sports[0].event_phases.length; i++) {
										for (var j = 0; j < sportData.sports[0].event_phases[i].phases.length; j++) {
											var venue = null,
												gender = '',
												startTime = null,
												newMatch = false;
												if (sportData.sports[0].event_phases[i].phases[j].matches) {
													newMatch = true;
													matchName = '';
												}
												try {
													//Inserting Venue & Event Properties
													venue = sportData.sports[0].event_phases[i].phases[j].venue.name;
													startTime = sportData.sports[0].event_phases[i].started_at;
													//Ensuring Venue is Not Duplicated
													if (!obj.hasOwnProperty(venue)) {
														obj.venue = venue;
													}
												} catch (error) {
													obj.startTime = "";
													obj.venue = "Venue Data Unavailable";
													notifications.push("Error: Venue Data Unavailable \n" + error);
												}
												try {
													if (sportData.sports[0].event_phases[i].gender == null) {
														gender = '';
													} else {
														gender = sportData.sports[0].event_phases[i].gender;
													}
													if (sportData.sports[0].event_phases[i].phases[j].name == null) {
														matchName = "Unknown";
													} else {
														matchName = sportData.sports[0].event_phases[i].phases[j].name;
													};
													if (sportData.sports[0].event_phases[i].phases[j].matches.length > 0 && newMatch === true) {
														obj.events[i] = {ev: formatGender(gender) + " " + matchName, match: [], startTime: startTime};
														newMatch = false;
													};
												} catch (error) {
													notification.push("Error: Phase And/Or Gender Data Unavailable \n" + error);
												};
											for (var k = 0; k < sportData.sports[0].event_phases[i].phases[j].matches.length; k++) {
												var startTime = "",
													homeShort = null,
													awayShort = null;
													obj.events[i].match[k] = {participants: []};
												try {
													startTime = sportData.sports[0].event_phases[i].phases[j].matches[k].started_at;
													homeShort = sportData.sports[0].event_phases[i].phases[j].matches[k].home_participant.name_short;
													awayShort = sportData.sports[0].event_phases[i].phases[j].matches[k].away_participant.name_short;
													try {
														obj.events[i].match[k] = {startTime: startTime, awayShort: awayShort, homeShort: homeShort};
													} catch (error) {
														obj.events[i].match[k] = {startTime: startTime, awayShort: awayShort, homeShort: homeShort};
														notifications.push("Error: Unable to Determine Winning Participant \n" + error);
													}
												// Who Won?
												} catch (error) {
													obj.events[i].match[k] = {startTime: startTime, awayShort: awayShort, homeShort: homeShort};
													notifications.push("Error: No Match Data \n" + error);
												} 
											}
										}
									}
								} catch (error) {
									notifications.push("Error: No Event Data Available \n" + error);
								}
							}
							//Team Result
							if (calendar.viewmodel.teamResult() == true) {
								var obj =  {};
									obj.events = [];
								try {
									for (var i = 0; i < sportData.sports[0].event_phases.length; i++) {
										for (var j = 0; j < sportData.sports[0].event_phases[i].phases.length; j++) {
											var gender = '',
												newMatch = false;
												if (sportData.sports[0].event_phases[i].phases[j].matches.length > 0) {
													newMatch = true,
													matchName = '';
												}
												try {
													if (sportData.sports[0].event_phases[i].gender == null) {
														gender = '';
													} else {
														gender = sportData.sports[0].event_phases[i].gender;
													}
													if (sportData.sports[0].event_phases[i].phases[j].name == null) {
														matchName = "Unknown";
													} else {
														matchName = sportData.sports[0].event_phases[i].phases[j].name;
													};
													if (sportData.sports[0].event_phases[i].phases[j].matches && newMatch === true) {
														obj.events[i] = {ev: formatGender(gender) + " " + matchName, match: []};
														newMatch = false;
													};
												} catch (error) {
													notification.push("Error: Phase And/Or Gender Data Unavailable \n" + error);
												};
											for (var k = 0; k < sportData.sports[0].event_phases[i].phases[j].matches.length; k++) {
												var startTime = "- - : - -",
													homeResult = "",
													awayResult = "",
													homeParticipant = "Unknown",
													awayParticipant = "Unknown",
													homeShort = null,
													awayShort = null,
													winningShort = null,
													winningParticipant = "Unknown",
													winningResult = "",
													losingShort = null,
													losingParticipant = "Unknown",
													losingResult = "";
													obj.events[i].match[k] = {participants: []};
													if (sportData.sports[0].event_phases[i].phases[j].matches.length > 0 && newMatch === true) {
														obj.events[i] = {ev: formatGender(gender) + " " + matchName, match: [], startTime: startTime};
														newMatch = false;
													};
												try {
													startTime = sportData.sports[0].event_phases[i].phases[j].matches[k].started_at;
													homeResult = sportData.sports[0].event_phases[i].phases[j].matches[k].home_result;
													awayResult = sportData.sports[0].event_phases[i].phases[j].matches[k].away_result;
													homeParticipant = sportData.sports[0].event_phases[i].phases[j].matches[k].home_participant.name;
													awayParticipant = sportData.sports[0].event_phases[i].phases[j].matches[k].away_participant.name;
													homeShort = sportData.sports[0].event_phases[i].phases[j].matches[k].home_participant.name_short;
													awayShort = sportData.sports[0].event_phases[i].phases[j].matches[k].away_participant.name_short;
													try {
														//Ensure this same logic is applied to away/home short
														winningParticipant = sportData.sports[0].event_phases[i].phases[j].matches[k].winning_participant.name;
														winningShort = sportData.sports[0].event_phases[i].phases[j].matches[k].winning_participant.name_short;
														if (winningParticipant == awayParticipant) {
															var holder = awayParticipant,
															losingParticipant = homeParticipant,
															winningParticipant = holder;
															var score = awayResult,
															losingResult = homeResult,
															winningResult = score;
															var shortN = awayShort,
															losingShort = homeShort,
															winningShort = shortN;
														} else {
															winningParticipant = homeParticipant;
															losingParticipant = awayParticipant;
															winningResult = homeResult;
															losingResult = awayResult;
															winningShort = homeShort;
															losingShort = awayShort;
														};
														obj.events[i].match[k].participants.push({startTime: startTime, winningResult: winningResult, losingResult: losingResult, winningShort: winningShort, losingShort: losingShort});
													} catch (error) {
														obj.events[i].match[k].participants.push({startTime: startTime, winningResult: winningResult, losingResult: losingResult, winningShort: winningShort, losingShort: losingShort});
														notifications.push("Error: Unable to Determine Winning Participant \n" + error);
													}
												// Who Won?
												} catch (error) {
													obj.events[i].match[k].participants.push({startTime: startTime, winningResult: winningResult, losingResult: losingResult, winningShort: winningShort, losingShort: losingShort});
													notifications.push("Error: No Match Data \n" + error);
												} 
											}
										}
									}
								} catch (error) {
									calendar.viewmodel.teamResult(false);
									calendar.viewmodel.waitingResults(true);
									notifications.push("Error: No Event Data Available \n" + error);
								}
							}
							//Single Result
							if (calendar.viewmodel.singleResult() == true) {
								var obj = {};
								obj.events = [];
								//Searching Results Data Object
								try {
									for (var i = 0; i < sportData.sports[0].event_phases.length; i++) {
										var eventName = '',
											gender = '';
											try {
												if (sportData.sports[0].event_phases[i].event_name == null) {
													eventName = sportData.sports[0].event_phases.name;
												} else {
													eventName = sportData.sports[0].event_phases[i].event_name;
												}
												if (sportData.sports[0].event_phases[i].gender == null) {
													gender = '';
												} else {
													gender = sportData.sports[0].event_phases[i].gender;
												}
												obj.events[i] = {ev: formatGender(gender) + " " + eventName, heat: []};
											} catch (error) {
												notification.push("Error: Phase And/Or Gender Data Unavailable \n" + error);
											};
										for (var j = 0; j < sportData.sports[0].event_phases[i].phases.length; j++) {
											var heatName = '';
											try {
												if (sportData.sports[0].event_phases[i].phases[j].name == null) {
													heatName = "Unknown";
												} else {
													heatName = sportData.sports[0].event_phases[i].phases[j].name;
												};
												obj.events[i].heat[j] = {name: heatName, participants: []};
											} catch (error) {
												notifications.push("Error: Heat Data Unavailable \n" + error);
											}
											for (var k = 0; k < sportData.sports[0].event_phases[i].phases[j].results.length; k++) {
												var	participantName = '',
													countryName = '',
													countryShort = '',
													rank = '',
													result = '';
												try {
													participantName = sportData.sports[0].event_phases[i].phases[j].results[k].participant.name;
													countryName = sportData.sports[0].event_phases[i].phases[j].results[k].participant.country_name;
													countryShort = sportData.sports[0].event_phases[i].phases[j].results[k].participant.country_name_short;
													rank = sportData.sports[0].event_phases[i].phases[j].results[k].rank;
													if (sportData.sports[0].event_phases[i].phases[j].results[k].result == "") {
														result = formatStatus(sportData.sports[0].event_phases[i].phases[j].results[k].status);
													} else {
														result = sportData.sports[0].event_phases[i].phases[j].results[k].result;
													}
													obj.events[i].heat[j].participants.push({participantName: participantName, countryName: countryName, countryShort: countryShort, rank: rank, result: result});
												} catch (error) {
													calendar.viewmodel.singleResult() = false;
													calendar.viewmodel.waitingResults(true);
													notifications.push("Error: No Results Data \n" + error);
												} 
											}
										}
									}
								} catch (error) {
									notifications.push("Alert: No Results Data \n" + error);
								}
							}
							//Single Schedule
							if (calendar.viewmodel.singleSchedule() == true) {
								var obj = {};
								obj.events = [];
								try {
									//Searching Match Data Object
									for (var i = 0; i < sportData.sports[0].event_phases.length; i++) {
										var eventName = '',
											gender = '';
											try {
												if (sportData.sports[0].event_phases[i].event_name == null) {
													eventName = sportData.sports[0].event_phases.name;
												} else {
													eventName = sportData.sports[0].event_phases[i].event_name;
												}
												if (sportData.sports[0].event_phases[i].gender == null) {
													gender = '';
												} else {
													gender = sportData.sports[0].event_phases[i].gender;
												}
												obj.events.push({ev: formatGender(gender) + " " + eventName, heat: []});
											} catch (error) {
												notification.push("Error: Phase And/Or Gender Data Unavailable \n" + error);
											};
										for (var j = 0; j < sportData.sports[0].event_phases[i].phases.length; j++) {
											var venue = null,
												heatName = '',
												startTime = sportData.sports[0].event_phases[i].phases[j].started_at;
											try {
												//Inserting Venue & Event Properties
												try {
													venue = sportData.sports[0].event_phases[i].phases[j].venue.name;
												} catch (error) {
													notifications.push("Alert: No Venue Data \n" + error);
												}
												//Ensuring Venue is Not Duplicated
												if (!obj.hasOwnProperty(venue)) {
													obj.venue = venue;
												}
											} catch (error) {
												notifications.push("Error: Venue Data Unavailable \n" + error);
											}
											try {
												if (sportData.sports[0].event_phases[i].phases[j].name == null) {
													heatName = "Unknown";
												} else {
													heatName = sportData.sports[0].event_phases[i].phases[j].name;
												};
												obj.events[i].heat[j] = {name: heatName, startTime: startTime, participants: []};
											} catch (error) {
												notifications.push("Error: Heat Data Unavailable \n" + error);
											}
											try {
												for (var k = 0; k < sportData.sports[0].event_phases[i].phases[j].phase_participants.length; k++) {
													var	participantName = '',
														countryName = '',
														countryShort = '';
													try {
														participantName = sportData.sports[0].event_phases[i].phases[j].phase_participants[k].participant.name;
														countryName = sportData.sports[0].event_phases[i].phases[j].phase_participants[k].participant.country_name;
														countryShort = sportData.sports[0].event_phases[i].phases[j].phase_participants[k].participant.country_name_short;
														obj.events[i].heat[j].participants.push({participantName: participantName, countryName: countryName, countryShort: countryShort});
													} catch (error) {
														calendar.viewmodel.singleSchedule() = false;
														calendar.viewmodel.noData(true);
														notifications.push("Error: No Participant Data \n" + error);
													} 
												}
											} catch (error) {
												notifications.push("Error: Phase Participant Data Unavailable \n" + error);
											}
										}
									}
								} catch (error) {
									notifications.push("Alert: No Match Data \n" + error)
								}
							}
						} catch (error) {
							calendar.viewmodel.noData(true);
							notifications.push("Error: Unable to Determine Render Template \n" + error)
						}
						try {
							calendar.viewmodel.loadingData(false);
							calendar.viewmodel.dataOutput.push(obj);
						} catch (error) {
							notifications.push("Error: Unable To Render Data \n" + error)
						} 
						$('.dataOut').perfectScrollbar('update');
						// console.debug("XHR Notification: Success - Data Retrieved From API");
					}).fail(function () {
						$('.c1 .bubblingsmall').fadeOut(0);
						$('#sportDisplay').html("DATA UNAVAILABLE");
						$('.c2 .dateDisplay').html('<br>');
						calendar.viewmodel.loadingData(false);
						// console.debug("XHR Notification: Failed - Unable to Retrieve Data From API");
					}).always(function() {
						processingXHR = false;
						// console.debug("XHR Status: Resolved");
						calendar.logErrors(notifications);
						$('.col2, .col4').not('#' + calendar.selectedHistory[1] + ', #' + calendar.temp[1]).stop().animate({opacity: .15}, 600);
						$('.col1 svg circle, .col3 svg circle').not('.' + calendar.selectedHistory[1] + "Circle, ." + calendar.temp[1] + 'Circle').stop().animate({opacity: .15}, 600);
						$('#' + calendar.selectedHistory[1] + ', .' + calendar.selectedHistory[1] + 'Circle').stop().animate({opacity: 1});
						calendar.temp.splice(0, 2);
					});
					//Handles Showing and Hiding of dataPane Element
					if (calendar.dataDisplaying == false) {
						$('#dataPane').fadeIn(600);
						$("#dataExit").on("click touchend", function () {
							calendar.exitDataView();
						});
						$("#centerDismiss").on("click touchend", function () {
							calendar.exitDataView();
						});
						calendar.dataDisplaying = true;
					};
				};
			};
			//Exits Data Pane and Center Date Display
			calendar.exitDataView = function () {
				$('#dataPane').fadeOut(400);
				calendar.dataDisplaying = false;
				calendar.reset();
			}
			//Removes Duplicate Notifications Then Logs Each Notification into Console
			calendar.logErrors = function (errors) {
				// console.debug(">>>>>>>> Notifications >>>>>>>>")
				// for (var e = 0; e < errors.length; e++) {
				// 	console.debug("\n" + errors[e]);
				// }
				// console.debug("\n<<<<<<<< Notifications <<<<<<<<")
			}
	};

/**
 *	Calendar View Model
 *	@params (Inner Radius (int), Outer Radius(int), Margins(obj), Stroke Width(int), Stroke Color(str), Colors(arr), Days(int), Sports(int))
 **/

	var ViewModel = function (r1, r2, margins, strokeWidth, strokeColor, colors, rings, segments) {
		var master = this;
			master.sportIDs = {},
			master.countries = {},
			master.apiSportData = {}, 
			master.calendarDates = {},
			master.dataOutput = ko.observableArray([]),
			master.startTimes = ko.observableArray([]),
			master.teamSchedule = ko.observable(false),
			master.singleSchedule = ko.observable(false),
			master.teamResult = ko.observable(false),
			master.singleResult = ko.observable(false),
			master.loadingData = ko.observable(false),
			master.waitingResults = ko.observable(false),
			master.noData = ko.observable(false);

	/**
	 *	Data Computed Functions - Return User Requested Data
	 **/

	 		//Outputs Formatted Venue Data
			master.venueData = ko.computed(function () {
				try {
					if (master.dataOutput()[0].venue == null) {
						return "No Venue Data";
					} else if (master.dataOutput()[0] == null || master.dataOutput()[0].venue == undefined) {
						return 'Retrieving Data...';
					} else {
						var venue = master.dataOutput()[0].venue;
						switch (venue) {
							case "Adler Arena Skating Center":
								return '"Adler" Venue';
								break;
							case "Bolshoy Ice Dome":
								return '"Bolshoy" Venue';
								break;
							case "Ice Cube Curling Center":
								return '"Ice Cube" Venue';
								break;
							case "Iceberg Skating Palace":
								return '"Iceberg" Venue';
								break;
							case "Laura Cross-country Ski & Biathlon Center":
								return '"Laura" Venue';
								break;
							case "Rosa Khutor Alpine Center":
								return '"Khutor" Venue';
								break;
							case "Rosa Khutor Extreme Park":
								return '"Khutor" Venue';
								break;
							case "RusSki Gorki Jumping Center":
								return '"RusSki" Venue';
								break;
							case "Shayba Arena":
								return '"Shayba" Venue';
								break;
							case "Sliding Center Sanki":
								return '"Sanki" Venue'
								break;
							default: "";
						}
						return venue
					}
				} catch (error) {
					return 'Error Retrieving Data'
				}
			});

			//Output Event Object
			master.eventData = ko.computed(function () {
				try {
					if (master.dataOutput()[0] == null || master.dataOutput()[0].events == undefined || master.dataOutput()[0].events == '[object XMLHttpRequestProgressEvent]') {
						return null;
					}
					return master.dataOutput()[0].events;
				} catch (error) {
					return ''
				}
			})

	/**
	 *	Mapping Data Logic
	 **/

			//Structures Mapping Data For Menu
			master.menuData = function (data) {
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
			master.sports = function (data) {
				var name = null;
				var array = [];
				$.each(data, function (key, value) {
					name = value.sport;
					array.push(name);
				});
				return array;
			};

			//Creates Days Array From First Sport Object in Mapping JSON
			master.days = function (data) {
				var array = [];
				$.each(data[0].day, function (key, value) {
					array.push(key);
				});
				array = array.sort(function (a, b) {return a - b});
				return array;
			};

			//Creates Colors Array
			master.colors = function (data) {
				var color = null;
				var array = [];
				var data = data;
				$.each(data, function (key, value) {
					color = value.color;
					array.push(color);
				});
				return array;
			};

			//Setting Menu Data, KO Mapping Maps Sports Data into Observables
			master.menuRows = ko.mapping.fromJS(mappingData, {}, master.menuRows);
			//Retrieving Sports From Map
			master.mappedSports = master.sports(mappingData);
			//Retrieving Days From Map
			master.mappedDays = master.days(mappingData);
			//Retrieving Colors From Map
			master.mappedColors = master.colors(mappingData);

	/**
	 *	ViewModel Methods
	 **/

			//Instantiates Calendar Class, Requests Initial API Data, Hides Loading Screen on XHR Completion
			master.init = function () {
				//Instantiating
				master.calendar = new Calendar (328, 18, {top: 20, right: 4, bottom: 20, left: 20}, 2, '#07153D', master.mappedColors, master.mappedSports, master.mappedDays, mappingData, master),
				master.calendar.init(master.calendar.outer, master.calendar.inner, master.calendar.strokeColor, master.calendar.strokeWidth, master.calendar.rings, master.calendar.segments, master.calendar.colors, master.calendar.days, master.calendar.sports),
				preloadImages(images);
				//Initial AJAX Data Retrieval From API
				if (processingXHR === true) {
					// console.debug("XHR Notification: Unable to Process Request. Please Wait For Prior Request to Resolve.");
					return;
				} else {
					asyncResource(generateURL("summary", initialParams)).done(function (response) {
						master.apiSportData = response;
						for(var i = 0; i < master.apiSportData.sports.length; i++) {
							master.sportIDs[master.apiSportData.sports[i].name] = master.apiSportData.sports[i].id;
						};
						for(var i = 0; i < master.apiSportData.countries.length; i++) {
							master.countries[master.apiSportData.countries[i].id] = master.apiSportData.countries[i].name_short;
						};
						//Parses Date Object and Ensures Congruency With Event Day
						var day = null;
						var first = true;
						var offset = null;
						for(var i = 0; i < master.apiSportData.playing_times.length; i++) {
							var date = master.apiSportData.playing_times[i].substr(0, 10);
							if (!master.calendarDates[date]) {
								var dateNo = parseInt(date.substr(8, 2));
								if (first === true) {
									var offset = dateNo;
									first = false;
								}
								day = - offset + dateNo + 1;
								master.calendarDates[date] = day;
							};
						};
						// console.debug("XHR Notification: Success - Initial Data Retrieved From API");
					}).fail(function () {
						// console.debug("XHR Notification: Failed - Unable to Retrieve Initial Data From API");
					}).always(function() {
						//Rendering View to User, Initializing Data Pane Scrolling
						processingXHR = false;
						$("#loading").fadeOut(1000, function () {
				 			$("#wrapper").fadeIn(1000);
				 		});
						// console.debug("XHR Status: Resolved");
					});
				};
			};

			//Sports Pane Hover Over Event
			master.menuhoverOver = function (sport, color) {
				var sport = sport();
				var color = color();
				if (master.calendar.filtering == true) {
					$('.sportArc').not('.' + sport + ', .' + master.calendar.filterHistory[0]).stop().animate({opacity: .15}, 400);
					if (sport == master.calendar.filterHistory[0]) {
						$('.' + sport).stop().animate({opacity: .9}, 600);
					} else {
						$('.' + sport).stop().animate({opacity: .5}, 600);
					}
					$('.col2, .col4').not('.' + master.calendar.filterHistory[0] + 'Circle, #' + master.calendar.filterHistory[0]).stop().animate({opacity: .7}, 600);
					$('.col1 svg circle, .col3 svg circle').stop().animate({opacity: .7}, 600);
					$('.col2, .col4').not('#' + sport + ', #' + master.calendar.filterHistory[0]).stop().animate({opacity: .15}, 600);
					$('.col1 svg circle, .col3 svg circle').not('.' + sport + "Circle, ." + master.calendar.filterHistory[0] + "Circle").stop().animate({opacity: .15}, 600);
				} else  if (master.calendar.selectedHistory.length != 0) {
					d3.select("#centerCircle").transition().ease('easeOutQuart').duration(600).attr("stroke", color);
					$('.' + sport).stop().animate({opacity: .5}, 600);
					$('.sportArc').not('.' + sport).stop().animate({opacity: .15}, 600);
					$('.' + master.calendar.selectedHistory[0] + '.' + master.calendar.selectedHistory[1]).stop().animate({"opacity": 1});
					$('.col2, .col4').stop().animate({opacity: .7}, 600);
					$('.col1 svg circle, .col3 svg circle').stop().animate({opacity: .7}, 600);
					$('.col2, .col4').not('#' + sport + ', #' + master.calendar.selectedHistory[1]).stop().animate({opacity: .15}, 600);
					$('.col1 svg circle, .col3 svg circle').not('.' + sport + "Circle, ." + master.calendar.selectedHistory[1] + "Circle").stop().animate({opacity: .15}, 600);
				} else {
					d3.select("#centerCircle").transition().ease('easeOutQuart').duration(600).attr("stroke", color);
					$('.' + sport).stop().animate({opacity: .5}, 600);
					$('.sportArc').not('.' + sport).stop().animate({opacity: .15}, 600);
					$('.col2, .col4').stop().animate({opacity: .7}, 600);
					$('.col1 svg circle, .col3 svg circle').stop().animate({opacity: .7}, 600);
					$('.col2, .col4').not('#' + sport + ', #' + master.calendar.filterHistory[0]).stop().animate({opacity: .15}, 600);
					$('.col1 svg circle, .col3 svg circle').not('.' + sport + "Circle, ." + master.calendar.filterHistory[0] + "Circle").stop().animate({opacity: .15}, 600);
				}
			};

			//Sports Pane Hover Out Event
			master.menuhoverOut = function (sport, color) {
				var sport = sport();
				var color = color();
				if (master.calendar.filtering == true) {
					$('.sportArc').not('.' + master.calendar.filterHistory[0]).stop().animate({opacity: .15}, 400);
					$('.col2, .col4').not('#' + master.calendar.filterHistory[0]).stop().animate({opacity: .15}, 400);
					$('.col1 svg circle, .col3 svg circle').not("." + master.calendar.filterHistory[0] + "Circle").stop().animate({opacity: .15}, 400);
				} else if (master.calendar.selectedHistory.length != 0) {
					d3.select("#centerCircle").transition().ease('easeOutQuart').duration(600).attr("stroke", "#FFFFFF");
					$('.sportArc').stop().animate({opacity: .20});
					$('.' + master.calendar.selectedHistory[0] + '.' + master.calendar.selectedHistory[1]).stop().animate({"opacity": 1});
					$('.col2, .col4').not('#' + master.calendar.selectedHistory[1]).stop().animate({opacity: .15}, 600);
					$('.col1 svg circle, .col3 svg circle').not('.' + master.calendar.selectedHistory[1] + "Circle").stop().animate({opacity: .15}, 600);
				} else {
					d3.select("#centerCircle").transition().ease('easeOutQuart').duration(600).attr("stroke", "#FFFFFF");
					$('.sportArc').stop().animate({opacity: 1}, 400);
					$('.col2, .col4').stop().animate({opacity: 1}, 400);
					$('.col1 svg circle, .col3 svg circle').stop().animate({opacity: 1}, 400);
				};
			};
	};

/**
 *	Initializing ViewModel
 **/

		var viewmodel = new ViewModel(328, 18, {top: 20, right: 0, bottom: 20, left: 20}, 2, '#07153D', ['#0000FF', '#490E7C', '#7438A8', '#AF1BFA', '#FF0000', '#FF7800', '#FFAE00', '#FFF000', '#CCFF00', '#46A81A', '#0F7B00', '#045910', '#20D382', '#05E5D4', '#09AEDB'], 15, 18); 
		ko.applyBindings(viewmodel, document.getElementById('interactiveWrapper'));
		viewmodel.init();
});