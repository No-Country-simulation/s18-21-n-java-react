package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.exceptions.ApplicationException;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class MailService {

    private final JavaMailSender javaMailSender;


    @Autowired
    public MailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }


    public void sendEmailToVerification(String email, String verificationCode) {

        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message,true);

            helper.setTo(email);
            helper.setSubject("Email Verification");
            helper.setText("Your verification code is: " + verificationCode, true);
            javaMailSender.send(message);
        } catch (MessagingException e) {
            throw new ApplicationException("An error occurred while sending the verification email: " + e.getMessage());
        }
    }

    public String generateVerificationCode() {
        return String.format("%06d", new Random().nextInt(999999));
    }
}
