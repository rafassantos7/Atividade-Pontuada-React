package com.example.aula.model;

public enum Posicao {
    GOLEIRO("Goleiro"),
    LATERAL_DIREITO("Lateral Direito"),
    LATERAL_ESQUERDO("Lateral Esquerdo"),
    ZAGUEIRO("Zagueiro"),
    VOLANTE("Volante"),
    MEIA("Meia"),
    ATACANTE("Atacante");

    private final String texto;

    Posicao(String texto) {
        this.texto = texto;
    }

    public String getTexto() {
        return texto;
    }

    public static Posicao fromTexto(String texto) {
        for (Posicao p : Posicao.values()) {
            if (p.getTexto().equalsIgnoreCase(texto)) {
                return p;
            }
        }
        throw new IllegalArgumentException("Posição inválida: " + texto);
    }
}
