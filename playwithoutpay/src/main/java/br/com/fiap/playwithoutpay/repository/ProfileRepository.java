package br.com.fiap.playwithoutpay.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.playwithoutpay.model.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Long>{
    
}
