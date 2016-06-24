@extends('layouts.default')

@section('title') Clientes :: @parent @stop

@section('main')
	<style type="text/css">
		#est fieldset legend {
    		font-size: 1.2em;
		}
		#est label {
			font-weight: bold;
		}
	</style>
@if(isset($clients))
    <div class="page-header">
        <h3>
            Editar Cliente - {!! $clients->name !!}
            <div class="pull-right">
                <div class="pull-right">
                    <a href="{{{ URL::to('clients/') }}}"
                       class="btn btn-sm btn-primary iframe">
                       <span class="glyphicon glyphicon-backward"></span>
                       Voltar
                    </a>
                </div>
            </div>
        </h3>
    </div>
{!!
	Form::model(
		$clients,
		[
			'method' => 'POST',
			'id' => 'est',
			'class' => 'form-horizontal',
			'action' => ['ClientsController@update', $clients->id],
			'enctype' => "multipart/form-data"
		]
	)
!!}
	@include('clients.form')

{!! Form::close() !!}
@endif
@stop