package com.search.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class StoredServiceTest {

	@Autowired
	private StoredService storedService;

	@Test
	public void saveName() throws Exception {
//		assertThat(this.storedService.saveName("Juan")).isNotNull();
	}

}
