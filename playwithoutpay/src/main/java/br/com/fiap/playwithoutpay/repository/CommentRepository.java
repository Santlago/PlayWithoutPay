package br.com.fiap.playwithoutpay.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.playwithoutpay.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long>{

    List<Comment> findByOrderByDateDesc();

}
