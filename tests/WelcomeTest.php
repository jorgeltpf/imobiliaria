<?php

class WelcomeTest extends TestCase {

	/**
	 * A basic functional test.
	 *
	 * @return void
	 */
	public function testWelcome() {
		$response = $this->call('GET', '/');

		$this->assertEquals(200, $response->getStatusCode());
	}

	public function test_forwarder_forwards_the_page() {
        $this->visit('/auth/login')
            ->seePageIs('forwarded-to');
    }

}
