package br.com.fiap.playwithoutpay.validation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = FavoriteCommentValidator.class)
public @interface FavoriteComment {

    String message() default "{favorite.comment}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
