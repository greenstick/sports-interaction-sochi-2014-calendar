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
	//Update to Current Season ID as Needed
	var initialParams = {
		seasonID: 1
	},
	seasonID = 1,
	processingAJAX = false,
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

 	//Format ParsedDate Object to EST Hour
	formatEastern = function (time) {
		if (time == null) {
			return "- - : - -";
		} else {
			var parsedDate = new ParsedDate(time);
			var hour = parsedDate.time.substr(0, 5);
			var hours = parseInt(hour.substr(0, 2));
			var minutes = hour.substr(3, 2);
			var eastern = hours - 4; //Offset is representative of the timezone dates are delivered in by the API
			if (eastern < 0) {
				return eastern = eastern + 24;
			}
			eastern = eastern.toString();
			if (eastern.length == 1) {
				eastern = "0" + eastern;
			}
			eastern = eastern + ":" + minutes;
			return eastern;
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
	//Used to Change Scheduled Times to EST
	ParsedDate.prototype.eastern = function () {
		return this.eastern;
	};

	//Allows For The Comparing of Date Objects
	pastPresent = function (test) {
		console.log(test);
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
		//Create New Date and Compare Output
		var now = new Date();
		var formatted = new Date(test);
		if (dates.compare(now, formatted) == -1 || dates.compare(now, formatted) == 0) {
			return false;
		};
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
		processingAJAX = true;
		console.log("XHR Status: Requesting...");
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
 *		Params Passed to constructor by CalendarVM
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

			//Called By Data Bind in View
			calendar.filter = function (sport, color) {
				var sport = sport();
				var color = color();
				calendar.filterHistory.splice(0, 1);
				calendar.filterHistory.push(sport);
				calendar.filtering = true;
				$('#sportsPane .header .headtype .c2 span').fadeIn(600);
				d3.select("#centerCircle").transition().ease('easeOutQuart').duration(600).attr("stroke", color);
				$('#centerDismiss').addClass('selectable');
				$('.' + sport).stop().animate({opacity: .70}, 600);
				$('.col2, .col4').stop().animate({opacity: 1}, 600);
				$('.sportArc').not('.' + sport).stop().animate({opacity: .15}, 400);
				$('.col2, .col4').not('#' + sport).stop().animate({opacity: .3}, 400);
				calendar.sportSelected = true;
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
				$('.sportArc').stop().animate({opacity: .70}, 600);
				$('#sportsExit').stop().fadeOut(600);
				calendar.sportSelected = false;
			};

			//Retrieves Arc Data &  Matches it to API Data From Initial Request
			calendar.selectArc = function (arcData) {
				var data = $.parseJSON(arcData);
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
				calendar.displayData(apiSport(), apiDate(), data);
			};

			//Hover Over Arc
			calendar.hoverOver = function (arcData) {
				if (calendar.filtering === true) {
					calendar.reset();
				}
				var data = $.parseJSON(arcData);
				$('.col2, .col4').stop().animate({opacity: 1});
				$('.col2, .col4').not('#' + data.sport).stop().animate({opacity: .3});
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
					$('#centerDismiss .dateDisplay').html((calendar.date.monthName.substr(0, 3)) + " " + calendar.date.day);
				} catch (error) {
					console.log("Error: Hover Data Unavailable - Initial API Request Failed.");
				}
			};

			//Hover Out of Arc
			calendar.hoverOut = function (arcData) {
				$('.col2, .col4').stop().animate({opacity: 1});
				var data = $.parseJSON(arcData);
				$('.sportArc').stop().animate({opacity: .7});
				$('.day' + data.day).stop().animate({opacity: .7});
				$('#centerDismiss .dateDisplay').hide().removeClass('selectable');
			};

			//Called From selectArc Method, Retrieves Data From API and Constructs New Data Object
			calendar.displayData = function (selectedSport, selectedDate, data) {
				// Retrieving Data From API
				if (processingAJAX === true) {
					console.log("XHR Status: Request Failed. Please Wait For Prior Request to Resolve.");
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
				} else {
					//AJAX User Requested Data
					var params = {seasonID: seasonID, sportID: selectedSport, date: selectedDate};
					calendar.viewmodel.teamSchedule(false);
					calendar.viewmodel.singleSchedule(false);
					calendar.viewmodel.teamResult(false);
					calendar.viewmodel.singleResult(false);
					calendar.viewmodel.noData(false);
					calendar.viewmodel.loadingData(true);
					asyncResource(generateURL("summary", params)).done(function (response) {
						$('.c1 .bubblingsmall').fadeOut(0);
						$('#sportDisplay').html(convertMDash(format(data.sport)).toUpperCase());
						$('.c2 .dateDisplay').html((calendar.date.monthName.substr(0, 3)) + " " + calendar.date.day);
						$(".nano").nanoScroller({scrollTo: $('.template'), sliderMaxHeight: 60});
				 		$(".pane").css("display", "block");
				 		$(".slider").css("display", "block");
						//Constructing New Data Object
						calendar.viewmodel.dataOutput.removeAll();
						var sportData = response;
						console.log(sportData);
						console.log(data.sport);
						//Determines Which Template to Render in Data Pane
						try {
							if (pastPresent(sportData.sports[0].event_phases[0].started_at) == false && (data.sport != "Ice_Hockey" && data.sport != "Curling")) {
								calendar.viewmodel.singleSchedule(true);
								console.log("1");
							} else if (pastPresent(sportData.sports[0].event_phases[0].started_at) == true && (data.sport != "Ice_Hockey" && data.sport != "Curling")) {
								calendar.viewmodel.singleResult(true);
								console.log("2");
							} else if (pastPresent(sportData.sports[0].event_phases[0].started_at) == false && (data.sport == "Ice_Hockey" || data.sport == "Curling")) {
								calendar.viewmodel.teamSchedule(true);
								console.log("3");
							} else if (pastPresent(sportData.sports[0].event_phases[0].started_at) == true && (data.sport == "Ice_Hockey" || data.sport == "Curling")) {
								calendar.viewmodel.teamResult(true);
								console.log("4");
							} else {
								calendar.viewmodel.noData(true);
								console.log("5");
							}
							console.log(calendar.viewmodel.singleSchedule());
							console.log(calendar.viewmodel.singleResult());
							console.log(calendar.viewmodel.teamSchedule());
							console.log(calendar.viewmodel.teamResult());
							// calendar.viewmodel.singleResult(true);
							//Contructing Data Object
							//Is the Selected Sport a Team Sport
							if (calendar.viewmodel.teamSchedule() == true || calendar.viewmodel.teamResult() == true) {
								console.log("ENTER TREAM SPORT");
								var obj =  {};
								obj.events = [];
								try {
									for (var i = 0; i < sportData.sports[0].event_phases.length; i++) {
										for (var j = 0; j < sportData.sports[0].event_phases[i].phases.length; j++) {
											var venue = null,
												startTime = null;
											try {
												//Inserting Venue & Event Properties
												venue = sportData.sports[0].event_phases[i].phases[j].venue.name;
												startTime = sportData.sports[0].event_phases[i].phases[j].started_at;
												//Ensuring Venue is Not Duplicated
												if (!obj.hasOwnProperty(venue)) {
													obj.venue = venue;
												}
												obj.events[j] = {startTime: startTime};
												obj.events[j] = {match: []};
											} catch (error) {
												notifications.push("Error: Venue Data Unavailable \n" + error);
											}
											for (var k = 0; k < sportData.sports[0].event_phases[i].phases[j].matches.length; k++) {
												var homeResult = '',
													awayResult = '',
													homeParticipant = '',
													awayParticipant = '',
													homeShort = '',
													awayShort = '',
													winningParticipant = '',
													losingParticipant = '';
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
														} else {
															winningParticipant = homeParticipant;
															losingParticipant = awayParticipant;
														};
														obj.events[j].match[k] = {startTime: startTime, homeResult: homeResult, awayResult: awayResult, homeParticipant: homeParticipant, awayParticipant: awayParticipant, winningParticipant: winningParticipant, awayShort: awayShort, winningShort: winningShort};
													} catch (error) {
														// console.log("Error: Unable to Determine Winning Participant");
														obj.events[j].match[k] = {startTime: startTime, homeResult: homeResult, awayResult: awayResult, homeParticipant: homeParticipant, awayParticipant: awayParticipant, homeShort: homeShort, awayShort: awayShort};
													}
												//Who Won?
												} catch (error) {
													notifications.push("Error: No Match Data \n" + error);
												} 
											}
										}
									}
									// console.log(obj);
								} catch (error) {
									notifications.push("Error: No Event Data Available \n" + error);
								}
							}
							//Is The Selected Sport a Single Sport?
							if (calendar.viewmodel.singleSchedule() == true || calendar.viewmodel.singleResult() == true) {
								console.log("ENTER SINGLE SPORT");
								var obj = {};
								obj.events = [],
								participant = [];
								//Searching Results Data Object
								try {
									for (var i = 0; i < sportData.sports[0].event_phases.length; i++) {
										console.log("1");
										for (var j = 0; j < sportData.sports[0].event_phases[i].phases.length; j++) {
											console.log("2");
											var venue = '',
												startTime = '';
											try {
												if (sportData.sports[0].event_phases[i].phases[j].venue == null) {
													venue = sportData.sports[0].event_phases[i].phases[j].venue
													if (!obj.hasOwnProperty(venue)) {
														obj.venue = venue;
													}
												} else {
													//Inserting Venue & Event Properties
													venue = sportData.sports[0].event_phases[i].phases[j].venue.name;
													//Ensuring Venue is Not Duplicated
													if (!obj.hasOwnProperty(venue)) {
														obj.venue = venue;
													}
												}
												// console.log(obj.events[j]);
											} catch (error) {
												notifications.push("Error: Venue Data Unavailable \n" + error);
											}
											for (var k = 0; k < sportData.sports[0].event_phases[i].phases[j].results.length; k++) {
												// console.log("3");
												var participantName = '',
													countryName = '',
													countryShort = '',
													rank = '',
													result = '';
												try {
													console.log(sportData.sports[0].event_phases[i].phases[j].results[k].participant.name);
													console.log(sportData.sports[0].event_phases[i].phases[j].results[k].participant.country_name);
													console.log(sportData.sports[0].event_phases[i].phases[j].results[k].participant.country_name_short);
													console.log(sportData.sports[0].event_phases[i].phases[j].results[k].rank);
													console.log(sportData.sports[0].event_phases[i].phases[j].results[k].result);
													participantName = sportData.sports[0].event_phases[i].phases[j].results[k].participant.name;
													countryName = sportData.sports[0].event_phases[i].phases[j].results[k].participant.country_name;
													countryShort = sportData.sports[0].event_phases[i].phases[j].results[k].participant.country_name_short;
													rank = sportData.sports[0].event_phases[i].phases[j].results[k].rank;
													result = sportData.sports[0].event_phases[i].phases[j].results[k].result;
													participant.push({participantName: participantName, countryName: countryName, countryShort: countryShort, rank: rank, result: result});
												} catch (error) {
													notifications.push("Error: No Results Data \n" + error);
												} 
												// console.log(obj);
											}
										}
									}
									obj.events.participant = participant;
								} catch (error) {
									notifications.push("Alert: No Results Data \n" + error);
								}
								try {
									//Searching Match Data Object
									for (var i = 0; i < sportData.sports[0].event_phases.length; i++) {
										for (var j = 0; j < sportData.sports[0].event_phases[i].phases.length; j++) {
											var venue = null,
												startTime = null;
											try {
												//Inserting Venue & Event Properties
												try {
													venue = sportData.sports[0].event_phases[i].phases[j].venue.name;
												} catch (error) {
													notifications.push("Alert: No Venue Data \n" + error);
												}
												startTime = sportData.sports[0].event_phases[i].phases[j].started_at;
												//Ensuring Venue is Not Duplicated
												if (!obj.hasOwnProperty(venue)) {
													obj.venue = venue;
												}
												obj.events[j] = {startTime: startTime};
											} catch (error) {
												notifications.push("Error: Venue Data Unavailable \n" + error);
											}
											for (var k = 0; k < sportData.sports[0].event_phases[i].phases[j].matches.length; k++) {
												var homeResult = null,
													awayResult = null,
													homeParticipant = null,
													awayParticipant = null,
													winningParticipant = null,
													losingParticipant = null;
												try {
													homeResult = sportData.sports[0].event_phases[i].phases[j].matches[k].home_result;
													awayResult = sportData.sports[0].event_phases[i].phases[j].matches[k].away_result;
													homeParticipant = sportData.sports[0].event_phases[i].phases[j].matches[k].home_participant;
													awayParticipant = sportData.sports[0].event_phases[i].phases[j].matches[k].away_participant;
													winningParticipant = sportData.sports[0].event_phases[i].phases[j].matches[k].winning_participant;
													if (winningParticipant == awayParticipant) {
														var holder = awayParticipant,
														losingParticipant = homeParticipant,
														winningParticipant = holder;
													} else {
														winningParticipant = homeParticipant;
														losingParticipant = awayParticipant;
													};
													obj.events[j] = {winningParticipant: winningParticipant};
													obj.events[j] = {losingParticipant: losingParticipant};
													obj.events[j] = {homeResult: homeResult};
													obj.events[j] = {awayResult: awayResult};
												} catch (error) {
													notifications.push("Error: No Match Data \n" + error);
												} 
												console.log(obj);
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
							console.log(obj);
							calendar.viewmodel.loadingData(false);
							calendar.viewmodel.dataOutput.push(obj);
							console.log(calendar.viewmodel.dataOutput());
						} catch (error) {
							notifications.push("Error: Unable To Render Data \n" + error)
						}
						//Mapping Parsed API Data Into New dataPane Viewmodel
						// calendar.dataPane = ko.mapping.fromJS(calendar.viewmodel.sportData, {}, calendar.dataPane);
						// console.log(calendar.dataPane);
						console.log("Success: Initial Data Retrieved From API");
					}).fail(function () {
						$('.c1 .bubblingsmall').fadeOut(0);
						$('#sportDisplay').html("DATA UNAVAILABLE");
						$('.c2 .dateDisplay').html('<br>');
						console.log("Failed: Unable to Retrieve Data From API");
					}).always(function() {
						processingAJAX = false;
						console.log("XHR Status: Resolved");
						for (var e = 0; e < notifications.length; e++) {
							console.log("\n" + notifications[e]);
						}
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
	};

/**
 *	Calendar View Model
 *	@params (Inner Radius (int), Outer Radius(int), Margins(obj), Stroke Width(int), Stroke Color(str), Colors(arr), Days(int), Sports(int))
 **/

	var CalendarVM = function (r1, r2, margins, strokeWidth, strokeColor, colors, rings, segments) {
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
						console.log(venue);
						return venue
					}
				} catch (error) {
					return 'Error Retrieving Data'
				}
			});

			//Output Event Object
			master.eventData = ko.computed(function () {
				try {
					if (master.dataOutput()[0] == null || master.dataOutput()[0].events == undefined) {
						return null;
					}
					console.log(master.dataOutput()[0].events);
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
				if (processingAJAX === true) {
					console.log("XHR Status: Request Failed. Please Wait For Prior Request to Resolve.");
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
						console.log("Success: Initial Data Retrieved From API");
					}).fail(function () {
						console.log("Failed: Unable to Retrieve Initial Data From API");
					}).always(function() {
						//Rendering View to User, Initializing Data Pane Scrolling
						processingAJAX = false;
						$("#loading").fadeOut(1000, function () {
				 			$("#wrapper").fadeIn(1000);
				 		});
						console.log("XHR Status: Resolved");
					});
				};
			};

			//Sports Pane Hover Over Event
			master.menuhoverOver = function (sport, color) {
				master.calendar.filter(sport, color);
			};

			//Sports Pane Hover Out Event
			master.menuhoverOut = function (sport, color) {
				var sport = sport();
				var color = color();
				if (master.calendar.filtering == false) {
					$('.col2, .col4').stop().animate({opacity: 1}, 600);
				} else if (master.calendar.filtering == true) {
					$('.col2, .col4').stop().animate({opacity: 1}, 600);
					$('.col2, .col4').not('#' + master.calendar.filterHistory[0]).stop().animate({opacity: .3}, 400);
				};
			};
	};

/**
 *	Initializing ViewModel
 **/

		var viewmodel = new CalendarVM(328, 18, {top: 20, right: 0, bottom: 20, left: 20}, 2, '#07153D', ['#0000FF', '#490E7C', '#7438A8', '#AF1BFA', '#FF0000', '#F47920', '#F7B11B', '#F9EE50', '#D0F923', '#62E80C', '#32B208', '#045910', '#20D382', '#05E5D4', '#09AEDB'], 15, 18); 
		ko.applyBindings(viewmodel, document.getElementById('interactiveWrapper'));
		viewmodel.init();
});