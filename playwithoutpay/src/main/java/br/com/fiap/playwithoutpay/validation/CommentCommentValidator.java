package br.com.fiap.playwithoutpay.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class CommentCommentValidator implements ConstraintValidator<CommentComment, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {

        // Check if the description is not null and not empty
        if (value == null || value.isEmpty()) {
            return false; // Description cannot be null or empty
        }

        // Check if the description length is within acceptable bounds
        int minLength = 5; // Minimum length for description
        int maxLength = 200; // Maximum length for description
        int descriptionLength = value.length();
        if (descriptionLength < minLength || descriptionLength > maxLength) {
            return false; // Description length is not within bounds
        }

        // You can add more validation rules here if needed

        // If none of the above conditions are met, then the description is valid
        return true;        
    }

}
