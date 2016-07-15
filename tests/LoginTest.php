<?php

class LoginTest extends TestCase {

	public function testLogin() {
		$this->visit('/auth/login')
			 ->type('teste@teste.com', 'email')
			 ->type('teste', 'password')
			 ->press('Login')
			 ->seePageIs('/');
	}
}