<?php

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class RegisterTest extends TestCase {

	use DatabaseMigrations;
	use DatabaseTransactions;

	public function testRegister() {
        $this->visit('auth/register')
            ->type('bob', 'name')
            ->type('hello1@in.com', 'email')
            ->type('hello1', 'password')
            ->type('hello1', 'password_confirmation')
            ->press('Registrar')
            ->seePageIs('/home');
	}
}