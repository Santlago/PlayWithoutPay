package br.com.fiap.playwithoutpay.controller;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.NO_CONTENT;

import java.util.List;

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

import br.com.fiap.playwithoutpay.model.Comment;
import br.com.fiap.playwithoutpay.repository.CommentRepository;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestParam;


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

    @GetMapping("latest")
    public List<Comment> latest() {
        return repository.findByOrderByDateDesc();
    }
    

    // Comment register
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Comment create(@RequestBody @Valid Comment comment) {
        log.info("Registering comment {}", comment);

        return repository.save(comment);
    }

    @GetMapping("{id}")
    public ResponseEntity<Comment> show(@PathVariable Long id) {
        log.info("Getting comment with id {}", id);

        return repository
                .findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());

    }

    @DeleteMapping("{id}")
    @ResponseStatus(NO_CONTENT)
    public void destroy(@PathVariable Long id) {
        log.info("apagando categoria {}", id);
        verifyIfCommentExists(id);
        repository.deleteById(id);
    }

    @PutMapping("{id}")
    public Comment update(@PathVariable Long id, @RequestBody Comment comment) {
        log.info("atualizar comment {} para {}", id, comment);

        verifyIfCommentExists(id);
        comment.setId(id);
        return repository.save(comment);
    }

    private void verifyIfCommentExists(Long id) {
        repository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        NOT_FOUND,
                        "There is no profile with this id"));
    }
}
