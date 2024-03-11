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

import br.com.fiap.playwithoutpay.model.User;
import br.com.fiap.playwithoutpay.repository.UserRepository;

@RestController
@RequestMapping("user")
public class UserController {

    Logger log = LoggerFactory.getLogger(getClass());
    
    @Autowired
    UserRepository repository;

    // User register
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User create (@RequestBody User user) {
        log.info("Registering user {}", user);
        return repository.save(user);
    }

    // User information
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<User> show(@PathVariable Long id) {
        log.info("Getting user with id {}", id);
        
        return repository
            .findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // // User delete
    // @DeleteMapping("{id}")
    // public ResponseEntity delete(@PathVariable Long id) {
    //     log.info("Deleteing user with id {}", id);
    //     for (User user : repository) {
    //         if (user.id().equals(id))
    //             repository.remove(user);
    //             return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    //     }
    //     return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    // }

    // // User updating
    // @PutMapping("{id}")
    // public ResponseEntity update(@PathVariable Long id, @RequestBody User newuser) {
    //     log.info("Updating user {}", newuser);
    //     for (int i = 0; i < repository.size(); i++) {
    //         User user = repository.get(i);
    //         if (user.id().equals(id)) {
    //             User updatedUser = new User(id, newuser.login(), newuser.password());
    //             repository.set(i, updatedUser);
    //             return ResponseEntity.status(HttpStatus.OK).body(updatedUser);    
    //         }
    //     }
    //     return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    // }
}
