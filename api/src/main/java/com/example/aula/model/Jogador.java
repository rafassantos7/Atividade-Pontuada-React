package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "table_jogador")
public class Jogador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @NotBlank(message = "Nome é obrigatório.")
    private String nome;

    @NotNull(message = "A idade é obrigatória.")
    @Min(value = 16, message = "Você deve ter mais que 16 anos.")
    @Max(value = 100, message = "Idade inválida.")
    private int idade;

    @NotNull(message = "Altura é obrigatória.")
    @Min(value = 1, message = "Altura inválida.")
    @Max(value = 2, message = "Altura inválida.")
    private double altura;

    @NotNull(message = "Peso é obrigatório.")
    @Min(value = 30, message = "Peso inválido.")
    @Max(value = 200, message = "Peso inválido.")
    private double peso;

    @NotNull(message = "Número da camisa é obrigatório.")
    @Min(value = 0, message = "Número da camisa inválido.")
    @Max(value = 100, message = "Número da camisa inválido.")
    private int numeroCamisa;

    @Enumerated(EnumType.STRING)
    private Sexo sexo;

    @Enumerated(EnumType.STRING)
    private Posicao posicao;

    public Jogador() {
    }

   

    public Jogador(Long id, @NotBlank(message = "Nome é obrigatório.") String nome,
            @NotNull(message = "A idade é obrigatória.") @Min(value = 16, message = "Você deve ter mais que 16 anos.") @Max(value = 100, message = "Idade inválida.") int idade,
            @NotNull(message = "Altura é obrigatória.") @Min(value = 1, message = "Altura inválida.") @Max(value = 2, message = "Altura inválida.") double altura,
            @NotNull(message = "Peso é obrigatório.") @Min(value = 30, message = "Peso inválido.") @Max(value = 200, message = "Peso inválido.") double peso,
            @NotNull(message = "Número da camisa é obrigatório.") @Min(value = 0, message = "Número da camisa inválido.") @Max(value = 100, message = "Número da camisa inválido.") int numeroCamisa,
            Sexo sexo, Posicao posicao) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.numeroCamisa = numeroCamisa;
        this.sexo = sexo;
        this.posicao = posicao;
    }



    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getNome() {
        return nome;
    }


    public void setNome(String nome) {
        this.nome = nome;
    }


    public int getIdade() {
        return idade;
    }


    public void setIdade(int idade) {
        this.idade = idade;
    }


    public double getAltura() {
        return altura;
    }


    public void setAltura(double altura) {
        this.altura = altura;
    }


    public double getPeso() {
        return peso;
    }


    public void setPeso(double peso) {
        this.peso = peso;
    }


    public int getNumeroCamisa() {
        return numeroCamisa;
    }


    public void setNumeroCamisa(int numeroCamisa) {
        this.numeroCamisa = numeroCamisa;
    }


    public String getSexo() { 
        return sexo.getTexto();
    }

    public void setSexo(Sexo sexo) {
        this.sexo = sexo;
    }


    public String getPosicao() {
        return posicao.getTexto();
    }


    public void setPosicao(Posicao posicao) {
        this.posicao = posicao;
    }

    

}
