var url_developer = '';
// var url_developer = '/idata';


$(".sidebar ul.nav li.current").parents('ul.children').addClass("active in");

$('#nav-profile a').click(function (e) {
	e.preventDefault();
	$(this).tab('show');
});
$.porcentaje = function (total, number) {
	a = parseInt(number * 100);
	a = parseInt(a / total);
	return a.toFixed(1);
}

$.progressbar = function (a) {
	var b = 0;
	var c = '';
	if (a > 0 && a < 100) {
		c = '<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="' + a + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + a + '%;">' + a + '%</div></div>';
    } else {
		b = a * -1.5;
		c = '<div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="' + b + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + b + '%;">' + a + '%</div></div>';
    };
	return c;
};


$.fn.centerToWindow = function() {
    var obj           = $(this);
    var obj_width     = $(this).outerWidth(true);
    var obj_height    = $(this).outerHeight(true);
    var window_width  = window.innerWidth ? window.innerWidth : $(window).width();
    var window_height = window.innerHeight ? window.innerHeight : $(window).height();

    obj.css({
	    "position": "fixed",
	    "top": ((window_height / 2) - (obj_height / 2)) + "px",
	    "left": ((window_width / 2) - (obj_width / 2)) + "px",
	    "padding": "800px",
	    'z-index': 99999999999999,
	    'background-color': "rgba(0,0,0,0.5)"
    });
}

$.convNumberToMonth = function(n) {
    var months = {1: 'Enero', 2: 'Febrero', 3: 'Marzo', 4: 'Abril', 5: 'Mayo', 6: 'Junio', 7: 'Julio', 8: 'Agosto', 9: 'Septiembre', 10: 'Octubre', 11: 'Noviembre', 12: 'Diciembre', };
    return months[n];
}

$.convMonthToNumber = function(m) {
    m = m.toLowerCase();
    var numbers = {'enero': 1, 'febrero': 2, 'marzo': 3, 'abril': 4, 'mayo': 5, 'junio': 6, 'julio': 7, 'agosto': 8, 'septiembre': 9, 'octubre': 10, 'noviembre': 11, 'diciembre': 12, };
    return numbers[m];
}

$.canvas_show = function (cl){
	cl.setColor('#ffffff'); // default is '#000000'
	cl.setShape('spiral'); // default is 'oval'
	cl.setDiameter(60); // default is 40
	cl.setDensity(50); // default is 40
	cl.setRange(1); // default is 1.3
	cl.setSpeed(1); // default is 2
	cl.setFPS(60); // default is 24
	cl.show();
};