@extends('layouts.dashboard')

@section('content')
<div class="row">
	<div class="col-md-4">
		<article class="panel panel-default">
			<div class="panel-heading">
				<h4>Title</h4>
			</div>
			<div class="panel-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, mollitia incidunt ipsa unde alias assumenda laboriosam delectus qui eos iure.</p>
				<figure class="cont">
					<div class="donut-info">
						<h3>Julio</h3>
						<h2>-26%</h2>
					</div>
					<div id="error" style="display: none;">
						<div class="alert alert-danger">
							<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
							<strong>Ops!</strong> No hay datos disponibles ...
						</div>
					</div>
					<div id="chartdiv" style="height: 362px;"></div>
				</figure>
				<div id="donut-legend"></div>
			</div>
		</article>
	</div>
	<div class="col-md-4">
		<article class="panel panel-default">
			<div class="panel-heading">
				<h4>Title</h4>
			</div>
			<div class="panel-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, mollitia incidunt ipsa unde alias assumenda laboriosam delectus qui eos iure.</p>
				<figure class="cont">
					<div class="donut-info">
						<h3>Junio</h3>
						<h2>+36%</h2>
					</div>
					<div id="error" style="display: none;">
						<div class="alert alert-danger">
							<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
							<strong>Ops!</strong> No hay datos disponibles ...
						</div>
					</div>
					<div id="chartdiv2" style="height: 362px;"></div>
				</figure>
			</div>
		</article>
	</div>
	<div class="col-md-4">
		<article class="panel panel-default">
			<div class="panel-heading">
				<h4>Title</h4>
			</div>
			<div class="panel-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, mollitia incidunt ipsa unde alias assumenda laboriosam delectus qui eos iure.</p>
				<figure class="cont">
					<div class="donut-info centrar">
						<h3>Febrero</h3>
						<h2>+43%</h2>
					</div>
					<div id="error" style="display: none;">
						<div class="alert alert-danger">
							<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
							<strong>Ops!</strong> No hay datos disponibles ...
						</div>
					</div>
					<div id="chartdiv3" style="height: 362px;"></div>
				</figure>
			</div>
		</article>
	</div>
</div>
@stop

@section('aside')
@parent
@stop


@section('script')
<script type="text/javascript">
	var id = {{ Session::has('ses_user_id') ? Session::get('ses_user_id') : 'NULL' }};
	$.loadChart('chartdiv', '/postChartPie/'+id, '2014-06-01', 'pie');
	$.loadChart('chartdiv2', '/postChartPie/'+id, '2014-06-01', 'pie');
	$.loadChart('chartdiv3', '/postChartPie/'+id, '2014-06-01', 'pie');
</script>

@stop

@section('style')
<style type="text/css" media="screen">
</style>
@stop