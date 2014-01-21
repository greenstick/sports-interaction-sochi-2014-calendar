console.log('*****************************');
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
			console.log(false);
		} else {
			console.log(true);
		}
	}
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
			console.log(false);
		} else {
			console.log(true);
		}
	}
	pastPresent("2014-01-17T17:10:00Z");
	pastPresent('2014-01-18T20:00:00Z');
	console.log('*****************************');