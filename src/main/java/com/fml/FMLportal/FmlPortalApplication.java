package com.fml.FMLportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import javax.annotation.Resource;
import com.fml.FMLportal.property.FileStorageProperties;


import java.util.List;



import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
@EnableConfigurationProperties({
    FileStorageProperties.class
})
public class FmlPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(FmlPortalApplication.class, args);
	}
	
//	public void run(String... arg0) throws Exception {
//        SoccerService.addBarcelonaPlayer("Xavi Hernandez", "Midfielder", 6);
//        List<String> players = SoccerService.getAllTeamPlayers(1);
//        for(String player : players)
//        {
//            System.out.println("Introducing Barca player => " + player);
//        }
//    }
}
