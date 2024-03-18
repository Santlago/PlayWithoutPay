package br.com.fiap.playwithoutpay.controller;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.NO_CONTENT;

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
import org.springframework.web.server.ResponseStatusException;

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

    // Profile delete
    @DeleteMapping("{id}")
    @ResponseStatus(NO_CONTENT)
    public void destroy(@PathVariable Long id) {
        log.info("deleting profile {}", id);
        verifyIfProfileExists(id);
        repository.deleteById(id);
    }

    // Profile update
    @PutMapping("{id}")
    public Profile update(@PathVariable Long id, @RequestBody Profile profile) {
        log.info("update profile from {} to {}", id, profile);

        verifyIfProfileExists(id);
        profile.setId(id);
        return repository.save(profile);
    }

    private void verifyIfProfileExists(Long id) {
        repository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        NOT_FOUND,
                        "There is no profile with this id"));
    }
}
