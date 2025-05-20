package com.example.aula.service;

import com.example.aula.exception.NumeroCamisaJaCadastradoException;
import com.example.aula.model.Jogador;
import com.example.aula.repository.JogadorRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
public class JogadorService {
    private JogadorRepository jogadorRepository;

    public JogadorService(JogadorRepository jogadorRepository) {
        this.jogadorRepository = jogadorRepository;
    }

    public List<Jogador> listarTodos() {
        return jogadorRepository.findAll();
    }

    public Jogador salvar(@Valid Jogador jogador) {
        if (jogadorRepository.findByNumeroCamisa(jogador.getNumeroCamisa()).isPresent()) {
            throw new NumeroCamisaJaCadastradoException("Esse número já está sendo usado.");
        }

        return jogadorRepository.save(jogador);
    }

    public Jogador atualizar(@Valid Jogador jogador) {
        Jogador jogadorAtualizar = jogadorRepository.findByNumeroCamisa(jogador.getNumeroCamisa())
                .orElseThrow(() -> new IllegalArgumentException("Usuario não encontrado."));

        jogadorAtualizar.setNome(jogador.getNome());
        jogadorAtualizar.getPosicao();
        jogadorAtualizar.setAltura(jogador.getAltura());
        jogadorAtualizar.getSexo();
        jogadorAtualizar.setNumeroCamisa(jogador.getNumeroCamisa());
        jogadorAtualizar.setIdade(jogador.getIdade());
        jogadorAtualizar.setPeso(jogador.getPeso());

        return jogadorRepository.save(jogadorAtualizar);
    }

    public void excluir(int numeroCamisa) {
        Jogador jogadorExcluir = jogadorRepository.findByNumeroCamisa(numeroCamisa)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        jogadorRepository.deleteById(jogadorExcluir.getId());
    }

}
