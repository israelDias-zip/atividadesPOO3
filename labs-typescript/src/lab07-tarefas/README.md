# LAB07 — Sistema de Gestão de Tarefas

## Descrição

Sistema em TypeScript para equipes de desenvolvimento gerenciarem tarefas
e projetos, permitindo adicionar, atualizar status e consultar por projeto.

## Estrutura do Código

src/lab07-tarefas/
└── index.ts

### Classes implementadas

**`Tarefa`**
- `id` (number) — identificador único
- `descricao` (string) — descrição da tarefa
- `status` (StatusTarefa) — "Pendente" | "Em Andamento" | "Concluída"
- `projeto` (string) — nome do projeto

**`GestorTarefas`**
- `adicionarTarefa(tarefa)` — adiciona tarefa ao sistema
- `atualizarStatus(id, status)` — atualiza o status por ID
- `consultarTarefasPorProjeto(projeto)` — retorna Tarefa[]

## Como Executar

npm run lab07

## Testes Realizados

1. Adição de quatro tarefas (três no projeto "App Mobile", uma em "Backend Web")
2. Atualização do status da tarefa 1 para "Em Andamento"
3. Tentativa de atualizar ID inexistente (99) — lança erro esperado
4. Consulta de todas as tarefas do projeto "App Mobile" com exibição no console

## Exemplo de Saída

=== LAB07 - Gestão de Tarefas ===

Tarefa "Criar wireframes" adicionada ao projeto "App Mobile".
Tarefa "Desenvolver API" adicionada ao projeto "App Mobile".
Tarefa "Escrever testes" adicionada ao projeto "App Mobile".
Tarefa "Deploy produção" adicionada ao projeto "Backend Web".

Tarefa 1 atualizada para "Em Andamento".
Erro: Tarefa com ID 99 não encontrada.

Tarefas do projeto "App Mobile":
  1 Criar wireframes — Em Andamento
  2 Desenvolver API — Em Andamento
  3 Escrever testes — Pendente