package br.com.fiap.playwithoutpay.model;

import java.time.LocalDate;

import br.com.fiap.playwithoutpay.validation.FavoriteComment;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Comment {
    
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    // private Long author_id;

    @FavoriteComment
    private String description;

    private LocalDate date;
}
