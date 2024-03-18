package br.com.fiap.playwithoutpay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.playwithoutpay.model.Comment;
import br.com.fiap.playwithoutpay.repository.CommentRepository;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("comment")
@Slf4j
public class CommentController {
    
    @Autowired
    CommentRepository repository;
    
    // All comments
    @GetMapping
    public List<Comment> index() {
        return repository.findAll();
    }

    // Comment register
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Comment create(@RequestBody @Valid Comment comment) {
        log.info("Registering comment {}", comment);

        return repository.save(comment);
    }
}
