@extends('layouts.dashboard')

@section('title', 'Centro de Mensajes')

@section('content')
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-default">
			<div class="panel-body">
				<h2>Centro de mensajes</h2>
				<div class="media" style="border-top: 1px solid; border-bottom: 0px solid;padding: 20px 0;">
					<a class="pull-left" href="#">
						<img class="media-object img-responsive img-thumbnail" src="http://vtr.com/empresa/images/fb_VTR_1.png" alt="">
					</a>
					<a class="btn btn-primary pull-right" href="http://vtr.com/empresa/prensa/index.php?opc=detalle_noticia&idnoticia=710" style="margin-top: 40px;">Entra aquí</a>
					<div class="media-body" style="padding: 0 35px;">
					<h3 class="media-heading">Te invitamos a nuestro evento Lollapalooza</h3>
					<div class="visible-xs visible-sm">
						<p>VTR es el nuevo sponsor de este megaevento, y por ello te invitamos a participar en forma especial, con descuentos y beneficios exclusivos.</p>
					</div>
					<div class="visible-md visible-lg">
							<p>VTR es el nuevo sponsor de este megaevento, y por ello te invitamos a participar en forma especial, con descuentos y beneficios exclusivos.</p>
						</div>
					</div>
				</div>
				<div class="media" style="border-top: 1px solid; border-bottom: 0px solid;padding: 20px 0;">
					<a class="pull-left" href="#">
						<img class="media-object img-responsive img-thumbnail" src="http://cdn1.appleinsider.com/gallery/10387-2589-iPhone-6-Coque-Concept-020-l.png" alt="">
					</a>
					<a class="btn btn-primary pull-right" href="http://www.businessinsider.com/apple-iphone-6-photos-specs-features-2014-9" style="margin-top: 40px;">Entra aquí</a>
					<div class="media-body" style="padding: 0 35px;">
						<h3 class="media-heading">Llega un nuevo smartphone a VTR móvil</h3>
					<div class="visible-xs visible-sm">
						<p>Te queremos presentar nuestro nuevo smartphone en exclusiva: el iPhone 6, más potente, más pantalla, mejor batería.</p>
					</div>
					<div class="visible-md visible-lg">
							<p>Te queremos presentar nuestro nuevo smartphone en exclusiva: el iPhone 6, más potente, más pantalla, mejor batería.</p>
						</div>
					</div>
				</div>
				<div class="media" style="border-top: 1px solid; border-bottom: 0px solid;padding: 20px 0;">
					<a class="pull-left" href="#">
						<img class="media-object img-responsive img-thumbnail" src="holder.js/120x120" alt="">
					</a>
					<a class="btn btn-primary pull-right" href="#" style="margin-top: 40px;">Entra aquí</a>
					<div class="media-body" style="padding: 0 35px;">
					<div class="visible-xs visible-sm">
						<h3 class="media-heading">T&iacute;tulo</h3>
						<p>Lorem ipsum Dolore irure Duis esse fugiat est laborum Duis dolor sint incididunt sunt in dolor non nisi et eu mollit nulla magna sint officia proident in nisi sed laboris dolore...</p>
					</div>
					<div class="visible-md visible-lg">
							<h3 class="media-heading">T&iacute;tulo</h3>
							<p>Lorem ipsum Dolore irure Duis esse fugiat est laborum Duis dolor sint incididunt sunt in dolor non nisi et eu mollit nulla magna sint officia proident in nisi sed laboris dolore id do consectetur dolor dolor Ut sed culpa id laboris incididunt quis nisi in ullamco aute occaecat sed fugiat aliqua eiusmod quis ea magna quis aute magna consequat cupidatat nulla velit quis ad sit in labore in enim in incididunt officia exercitation.</p>
						</div>
					</div>
				</div>
				<div class="media" style="border-top: 1px solid; border-bottom: 0px solid;padding: 20px 0;">
					<a class="pull-left" href="#">
						<img class="media-object img-responsive img-thumbnail" src="holder.js/120x120" alt="">
					</a>
					<a class="btn btn-primary pull-right" href="#" style="margin-top: 40px;">Entra aquí</a>
					<div class="media-body" style="padding: 0 35px;">
					<div class="visible-xs visible-sm">
						<h3 class="media-heading">T&iacute;tulo</h3>
						<p>Lorem ipsum Dolore irure Duis esse fugiat est laborum Duis dolor sint incididunt sunt in dolor non nisi et eu mollit nulla magna sint officia proident in nisi sed laboris dolore...</p>
					</div>
					<div class="visible-md visible-lg">
							<h3 class="media-heading">T&iacute;tulo</h3>
							<p>Lorem ipsum Dolore irure Duis esse fugiat est laborum Duis dolor sint incididunt sunt in dolor non nisi et eu mollit nulla magna sint officia proident in nisi sed laboris dolore id do consectetur dolor dolor Ut sed culpa id laboris incididunt quis nisi in ullamco aute occaecat sed fugiat aliqua eiusmod quis ea magna quis aute magna consequat cupidatat nulla velit quis ad sit in labore in enim in incididunt officia exercitation.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@stop

@section('aside')
@parent
@stop

@section('script')
<script type="text/javascript">
</script>
@stop

@section('style')
<style type="text/css" media="screen">
.media-object {
	max-height: 120px;
	max-width: 120px;
}
</style>
@stop