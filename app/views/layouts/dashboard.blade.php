<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>iDATA | @yield('title')</title>
	<!-- Latest compiled and minified CSS -->
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and
	media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	<!-- CSS -->
	{{ HTML::style('css/frontend.min.css') }}
	{{ HTML::style('css/timeline.css') }}
	<!-- ICONS -->
	{{ HTML::style('css/font-awesome.min.css') }}
	{{ HTML::style('css/mono-social-icons.css') }}
	{{ HTML::style('css/pe-icon-7-stroke.css') }}
	{{ HTML::style('css/helper.css') }}
	<!-- TABS -->
	{{ HTML::style('css/bootstrap.vertical-tabs.css') }}
	<!-- SELECT BOOSTRAP -->
	{{ HTML::style('css/bootstrap-select.min.css') }}
	<!--  -->
	{{ HTML::style('css/hover-min.css') }}
	{{ HTML::style('//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/css/bootstrap-editable.css') }}
	@yield('style')
	<!-- Include the heartcode canvasloader js file -->
    <script src="http://heartcode-canvasloader.googlecode.com/files/heartcode-canvasloader-min-0.9.1.js"></script>
</head>
<body>
	<header class="container-fluid topbar">
		@include('sections.topbar')
	</header>
	<div class="container-fluid">
		<div class="row">
			<aside class="col-xs-12 col-sm-12 col-md-3 col-lg-3 sidebar">
				@include('sections.sidebar')
			</aside>
			<section class="col-xs-12 col-sm-12 col-md-9 col-lg-9 main">
    			<div id="animation_image" class="animation_image" style="display:none;" align="center">
                    {{--{{ HTML::image('images/loading.gif')}}--}}
                </div>
				@yield('content')
			</section>
		</div>
	</div>
	<footer class="container-fluid">
		@include('sections.footer')
	</footer>
	<!-- JQUERY 1.11.1 -->
	{{ HTML::script('//code.jquery.com/jquery-1.11.0.min.js') }}
	<!-- JQUERY COOKIE -->
	{{ HTML::script('js/jquery.cookie.js') }}
	<!-- BOOTSTRAP 3.2 JS -->
	{{ HTML::script('packages/bootstrap/dist/js/bootstrap.min.js') }}
	<!-- HOLDER.JS -->
	{{ HTML::script('js/holder.js') }}
	<!-- CHARTS -->
	{{ HTML::script('js/amcharts/amcharts.js') }}
	{{ HTML::script('js/amcharts/pie.js') }}
	{{ HTML::script('js/amcharts/serial.js') }}
	{{ HTML::script('j  s/amcharts/exporting/amexport.js') }}
	{{ HTML::script('js/bootstrap-select.min.js') }}
	<!--     {{ HTML::script('http://www.amcharts.com/lib/3/pie.js') }}
	{{ HTML::script('http://www.amcharts.com/lib/3/serial.js') }}
	{{ HTML::script('http://www.amcharts.com/lib/3/exporting/amexport_combined.js') }} -->
	{{ HTML::script('js/amcharts/lang/es.js') }}
	<!-- CUSTOM JAVASCRIPT -->
	{{ HTML::script('js/frontend.min.js') }}
	<script src="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/js/bootstrap-editable.min.js"></script>
	@yield('script')
</body>
</html>

