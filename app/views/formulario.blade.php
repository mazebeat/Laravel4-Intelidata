@extends('layouts.basic')
@section('login')
<!-- LOGOUT BUTTON -->
@stop

@section('content')
<h2>Stadistics</h2>
<div class="row">
    <div class="col-md-4">
        <div class="panel panel-default">
            <div class="panel-body">
                <div id="chartdiv" style="height: 200px;"></div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="panel panel-default"
        <div class="panel-body">
            <div id="chartdiv2" style="height: 200px;"></div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="panel panel-default">
            <div class="panel-body">
                <div id="chartdiv3" style="height: 200px;"></div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-body">
                <div id="chartdiv4" style="height: 400px;"></div>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-body">
                <div id="chartdiv5" style="height: 400px;"></div>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-body">
                <div id="chartdiv6" style="height: 400px;"></div>
            </div>
        </div>
    </div>
</div>
@stop

@section('script')
@stop