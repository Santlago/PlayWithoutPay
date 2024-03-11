package br.com.fiap.playwithoutpay.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.playwithoutpay.model.Profile;
import br.com.fiap.playwithoutpay.repository.ProfileRepository;

@RestController
@RequestMapping("profile")
public class ProfileController {

    Logger log = LoggerFactory.getLogger(getClass());
    
    @Autowired
    ProfileRepository repository;

    // Profile register
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Profile create (@RequestBody Profile profile) {
        log.info("Registering Profile {}", profile);
        return repository.save(profile);
    }

    // Profile information
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Profile> show(@PathVariable Long id) {
        log.info("Getting Profile with id {}", id);
        
        return repository
            .findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // // Profile delete
    // @DeleteMapping("{id}")
    // public ResponseEntity delete(@PathVariable Long id) {
    //     log.info("Deleteing Profile with id {}", id);
    //     for (Profile Profile : repository) {
    //         if (Profile.id().equals(id))
    //             repository.remove(Profile);
    //             return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    //     }
    //     return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    // }

    // // Profile updating
    // @PutMapping("{id}")
    // public ResponseEntity update(@PathVariable Long id, @RequestBody Profile newProfile) {
    //     log.info("Updating Profile {}", newProfile);
    //     for (int i = 0; i < repository.size(); i++) {
    //         Profile Profile = repository.get(i);
    //         if (Profile.id().equals(id)) {
    //             Profile updatedProfile = new Profile(id, newProfile.login(), newProfile.password());
    //             repository.set(i, updatedProfile);
    //             return ResponseEntity.status(HttpStatus.OK).body(updatedProfile);    
    //         }
    //     }
    //     return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    // }
}
