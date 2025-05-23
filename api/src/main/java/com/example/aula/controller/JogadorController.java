package com.example.aula.controller;

import com.example.aula.model.Jogador;
import com.example.aula.service.JogadorService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/jogadores")
public class JogadorController {

    private JogadorService jogadorService;

    public JogadorController(JogadorService jogadorService) {
        this.jogadorService = jogadorService;
    }

    @GetMapping
    public List<Jogador> listarTodos() {
        return jogadorService.listarTodos();
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@Valid @RequestBody Jogador jogador) {
        jogadorService.salvar(jogador);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of("mensagem", "Usuário cadastrado com sucesso."));
    }

    @PutMapping
    public ResponseEntity<Map<String, Object>> atualizar(@Valid @RequestBody Jogador jogador) {
        jogadorService.atualizar(jogador);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Map.of("mensagem", "Usuário atualizado com sucesso"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> excluir(@PathVariable int numeroCamisa) {
        jogadorService.excluir(numeroCamisa);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Map.of("mensagem", "Usuário excluído com sucesso"));
    }
}
