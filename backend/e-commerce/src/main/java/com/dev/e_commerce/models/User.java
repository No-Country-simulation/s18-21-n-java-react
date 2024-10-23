package com.dev.e_commerce.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;


@Entity
@Table(name = "user")
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@DiscriminatorColumn(name = "user_type")
@Inheritance(strategy = InheritanceType.JOINED)
public class User implements UserDetails {

   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    private String password;

    private String name;

    private String lastname;

    private String photoUrl;

    private Boolean isEnabled = false;

    private String verificationCode;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Temporal(TemporalType.DATE)
    private LocalDate createdAt;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return UserDetails.super.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return UserDetails.super.isAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return UserDetails.super.isCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return isEnabled;
    }
}