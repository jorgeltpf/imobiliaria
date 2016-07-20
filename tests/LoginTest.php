<?php

class LoginTest extends TestCase {

	public function testLogin() {
		$this->visit('/auth/login')
			 ->type('admin@admin.com', 'E-mail')
			 ->type('123456', 'Senha')
			 ->press('Login')
			 ->seePageIs('/home');
	}
}