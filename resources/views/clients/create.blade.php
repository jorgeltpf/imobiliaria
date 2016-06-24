@extends('layouts.default')

@section('title') Clientes :: @parent @stop

@section('main')
	<style type="text/css">
		#form_new fieldset legend {
    		font-size: 1.2em;
		}
		#form_new label {
			font-weight: bold;
		}
	</style>
    <div class="page-header">
        <h3>
            Novo Cliente
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
	Form::open(
		[
			'action' => ['ClientsController@store'],
			'class' => 'form-horizontal',
			'id' => 'form_new',
			'enctype' => "multipart/form-data"
		]
	)
!!}

	@include('clients.form')

{!! Form::close() !!}
@stop
