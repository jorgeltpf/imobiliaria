@extends('app')

{{-- Web site Title --}}
@section('title')
    Default :: @parent
@endsection

{{-- Styles --}}
@section('styles')
    @parent

@endsection

{{-- Sidebar --}}
@section('sidebar')

@endsection

@section('main')
	@parent

@endsection

{{-- Scripts --}}
@section('scripts')
    @parent

@endsection
