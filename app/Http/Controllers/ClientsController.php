<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Input;

use App\Http\Requests;
use App\Models\Client;

class ClientsController extends Controller {
    /*
      |--------------------------------------------------------------------------
      | Clients Controller
      |--------------------------------------------------------------------------
      |
      | This controller renders your application's "dashboard" for users that
      | are authenticated. Of course, you are free to change or remove the
      | controller as you wish. It is just here to get your app started!
      |
     */

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        //$this->middleware('auth');
    }

    public function index() {
        return view('clients.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        return view('clients.edit', compact('id'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create() {
        return view('clients.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request) {
        $client = new Client();

        $input = $request->all();

        $client->create($input);
        flash()->success('Cadastro salvo com sucesso!');

        return redirect('clients.index');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id) {
        $client = Client::find($id);
        $input = $request->all();
        $client->fill($input);

        $client->save();
        // Também pode ser usado para atualizar
        //$client->update();
        flash()->success('Cadastro atualizado com sucesso!');

        return redirect('clients.index');
    }

    public function delete($id) {
        $clients = $id;
        return view('clients/delete', compact('clients'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy(Request $request, $id) {
        $clients = Client::find($id);
        $clients->delete();
    }

}
