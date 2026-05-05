# LAB04 — Sistema de Gerenciamento de Biblioteca

## Descrição

Sistema em TypeScript para gerenciar o acervo de uma biblioteca pública,
permitindo cadastrar livros, registrar empréstimos e consultar disponibilidade.

## Estrutura do Código

src/lab04-biblioteca/
└── index.ts

### Classes implementadas

**`Livro`**
- `codigo` (number) — identificador único
- `titulo` (string) — título do livro
- `autor` (string) — autor do livro
- `disponivel` (boolean) — disponibilidade para empréstimo

**`Biblioteca`**
- `adicionarLivro(livro)` — adiciona livro ao acervo
- `registrarEmprestimo(codigo)` — marca o livro como indisponível
- `consultarDisponibilidade(codigo)` — retorna true/false

## Como Executar

npm run lab04

## Testes Realizados

1. Cadastro de três livros no acervo
2. Empréstimo do livro de código 1 com sucesso
3. Tentativa de emprestar livro já emprestado — lança erro esperado
4. Consulta de disponibilidade: código 1 (indisponível), 2 (disponível), 99 (inexistente)

## Exemplo de Saída

=== LAB04 - Gerenciamento de Biblioteca ===

Livro "Clean Code" adicionado ao acervo.
Livro "The Pragmatic Programmer" adicionado ao acervo.
Livro "Design Patterns" adicionado ao acervo.

Empréstimo do livro "Clean Code" registrado com sucesso.
Erro: Livro "Clean Code" já está emprestado.

Livro 1: Indisponível
Livro 2: Disponível
Erro: Livro com código 99 não encontrado.