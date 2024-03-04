package br.com.fiap.playwithoutpay.model;

import java.util.Random;

public record User (Long id, String login, String password) {
    public User(Long id, String login, String password) {
        this.id = Math.abs(new Random().nextLong());
        this.login = login;
        this.password = password;
    }
}
