<?php

class SiteTest extends TestCase {

	/**
	 * A basic functional test.
	 *
	 * @return void
	 */
	public function testSite() {
		$response = $this->call('GET', '/');

		$this->assertEquals(200, $response->getStatusCode());
	}

}
