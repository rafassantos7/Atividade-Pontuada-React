package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "jogador")
public class Jogador {

    @NotBlank(message = "Nome é obrigatório.")
    private String nome;

    @NotBlank(message = "A idade é obrigatória.")
    private int idade;

    @NotBlank(message = "Altura é obrigatória.")
    private double altura;

    @NotBlank(message = "Peso é obrigatório.")
    private double peso;

    @NotBlank(message = "Número da camisa é obrigatório.")
    private int numeroCamisa;

    @Enumerated(EnumType.STRING)
    private Sexo sexo;

    @Enumerated(EnumType.STRING)
    private Posicao posicao;

    public Jogador() {
    }

    public Jogador(String nome, int idade, double altura, double peso, int numeroCamisa, Sexo sexo, Posicao posicao) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.numeroCamisa = numeroCamisa;
        this.sexo = sexo;
        this.posicao = posicao;
    }

    public @NotBlank(message = "Nome é obrigatório.") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "Nome é obrigatório.") String nome) {
        this.nome = nome;
    }

    @NotBlank(message = "A idade é obrigatória.")
    public int getIdade() {
        return idade;
    }

    public void setIdade(@NotBlank(message = "A idade é obrigatória.") int idade) {
        this.idade = idade;
    }

    @NotBlank(message = "Altura é obrigatória.")
    public double getAltura() {
        return altura;
    }

    public void setAltura(@NotBlank(message = "Altura é obrigatória.") double altura) {
        this.altura = altura;
    }

    @NotBlank(message = "Peso é obrigatório.")
    public double getPeso() {
        return peso;
    }

    public void setPeso(@NotBlank(message = "Peso é obrigatório.") double peso) {
        this.peso = peso;
    }

    @NotBlank(message = "Número da camisa é obrigatório.")
    public int getNumeroCamisa() {
        return numeroCamisa;
    }

    public void setNumeroCamisa(@NotBlank(message = "Número da camisa é obrigatório.") int numeroCamisa) {
        this.numeroCamisa = numeroCamisa;
    }

    public String getPosicao() {
        return posicao.getTexto();
    }

    public void setPosicao(Posicao posicao) {
        this.posicao = posicao;
    }

    public String getSexo() {
        return sexo.getTexto();
    }

    public void setSexo(Sexo sexo) {
        this.sexo = sexo;
    }
}
