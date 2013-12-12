$(function () {

	var calendarVM = function () {
		var vm = this;
			vm.sportData = null,
			vm.colorData = null,
			vm.seasonID = null,
			vm.selected = ko.observable(null);

			vm.sportsRows = ko.mapping.fromJS(
				[
				{"sport":"BIATHLON","color":"#0000FF"},
				{"sport":"SPEED SKATING","color":"#D0F923"},
				{"sport":"BOBSLEIGH","color":"#490E7C"},
				{"sport":"ALPINE SKIING","color":"#62E80C"},
				{"sport":"SKELETON","color":"#7438A8"},
				{"sport":"CROSS COUNTRY","color":"#32B208"},
				{"sport":"CURLING","color":"#AF1BFA"},
				{"sport":"NORDIC COMBINED","color":"#045910"},
				{"sport":"ICE HOCKEY","color":"#FF0000"},
				{"sport":"SKI JUMPING","color":"#20D382"},
				{"sport":"LUGE","color":"#F47920"},
				{"sport":"FREESTYLE","color":"#05E5D4"},
				{"sport":"FIGURE SKATING","color":"#F7B11B"},
				{"sport":"SNOWBOARD","color":"#09AEDB"},
				{"sport":"SHORT TRACK","color":"#F9EE50"}
				], {}, vm.sportsRows);
	console.log(vm.sportsRows);
};

	ko.applyBindings(calendarVM, document.getElementById('wrapper'));
})