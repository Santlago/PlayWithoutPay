package br.com.fiap.playwithoutpay.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Profile {
    
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String login;
    private String password;
}
