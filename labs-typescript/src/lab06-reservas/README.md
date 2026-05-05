# LAB06 — Sistema de Reservas de Hotel

## Descrição

Sistema em TypeScript para gerenciar reservas de hotel, permitindo
registrar, cancelar e consultar o status de quartos.

## Estrutura do Código

src/lab06-reservas/
└── index.ts

### Classes implementadas

**`Reserva`**
- `numeroQuarto` (number) — número do quarto
- `nomeHospede` (string) — nome do hóspede
- `dataEntrada` (Date) — data de check-in
- `dataSaida` (Date) — data de check-out

**`Hotel`**
- `registrarReserva(reserva)` — adiciona nova reserva
- `cancelarReserva(numeroQuarto)` — remove a reserva do quarto
- `consultarStatusQuarto(numeroQuarto)` — retorna "Reservado" ou "Disponível"

## Como Executar

npm run lab06

## Testes Realizados

1. Registro de duas reservas (quartos 101 e 202)
2. Tentativa de reservar quarto já ocupado (101) — lança erro esperado
3. Cancelamento da reserva do quarto 101
4. Tentativa de cancelar quarto inexistente (999) — lança erro esperado
5. Consulta de status dos quartos 101 (disponível após cancelamento), 202 (reservado) e 303 (disponível)

## Exemplo de Saída

=== LAB06 - Sistema de Reservas de Hotel ===

Reserva do quarto 101 para "João Pereira" registrada.
Reserva do quarto 202 para "Maria Souza" registrada.
Erro: Quarto 101 já está reservado.

Reserva do quarto 101 cancelada com sucesso.
Erro: Nenhuma reserva encontrada para o quarto 999.

Status dos quartos:
  Quarto 101: Disponível
  Quarto 202: Reservado
  Quarto 303: Disponível