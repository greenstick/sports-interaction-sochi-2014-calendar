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
	processingAJAX = false;
/**
 *	Utility Functions
 **/

 	function stripLetters (string) {
 		return string.replace(/\D/g,'');
 	}
 	function convertSpaces (string) {
 		return string.replace(" ", "_");
 	}
 	function convertMDash (string) {
 		return string.replace("_", " ");
 	}
	//Date Parsing Function
	var ParsedDate = function (date) {
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
	ParsedDate.prototype.day = function () {
		return this.time;
	};

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
 *	Params Passed to constructor by CalendarVM
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
			calendar.viewmodel = parentViewmodel,
			calendar.date = {},
			calendar.filtering = false,
			calendar.dataDisplaying = false;
			//Generating Calendar
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
/**
 *	Calendar Methods
 **/
			//On Update - Called By View Model
			calendar.filter = function (sport, color) {
				var sport = sport();
				var color = color();
				calendar.filtering = true;
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
				calendar.filtering = false;
				d3.select("#centerCircle").transition().ease('easeOutQuart').duration(600).attr("stroke", "#FFFFFF");
				$('#centerDismiss').removeClass('selectable');
				$('#centerDismiss .dateDisplay').fadeOut(600);
				$('.col2, .col4').stop().animate({opacity: 1}, 600);
				$('.sportArc').animate({opacity: .70}, 600);
				$('#sportsExit').fadeOut(600);
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
				var apiDate = function () {
					var date = '';
					$.each(calendar.viewmodel.calendarDates, function (key, value) {
						if (value == data.day) {
							date = key;
						};
					});
					return date;
				};
				try {
					calendar.date = new ParsedDate(apiDate());
					$('#centerDismiss .dateDisplay').html(calendar.date.monthName.substr(0, 3) + " " + calendar.date.day);
				} catch (error) {
					console.log("Error: Hover Data Unavailable - Initial API Request Failed");
				}
			};
			//Hover Out of Arc
			calendar.hoverOut = function (arcData) {
				$('.col2, .col4').stop().animate({opacity: 1});
				var data = $.parseJSON(arcData);
				$('.sportArc').stop().animate({opacity: .7});
				$('.day' + data.day).stop().animate({opacity: .7});
			};
			//Called From selectArc Method, Handles Retrieval of Requested Data
			calendar.displayData = function (selectedSport, selectedDate, data) {
				// Retrieving Data From API
				if (processingAJAX === true) {
					console.log("XHR Status: Request Failed. Please Wait For Prior Request to Resolve.");
					$('.c1 .bubblingsmall').fadeIn(600);
					$('.c2 .dateDisplay').html('<br>');
					if(calendar.dataDisplaying == false) {
						$('#dataPane').fadeIn(600);
						$('#centerDismiss .dateDisplay').fadeIn(600).addClass('selectable');
						d3.select("#dataExit").on("click", function () {
							calendar.exitDataView();
						});
						d3.select("#centerDismiss").on("click", function () {
							calendar.exitDataView();
						});
						calendar.dataDisplaying = true;
					};
				} else {
					//AJAX User Requested Data
					var params = {seasonID: seasonID, sportID: selectedSport, date: selectedDate};
					asyncResource(generateURL("summary", params)).done(function (response) {
						$('.c1 .bubblingsmall').fadeOut(0);
						$('#sportDisplay').html(convertMDash(strip(data.sport)).toUpperCase());
						$('.c2 .dateDisplay').html((calendar.date.monthName.substr(0, 3)).toUpperCase() + " " + calendar.date.day);
						calendar.viewmodel.sportData = response;
						for(var i = 0; i < calendar.viewmodel.sportData.length; i++) {
							calendar.viewmodel.sportData[calendar.viewmodel.sportData.sports[i]] = calendar.viewmodel.sportData.sports[i];
						};
						//Parsing Data and Appending to Element
						console.log("SPORT DATA: " + calendar.viewmodel.sportData);
						console.log("Success: Initial Data Retrieved From API");
					}).fail(function () {
						$('.c1 .bubblingsmall').fadeOut(0);
						$('#sportDisplay').html("DATA UNAVAILABLE");
						$('.c2 .dateDisplay').html('<br>');
						console.log("Failed: Unable to Retrieve Data From API");
					}).always(function() {
						processingAJAX = false;
						console.log("XHR Status: Resolved");
					});
					//Handles Showing and Hiding of dataPane Element
					if (calendar.dataDisplaying == false) {
						$('#dataPane').fadeIn(600);
						$('#centerDismiss .dateDisplay').fadeIn(600).addClass('selectable');
						d3.select("#dataExit").on("click", function () {
							calendar.exitDataView();
						});
						d3.select("#centerDismiss").on("click", function () {
							calendar.exitDataView();
						});
						calendar.dataDisplaying = true;
					};
				};
			};
			//Exits Data Pane and Center Date Display
			calendar.exitDataView = function () {
				$('#dataPane').fadeOut(400);
				$('#centerDismiss .dateDisplay').fadeOut(600).removeClass('selectable');
				calendar.dataDisplaying = false;
			}
	};

/**
 *	Calendar View Model
 *	@params (Inner Radius (int), Outer Radius(int), Margins(obj), Stroke Width(int), Stroke Color(str), Colors(arr), Days(int), Sports(int))
 **/

	var CalendarVM = function (r1, r2, margins, strokeWidth, strokeColor, colors, rings, segments) {
		var vm = this;
			vm.sportIDs = {},
			vm.countries = {},
			vm.apiSportData = {}, 
			vm.calendarDates = {};

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
			//Setting Menu Data, KO Mapping Maps Sports Data into Observables
			vm.menuRows = ko.mapping.fromJS(mappingData, {}, vm.menuRows);
			//Retrieving Sports From Map
			vm.mappedSports = vm.sports(mappingData);
			//Retrieving Days From Map
			vm.mappedDays = vm.days(mappingData);
			//Retrieving Colors From Map
			vm.mappedColors = vm.colors(mappingData);

	/**
	 *	ViewModel Methods
	 **/

			//Instantiates Calendar Class
			//Requests Initial API Data
			//Hides Loading Screen on XHR Completion
			vm.init = function () {
				//Instantiating
				vm.calendar = new Calendar (328, 18, {top: 20, right: 20, bottom: 20, left: 20}, 2, '#07153D', vm.mappedColors, vm.mappedSports, vm.mappedDays, mappingData, vm),
				vm.calendar.init(vm.calendar.outer, vm.calendar.inner, vm.calendar.strokeColor, vm.calendar.strokeWidth, vm.calendar.rings, vm.calendar.segments, vm.calendar.colors, vm.calendar.days, vm.calendar.sports);
				preloadImages(images);
				//Initial AJAX Data Retrieval From API
				if (processingAJAX === true) {
					console.log("XHR Status: Request Failed. Please Wait For Prior Request to Resolve.");
					return;
				} else {
					asyncResource(generateURL("summary", initialParams)).done(function (response) {
						vm.apiSportData = response;
						for(var i = 0; i < vm.apiSportData.sports.length; i++) {
							vm.sportIDs[vm.apiSportData.sports[i].name] = vm.apiSportData.sports[i].id;
						};
						for(var i = 0; i < vm.apiSportData.countries.length; i++) {
							vm.countries[vm.apiSportData.countries[i].id] = vm.apiSportData.countries[i].name_short;
						};
						//Parses Date Object and Ensures Congruency With Event Day
						var day = null;
						var first = true;
						var offset = null;
						for(var i = 0; i < vm.apiSportData.playing_times.length; i++) {
							var date = vm.apiSportData.playing_times[i].substr(0, 10);
							if (!vm.calendarDates[date]) {
								var dateNo = parseInt(date.substr(8, 2));
								if (first === true) {
									var offset = dateNo;
									first = false;
								}
								day = - offset + dateNo + 1;
								vm.calendarDates[date] = day;
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
				 			$(".nano").nanoScroller();
				 		});
						console.log("XHR Status: Resolved");
					});
				};

			};
			vm.update = function (sport) {

			};
	};

/**
 *	KO Custom Bindings
 **/

 	//Calendar Hover
	ko.bindingHandlers.calendarHover = {
		init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
			var calendar = valueAccessor();
		},
	    update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	      var calendar = valueAccessor();
	        ko.utils.registerEventHandler(element, "mouseover", function() {
	        	calendar.hoverOver(sport, day);
	        });  
	        ko.utils.registerEventHandler(element, "mouseout", function() {
	        	calendar.hoverOut(sport, day);
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