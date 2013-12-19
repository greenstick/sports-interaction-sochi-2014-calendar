/********************
*					*
*	utility.js		*
*					*
********************/

/**
 *	Data/Object Manipulation
 **/

 	//Reverses data in array
	function reverseArray (array) {
		var l = null;
		var r = null;
		var length = array.length;
		for (l = 0, r = length - 1; l < r; l += 1, r -= 1) {
			var temp = array[l];
			array[l] = array[r];
			array[r] = temp;
		};
		return array;
	}

/**
 *	Browser Sniffing/Detection Functions
 **/

	//Check whether user is mobile and sets a boolean - feature detection is preferable to this
	function mobileDetect () {
		(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) ? isMobile = true : isMobile = false;
	};

/**
 *	Formatting Functions
 **/

	//Formats numbers with commas
	function commaNumbers (num) {
	    var str = num.toString().split('.');
	    if (str[0].length >= 4) {
	        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
	    }; 
	    if (str[1] && str[1].length >= 5) {
	        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
	    };
	    return str.join('.');
	}
	//Formats string to titlecase
	function formatTitleCase (string) {
		return string.replace(/\w\S*/g, function (text) {
		return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
		});
	}

/**
 *	Mathematical Functions
 **/

	//Remaps a value within a given range to a target range
	function remapValue (x, a, b, c, d) {
	    if (a == b) { 
	        return x >= b ? d : c;
	    };
	    return (c + (d - c) * (x - a) / (b - a));
	}
	//Remaps a value within a given range to a target range - with rounding
	function remapValueNice (x, a, b, c, d) {
	    if(a == b) { 
	        return x >= b ? d : c;
	    };
	    return Math.round(c + (d - c) * (x - a) / (b - a));
	}
	//Formats a input value into percent
	function percentage (value) {
		return value / 100;
	}

	//Determines the percentage of the smaller value as a function of the larger value
	function normalize (a, b) {
		var c = null;
		(a < b) ? c = Math.round((a/b)*100) : c = Math.round((b/a)*100);
		return c;
		}
	//Rounds the input number up to the closest multiple of the specified number
	//Example: Number(40).roundUpTo(23) = 46
	Number.prototype.roundUpTo = function (number) {
		return Math.ceil(this/number)*number;
	};