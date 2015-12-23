(function() {
	var NiceTime = {};

	NiceTime.units = [{one: 'year', many: 'years', value: 365*24*60*60*1000}, {one: 'month', many: 'months', value: 30*24*60*60*1000}, {one: 'week', many: 'weeks', value: 7*24*60*60*1000}, {one: 'day', many: 'days', value: 24*60*60*1000}, {one: 'hour', many: 'hours', value: 60*60*1000}, {one: 'minute', many: 'minutes', value: 60*1000}, {one: 'second', many: 'seconds', value: 1000}, {one: 'millisecond', many: 'milliseconds', value: 1}];

	NiceTime.fromMillis = function(millis) {
		var s = '';
		var units = NiceTime.units;

		for (var i = 0; i < units.length; i++)
		{
			var value = Math.floor(millis/units[i].value);
			if (value > 0)
			{
				var unitname;

				if (value > 1)
				{
					unitname = units[i].many;
				}
				else
				{
					unitname = units[i].one;
				}

				if (s != '')
				{
					s += ', ';
				}

				s += value + ' ' + unitname;

				millis -= value*units[i].value;
			}
		}

		return s;
	};

	NiceTime.toMillis = function(humanTime) {
		var duration = 0;

		for (var i = 0; i < NiceTime.units.length; i++)
		{
			var unit = NiceTime.units[i];
			var match = humanTime.match('(\\d+)\\s*(' + unit.one + '\\b|' + unit.many + '\\b)');
			if (match)
			{
				duration += parseInt(match[1])*unit.value;
			}
		}

		return duration;
	};

	if (typeof exports === 'object') {
		module.exports = NiceTime;
	} else if (typeof define === 'function' && define.amd) {
		define('nicetime', [], function(){
			return NiceTime;
		})
	} else {
		window.NiceTime = NiceTime;
	}
})();