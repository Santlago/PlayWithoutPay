package br.com.fiap.playwithoutpay.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.playwithoutpay.model.User;

@RestController
@RequestMapping("user")
public class UserController {
    Logger log = LoggerFactory.getLogger(getClass());
    List<User> repository = new ArrayList<>();

    @PostMapping
    public ResponseEntity<User> create (@RequestBody User user) {
        log.info("Registering user {}", user);
        repository.add(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @GetMapping("{id}")
    public ResponseEntity show(@PathVariable Long id) {
        log.info("getting user with id {}", id);
        for (User user : repository) {
            if (user.id().equals(id))
                return ResponseEntity.status(HttpStatus.OK).body(user);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
