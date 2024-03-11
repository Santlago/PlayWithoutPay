package br.com.fiap.playwithoutpay.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.playwithoutpay.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
