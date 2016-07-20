<?php

class SiteTest extends TestCase {

	/**
	 * A basic functional test.
	 *
	 * @return void
	 */
	public function testSiteSeeLogin() {
		$this->visit('/')
			 ->click('Login')
			 ->seePageIs('/auth/login');
	}

	public function testSiteSeeRegiser() {
		$this->visit('/')
			 ->click('Inscrever-se')
			 ->seePageIs('/auth/register');
	}

}
