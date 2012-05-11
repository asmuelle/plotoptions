
exports.getTimeOATOptions = function (chartTitle) {	
var options = exports.getDefaultOptions (chartTitle);
	
	options.yAxis = [ 
		{title: {text: 'Consumption'},
		min : 0,startOnTick: true,showFirstLabel: false
		},
		{
		title: {
		text: 'Temperature'
		},opposite: true,startOnTick: true,showFirstLabel: false
		}
	];
	return options;
};
exports.getDefaultOptions = function (chartTitle) {	
	this.options = {
		chart: {
			renderTo: 'container',
		},
		title: {
			text: chartTitle
		},
		xAxis: {
			type: 'datetime',
			title: {
				text: null
			}
		},
		yAxis: [ {
		title: {
		text: 'Consumption'
		},
		min : 0,
			startOnTick: false,
			showFirstLabel: false
		},{
		title: {
		text: 'Temperature'
		},
		opposite: true,
			startOnTick: true,
			showFirstLabel: false
		}],

   		plotOptions: {
	            series: {
	             enableMouseTracking: false, 
				shadow: false, 
				animation: false,			
				line : {
					enabled: true,
					lineWidth: 1
				},
				marker: {
					enabled: false
				}
	            },
       
			lines: {
				
				lineWidth: 1,
				marker: {
					enabled: false,
					states: {
						hover: {
							enabled: true,
							radius: 5
						}
					}
				},
				shadow: false,
				states: {
					hover: {
						lineWidth: 1
					}
				}
			}
		},
		series: []
	};
	return this.options;
};
