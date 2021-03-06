var canvas = new CanvasLoader('animation_image');

$(window).resize(function () {
	$('.animation_image').centerToWindow();
	if ('matchMedia' in window) {
		// Chrome, Firefox, and IE 10 support mediaMatch listeners
		window.matchMedia('print').addListener(function (media) {
			chart.validateNow();
		});
	} else {
		// IE and Firefox fire before/after events
		window.onbeforeprint = function () {
			chart.validateNow();
		}
	}
});

// LOAD DATA FROM GRAFFCONTROLLER
$.loadJSON = function (url) {
	try {
		var request = $.ajax({
			url: url_developer + url,
			type: "POST",
			async: false,
			cache: false,
			dataType: 'json',
		});
		request.done(function () {
			//console.log("success");
		});
		request.fail(function () {
			console.log("Error:\n" + JSON.stringify(jqXHR) + '\n' + textStatus + ': ' + errorThrown + '\n');
		});
		request.always(function () {
			//console.log("complete");
		});
		request.error(function (jqXHR, exception) {
			if (jqXHR.status === 0) {
				console.log('Not connect.n Verify Network.');
			} else if (jqXHR.status == 404) {
				console.log('Requested page not found. [404]');
			} else if (jqXHR.status == 500) {
				console.log('Internal Server Error [500].');
			} else if (exception === 'parsererror') {
				console.log('Requested JSON parse failed.');
			} else if (exception === 'timeout') {
				console.log('Time out error.');
			} else if (exception === 'abort') {
				console.log('Ajax request aborted.');
			} else {
				console.log('Uncaught Error.n' + jqXHR.responseText);
			}
			$('.animation_image').hide();
		});
// RETURN DATA
		return request.responseJSON;
	} catch (err) {
		console.log('Error:\n' + err);
		$('.animation_image').hide();
	}
};

// LOAD DIFERENTS CHARTS
$.loadChart = function (div, url, type, date) {
	$.canvas_show(canvas);
	$('.animation_image').centerToWindow();
	$('.animation_image').show();
// DIV ID
	var div = typeof div !== 'undefined' ? div : 'chartdiv';
// DATE OF DATA
	var date = typeof date !== 'undefined' && date.length != 0 ? '/' + date : '';
// TYPE OF CHART
	var type = typeof type !== 'undefined' && type.length != 0 ? type : 'column';
// URL TO GET DATA
	var url = typeof url !== 'undefined' ? url + date : '';
// JSON VAR
	var json = $.loadJSON(url);
	json = typeof json !== 'undefined' || json.length != 0 ? json : 'NULL';
// console.log(json);
// READY CHART
	try {
// GET DATA
		if (json.length < 1 || json == 'NULL') {
			//console.log("No hay datos disponibles.");
			$('#error').show();
			$('#' + div).hide();
			return false;
		} else {
			//console.log("JSON correcto");
			$('#error').hide();
			$('#' + div).show();
			// SWITCH CHART DEPENDS VAR "TYPE"
			switch (type) {
				// BREAK CHART
				case 'broken':
					$.broken(div, json);
					break;
				// COLUMN CHART
				case 'column':
					$.column(div, json);
					break;

				// COMPARATIVE CHART
				case 'comparative':
					$.comparative(div, json);
					break;

				// DONUT CHART
				case 'donut':
					$.donut(div, json);
					break;

				// EVOLUTION CHART
				case 'evolution':
					$.evolution(div, json);
					break;

				// LINE CHART
				case 'line':
					$.line(div, json);
					break;

				// PIE CHART
				case 'pie':
					$.pie(div, json);
					break;

				// SMOOTHLINE CHART
				case 'smoothline':
					$.smoothline(div, json);
					break;

				case 'stackbar':
					$.stackbar(div, json);
					break;

				case 'historicoCategoria':
					$.historicoCategoria(div, json);
					break;

				case 'telefonosPorProducto':
					$.telefonosPorProducto(div, json);
					break;

				case 'grafHistoricoMes':
					$.historicoMes(div, json);
					break;
			}
			;
		}
		$('.animation_image').hide();
	} catch (err) {
		// SHOW ERRORS
		console.log('Error:\n' + err);
		$('.animation_image').hide();
	}
};

var chart;
// COLUMN CHART
$.column = function (div, json) {
// INIT
	chart = new AmCharts.AmSerialChart();
	var chartScrollbar = new AmCharts.ChartScrollbar();
	chart.addChartScrollbar(chartScrollbar);
	chart.dataProvider = json.data;
	chart.graphs = json.graphs;
	chart.gridAboveGraphs = true;
	chart.pathToImages = "http://www.amcharts.com/lib/3/images/";
	chart.categoryField = "fecha";
	chart.language = "es";
	chart.numberFormatter = $.formatNumber();

// DATE
	chart.dataDateFormat = "YYYY-MM-DD HH:NN";

// ANIMATION
	$.animation(chart, false);

// MARGIN
	$.margin(chart);

// AXIS X
	$.categoryAxis(chart);

// VALUE AXIS X
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.dashLength = 1;
	valueAxis.axisColor = "#DADADA";
	valueAxis.axisAlpha = 1;
	valueAxis.unit = "$";
	valueAxis.unitPosition = "left";
	chart.addValueAxis(valueAxis);

// LEGEND
	$.legend(chart);

// CURSOR
// var chartCursor              = new AmCharts.ChartCursor();
// chart.addChartCursor(chartCursor);

// EXPORT
	chart.exportConfig = $.export();

// WRITE
	chart.write(div);
};


$.historicoMes = function (div, json) {

// INIT
	chart = new AmCharts.AmSerialChart();
	var chartScrollbar = new AmCharts.ChartScrollbar();
	chart.addChartScrollbar(chartScrollbar);

	chart.dataProvider = json.data;
	chart.graphs = json.graphs;
	chart.gridAboveGraphs = true;
	chart.pathToImages = "http://www.amcharts.com/lib/3/images/";
	chart.categoryField = "fecha";
	chart.language = "es";
	chart.numberFormatter = $.formatNumber();

// DATE
	chart.dataDateFormat = "YYYY-MM-DD HH:NN";

// ANIMATION
	$.animation(chart, false);

// MARGIN
	$.margin(chart);

// AXIS X
	$.categoryAxis(chart);

// VALUE AXIS X
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.dashLength = 1;
	valueAxis.axisColor = "#DADADA";
	valueAxis.axisAlpha = 1;
	valueAxis.unit = "$";
	valueAxis.unitPosition = "left";
	chart.addValueAxis(valueAxis);

// LEGEND
	$.legend(chart);


// CURSORS
// var chartCursor                    = new AmCharts.ChartCursor();
// chartCursor.categoryBalloonEnabled = true;
// chartCursor.cursorAlpha            = 0;
// chartCursor.zoomable               = true;
// chart.addChartCursor(chartCursor);

// EXPORT
	chart.exportConfig = $.export();

// WRITE
	chart.write(div);
};

$.historicoCategoria = function (div, json) {

// INIT
	chart = new AmCharts.AmPieChart();
	chart.dataProvider = json.data;
	chart.titleField = "nombre";
	chart.valueField = "cantidad";
	chart.outlineColor = "#FFFFFF";
	chart.outlineAlpha = 0.8;
	chart.outlineThickness = 2;
	chart.labelText = "[[nombre]]";
	chart.balloonTex = "[[title]]<br><span style='font-size:11px'><b>[[value]]</b> ([[percents]]%)</span>";
	chart.pathToImages = "http://www.amcharts.com/lib/3/images/";
	chart.categoryField = "nombre";
	chart.radius = "35%";
	chart.language = "es";
	chart.numberFormatter = $.formatNumber();

// DATE
	chart.dataDateFormat = "YYYY-MM-DD HH:NN";

// ANIMATION
	$.animation(chart, false);

// LEGEND
	$.legend(chart);

// EXPORT
	chart.exportConfig = $.export();

// WRITE
	chart.write(div);
};

// STACK CHART
$.stackbar = function (div, json) {

// INIT
	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = json.data;
	chart.graphs = json.graphs;
	chart.gridAboveGraphs = true;
	chart.pathToImages = "http://www.amcharts.com/lib/3/images/";
	chart.categoryField = "fecha";
	chart.language = "es";
	chart.numberFormatter = $.formatNumber();

// DATE
	chart.dataDateFormat = "YYYY-MM-DD HH:NN";

// ANIMATION
	$.animation(chart, false);

// MARGIN
	$.margin(chart);

// AXIS X
	$.categoryAxis(chart);

// VALUE AXIS X
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.dashLength = 1;
	valueAxis.axisColor = "#DADADA";
	valueAxis.axisAlpha = 1;
	valueAxis.unit = "$";
	valueAxis.unitPosition = "left";
	valueAxis.stackType = "regular";
	chart.addValueAxis(valueAxis);

// LEGEND
	$.legend(chart);

// CURSOR
// var chartCursor              = new AmCharts.ChartCursor();
// chart.addChartCursor(chartCursor);

// EXPORT
	chart.exportConfig = $.export();

// WRITE
	chart.write(div);
};

// DONUT CHART
$.donut = function (div, json) {

// INIT
	chart = new AmCharts.AmPieChart();
	chart.dataProvider = json.data;
	chart.titleField = "mes";
	chart.valueField = "monto";
	chart.outlineColor = "#FFFFFF";
	chart.outlineAlpha = 0.8;
	chart.outlineThickness = 2;
	chart.labelText = "[[numero]]";
	chart.balloonTex = "[[title]]<br><span style='font-size:11px'><b>[[value]]</b> ([[percents]]%)</span>";
	chart.pathToImages = "http://www.amcharts.com/lib/3/images/";
	chart.categoryField = "fecha";
	chart.language = "es";
	chart.numberFormatter = $.formatNumber();

// EXTRAS
	chart.labelRadius = 5;
	chart.radius = "35%";
	chart.innerRadius = "60%";

// DATE
	chart.dataDateFormat = "YYYY-MM-DD HH:NN";

// ANIMATION
	$.animation(chart, false);

// LEGEND
	$.legend(chart);

// CURSOR
// var chartCursor              = new AmCharts.ChartCursor();
// chart.addChartCursor(chartCursor);

// EXPORT
	chart.exportConfig = $.export();

// WRITE
	chart.write(div);
};

// COMPARATIVE CHART
$.comparative = function (div, json) {

// INIT
	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = json.data;
	chart.pathToImages = "http://www.amcharts.com/lib/3/images/";
	chart.categoryField = "date";
	chart.language = "es";
	chart.numberFormatter = $.formatNumber();

// DATE
	chart.dataDateFormat = "YYYY-MM-DD HH:NN";

// AXIS X
	$.categoryAxis(chart, false);

// VALUE AXIS X
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.dashLength = 1;
	valueAxis.axisColor = "#DADADA";
	valueAxis.axisAlpha = 1;
	valueAxis.unit = "$";
	valueAxis.unitPosition = "left";
	chart.addValueAxis(valueAxis);

// ANIMATION
	$.animation(chart, false);

// LEGEND
	$.legend(chart);

// GRAPH 1
	var graph = new AmCharts.AmGraph();
	graph.title = json.years[0];
	graph.balloonText = "<strong>[[date]] - [[year1]]</strong> <br>Monto: $[[value]]";
	graph.type = "line";
	graph.valueField = "val1";
	graph.lineColor = "#60c6cf";
	graph.lineThickness = 3;
	graph.bullet = "round";
	graph.bulletColor = "#60c6cf";
	graph.bulletBorderColor = "#ffffff";
	graph.bulletBorderAlpha = 1;
	graph.bulletBorderThickness = 3;
	graph.bulletSize = 15;
	chart.addGraph(graph);

// GRAPH 2
	var graph1 = new AmCharts.AmGraph();
	graph1.title = json.years[1];
	graph1.balloonText = "<strong>[[date]] - [[year2]]</strong> <br>Monto: $[[value]]";
	graph1.type = "line";
	graph1.valueField = "val2";
	graph1.lineColor = "#f35958";
	graph1.lineThickness = 3;
	graph1.bullet = "round";
	graph1.bulletColor = "#f35958";
	graph1.bulletBorderColor = "#ffffff";
	graph1.bulletBorderAlpha = 1;
	graph1.bulletBorderThickness = 3;
	graph1.bulletSize = 12;
	chart.addGraph(graph1);

// GRAPH 3
	var graph2 = new AmCharts.AmGraph();
	graph2.title = json.years[2];
	graph2.balloonText = "<strong>[[date]] - [[year3]]</strong> <br>Monto: $[[value]]";
	graph2.type = "line";
	graph2.valueField = "val3";
	graph2.lineThickness = 3;
	graph2.bullet = "round";
	graph2.bulletBorderColor = "#ffffff";
	graph2.bulletBorderAlpha = 1;
	graph2.bulletBorderThickness = 3;
	graph2.bulletSize = 12;
	chart.addGraph(graph2);

// EXPORT
	chart.exportConfig = $.export();

// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	chart.addChartCursor(chartCursor);

// WRITE
	chart.write(div);

	$.generateTable(json);
};

// EVOLUTION CHART
$.evolution = function (div, json) {

// INIT
	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = json.data;
	chart.pathToImages = "http://www.amcharts.com/lib/3/images/";
	chart.categoryField = "fecha";
	chart.language = "es";
	chart.numberFormatter = $.formatNumber();

// DATE
	chart.dataDateFormat = "YYYY-MM-DD HH:NN";

// AXIS X
	$.categoryAxis(chart);

// VALUE AXIS X
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.dashLength = 1;
	valueAxis.axisColor = "#DADADA";
	valueAxis.axisAlpha = 1;
	valueAxis.unit = "$";
	valueAxis.unitPosition = "left";
	chart.addValueAxis(valueAxis);

// ANIMATION
	$.animation(chart, false);

// LEGEND
	$.legend(chart);

// GRAPH
	var graph = new AmCharts.AmGraph();
	graph.title = "";
	graph.balloonText = "[[category]]<br><b><span style='font-size:14px;'>$ [[value]]</span></b>";
	graph.type = "line";
	graph.valueField = "value";
	graph.lineColor = "#60c6cf";
	graph.lineThickness = 3;
	graph.bullet = "round";
	graph.bulletColor = "#60c6cf";
	graph.bulletBorderColor = "#ffffff";
	graph.bulletBorderAlpha = 1;
	graph.bulletBorderThickness = 3;
	graph.bulletSize = 12;
	chart.addGraph(graph);

// EXPORT
	chart.exportConfig = $.export();

// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	categoryBalloonDateFormat = 'MMM, YYYY '
	chart.addChartCursor(chartCursor);

// WRITE
	chart.write(div);
};

// PIE CHART
$.pie = function (div, json) {
// INIT
	chart = new AmCharts.AmPieChart();
	chart.dataProvider = json.data;
	chart.titleField = "mes";
	chart.valueField = "monto";
	chart.outlineColor = "#FFFFFF";
	chart.outlineAlpha = 0.8;
	chart.outlineThickness = 2;
	chart.labelText = "[[numero]]";
	chart.balloonTex = "[[title]]<br><span style='font-size:11px'><b>[[value]]</b> ([[percents]]%)</span>";
	chart.pathToImages = "http://www.amcharts.com/lib/3/images/";
	chart.categoryField = "fecha";
	chart.language = "es";
	chart.numberFormatter = $.formatNumber();

// DATE
	chart.dataDateFormat = "YYYY-MM-DD HH:NN";

// ANIMATION
	$.animation(chart, false);

// LEGEND
	$.legend(chart);

// EXPORT
	chart.exportConfig = $.export();

// WRITE
	chart.write(div);
};

$.telefonosPorProducto = function (div, json) {

// INIT
	chart = new AmCharts.AmPieChart();
	chart.dataProvider = json.data;
	chart.titleField = "numero" // "nombre";
	chart.valueField = "monto" // "cantidad";
	chart.outlineColor = "#FFFFFF";
	chart.outlineAlpha = 0.8;
	chart.outlineThickness = 2;
	chart.labelText = "[[numero]]" // "[[nombre]]";
	chart.balloonTex = "[[title]]<br><span style='font-size:11px'><b>[[value]]</b> ([[percents]]%)</span>";
	chart.pathToImages = "http://www.amcharts.com/lib/3/images/";
	chart.categoryField = "numero" //"nombre";
	chart.radius = "35%";
	chart.language = "es";
	chart.numberFormatter = $.formatNumber();

// DATE
	chart.dataDateFormat = "YYYY-MM-DD HH:NN";

// ANIMATION
	$.animation(chart, false);

// LEGEND
	$.legend(chart);

// EXPORT
	chart.exportConfig = $.export();

// WRITE
	chart.write(div);
};

// BROKEN CHART
$.broken = function (div, json) {
	var selected;
	var number;
	var types = json.data;

// INIT
	chart = new AmCharts.AmPieChart();
	chart.dataProvider = $.generateChartData(types, selected);
	chart.titleField = "type";
	chart.valueField = "percent";
	chart.outlineColor = "#FFFFFF";
	chart.outlineAlpha = 0.8;
	chart.outlineThickness = 0.5;
	chart.colorField = "color";
	chart.pulledField = "pulled";
	chart.balloonText = "<b>$[[percent]] ([[percents]]%)</b>";
	chart.labelText = "[[type]]";
	chart.radius = "35%";
	chart.depth3D = 0;
	chart.groupedPulled = true;

// DATE
	chart.dataDateFormat = "YYYY-MM-DD HH:NN";

// ANIMATION
	$.animation(chart, false);

// EXPORT
	chart.exportConfig = $.export();

// LEGEND
	$.legend(chart, 'legenddiv', 'Producto: [[title]]');

// LISTENERS
	chart.addListener("clickSlice", function (event) {
		$('#lista').parent().find("h4").empty()
		if (event.dataItem.dataContext.id != undefined) {
			number = event.dataItem.dataContext.type;
			selected = event.dataItem.dataContext.id;
		}
		else {
			number = '';
			selected = undefined;
			$('#legenddiv').show();
		}
		chart.dataProvider = $.generateChartData(types, selected, number);
		chart.validateData();
	});

// WRITE
	chart.write(div);
};

// GENERATE DATA TO BROKEN CHART
$.generateChartData = function (types, selected, number) {
	$('#lista').hide();
	$('#lista tbody').empty();
	$('#lista tfoot').empty();
	var chartData = [];
	var total = 0;
	var porcent = 0;
	for (var i = 0; i < types.length; i++) {
		if (types[i].subs.length > 0 && i == selected) {
			$('#legenddiv').hide();
			$('#lista').show();
			for (var x = 0; x < types[i].subs.length; x++) {
				chartData.push({
					type: types[i].subs[x].type,
					percent: types[i].subs[x].percent,
					pulled: true
				});
				total += parseInt(types[i].subs[x].percent);
			}
			for (var x = 0; x < types[i].subs.length; x++) {
				porcent = $.porcentaje(total, types[i].subs[x].percent, 1, ',', '.');
				if (types[i].subs[x].percent < 0) {
					$('#lista tbody').append('<tr class="danger">' +
					'<td class="col-md-5">' + types[i].subs[x].type + '</td>' +
					'<td class="col-md-4">' + $.progressbar(porcent) + '</td>' +
					'<td class="col-md-2 text-right">- $' + types[i].subs[x].percent * -1 + '</td>' +
					'</tr>');
				} else {
					$('#lista tbody').append('<tr>' +
					'<td class="col-md-5">' + types[i].subs[x].type + '</td>' +
					'<td class="col-md-4">' + $.progressbar(porcent) + '</td>' +
					'<td class="col-md-2 text-right">$' + types[i].subs[x].percent + '</td>' +
					'</tr>');
				}
			}
			;
			$('#lista').parent().prepend('<h4><strong>Detalle N° ' + number + '</strong></h4>');
			$('#lista').append('<tfoot><tr class="info" style="font-weight: bold;">' + '<td class="col-md-5">TOTAL</td><td class="col-md-4"></td><td class="col-md-2 text-right">$' + total + '</td>' + '</tr></tfoot>');
		} else {
			chartData.push({
				type: types[i].type,
				percent: types[i].percent,
				id: i
			});
		}
	}
	return chartData;
};

$.animation = function (chart, bool) {
	if (bool) {
		chart.sequencedAnimation = true;
		chart.startDuration = 5;
		chart.startAlpha = 10;
	} else {
		chart.sequencedAnimation = false;
		chart.startDuration = 0;
		chart.startAlpha = 0;
	}
}

$.export = function () {
	var exportConfig = {
		menuTop: "0px",
		menuBottom: "0px",
		menuRight: "0px",
		backgroundColor: "#efefef",
		menuItems: [{
			textAlign: 'center',
			icon: 'http://www.amcharts.com/lib/3/images/export.png',
			items: [{
				title: 'JPG',
				format: 'jpg'
			}, {
				title: 'PNG',
				format: 'png'
			}, {
				title: 'SVG',
				format: 'svg'
			}, {
				title: 'PDF',
				format: 'pdf'
			}]
		}],
	};
//return exportConfig;
};

$(".buttonExport").click(function () {
	var exp = new AmCharts.AmExport(chart);
	var output = "pdf";
	var id = this.id;
	switch (id) {
		case ('btnPDF'):
			output = 'pdf';
			break;
		case ('btnJPG'):
			output = 'jpg';
			break;
		case ('btnPNG'):
			output = 'png';
			break;
	}
	exp.init();
	exp.output({
		format: output,
		output: 'save'
	});
});


$.legend = function (chart, legenddiv, text) {
	legenddiv = typeof legenddiv !== 'undefined' && legenddiv.length != 0 ? legenddiv : false;
	text = typeof text !== 'undefined' && text.length != 0 ? text : false;

	var legend = new AmCharts.AmLegend();
	legend.align = "center";
	legend.markerType = "circle";
	legend.valueText = "";
	legend.useGraphSettings = false;
	if (!text) {
		legend.labelText = "[[title]]";
	} else {
		legend.labelText = text;
	}
	;
	if (!legenddiv) {
		chart.addLegend(legend);
	} else {
		chart.addLegend(legend, legenddiv);
	}
};

$.margin = function (chart) {
	chart.autoMargins = false;
	chart.marginRight = 10;
	chart.marginLeft = 80;
	chart.marginBottom = 20;
	chart.marginTop = 20;
};

$.formatNumber = function () {
	var formatNumber = {
		decimalSeparator: ",",
		thousandsSeparator: ".",
		precision: -1,
	};
	return formatNumber;
};

$.categoryAxis = function (chart, parse) {
	parse = typeof parse !== 'undefined' && parse.length != 0 ? parse : true;
	var categoryAxis = chart.categoryAxis;
	categoryAxis.inside = false;
	categoryAxis.axisAlpha = 0;
	categoryAxis.gridAlpha = 0;
	categoryAxis.tickLength = 0;
	categoryAxis.minPeriod = "MM";
	// categoryAxis.equalSpacing = false;
	categoryAxis.equalSpacing = true;
	categoryAxis.boldPeriodBeginning = true;
	if (parse) {
		categoryAxis.parseDates = true;
		categoryAxis.dateFormats = [{
			period: 'fff',
			format: 'JJ:NN:SS'
		}, {
			period: 'ss',
			format: 'JJ:NN:SS'
		}, {
			period: 'mm',
			format: 'JJ:NN'
		}, {
			period: 'hh',
			format: 'JJ:NN'
		}, {
			period: 'DD',
			format: 'MMM DD'
		}, {
			period: 'WW',
			format: 'MMM DD'
		}, {
			period: 'MM',
			format: 'MMM YYYY'
		}, {
			period: 'YYYY',
			format: 'MMM YYYY'
		}];
	}
	;
};

$.generateTable = function (json) {
	$('.animation_image').show();
	var date;
	numeral.defaultFormat('$0,0');
	var val2 = numeral();
	var val3 = numeral();
	var variation;
	var resta;
	$.each(json.data, function (key, value) {
		date = value['date-full'];
		val2 = typeof value['val2'] !== 'undefined' && value['val2'].length != 0 ? val2.set(value['val2']) : val2.set(0);
		val3 = typeof value['val3'] !== 'undefined' && value['val3'].length != 0 ? val3.set(value['val3']) : val3.set(0);
		if (val2.value() != 0 && val3.value() != 0) {
			resta = parseInt(val3.value() - val2.value());
			if (resta < 0) {
				resta = parseInt(-1 * resta);
			}
			variation = Math.ceil((resta * 100) / val2.value());
		}
		else {
			variation = 100;
		}
		if (val2.value() > val3.value()) {
			$('#statics tbody').append('<tr>' +
			'<td>' + date + '</td>' +
			'<td>' + val2.format() + '</td>' +
			'<td>' + val3.format() + '</td>' +
			'<td><i class="fa fa-arrow-down fa-fw arrow-down"></i> ' + variation + '%</td>' +
			'</tr>');
		} else {
			$('#statics tbody').append('<tr>' +
			'<td>' + date + '</td>' +
			'<td>' + val2.format() + '</td>' +
			'<td>' + val3.format() + '</td>' +
			'<td><i class="fa fa-arrow-up fa-fw arrow-up"></i> ' + variation + '%</td>' +
			'</tr>');
		}

	});
};