package com.loginsecurityjwt.sppringlatestsecurity.security;

import com.loginsecurityjwt.sppringlatestsecurity.model.Role;
import com.loginsecurityjwt.sppringlatestsecurity.security.jwt.JwtAuthorizationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.cors();
        http.csrf().disable(); // disable store sessions cookies
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS); // astfel aplicatia nu creeaza o sesiune si asa fiecare request trebuie autentifcat

        http.authorizeRequests()
                .antMatchers("/api/authentication/**").permitAll() // permitem orice request catre paginile care au acest URL
                .antMatchers(HttpMethod.GET, "/api/product").permitAll() // oricine poate sa foloseasca GET-ul de la products
                .antMatchers("/api/product/**").hasRole(Role.ADMIN.name()) // sau .hasRole(Role.ADMIN.name(), doar cei cu rol de Admin pot sa acceseze endpointul
                .anyRequest().authenticated();

        // trebuie sa folosim filtrul nostru prima data si dupa filtrul de la SpringSecurity, altfel filtrul nostru nu se va folosi
        http.addFilterBefore(jwtAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    // trrebuie sa cream un Bean pentru aceasta clasa pentru a putea folosi featurile din Spring
    // se poate declara ca si @Component dar JWT Filter este legat doar de Securitate (este legat de scope)
    @Bean
    public JwtAuthorizationFilter jwtAuthorizationFilter(){

        return new JwtAuthorizationFilter();
    }

    @Override
    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer(){

        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {

                registry.addMapping("/**")
                        .allowedOrigins("*")
                        .allowedMethods("*");
            }
        };
    }
}
