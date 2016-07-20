<?php

class LoginTest extends TestCase {

	public function testLogin() {
		$this->visit('/auth/login')
			 ->type('admin@admin.com', 'email')
			 ->type('123456', 'password')
			 ->press('Login')
			 ->seePageIs('/home');
	}
}