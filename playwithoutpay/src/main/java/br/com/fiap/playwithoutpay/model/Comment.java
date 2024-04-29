package br.com.fiap.playwithoutpay.model;

import java.time.LocalDate;

import br.com.fiap.playwithoutpay.validation.CommentComment;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
public class Comment {
    
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    // private Long author_id;

    @CommentComment
    private String comment;

    private LocalDate date;

    @NotNull
    private Long gameId;
}
