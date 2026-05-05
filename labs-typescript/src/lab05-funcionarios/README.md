# LAB05 — Sistema de Gerenciamento de Funcionários

## Descrição

Sistema em TypeScript para o departamento de RH gerenciar funcionários,
permitindo cadastrar, atualizar salário e consultar informações.

## Estrutura do Código

src/lab05-funcionarios/
└── index.ts

### Classes implementadas

**`Funcionario`**
- `matricula` (number) — identificador único
- `nome` (string) — nome do funcionário
- `cargo` (string) — cargo na empresa
- `salario` (number) — salário atual

**`Empresa`**
- `adicionarFuncionario(funcionario)` — cadastra funcionário
- `atualizarSalario(matricula, salario)` — atualiza salário por matrícula
- `consultarFuncionario(matricula)` — retorna Funcionario | undefined

## Como Executar

npm run lab05

## Testes Realizados

1. Cadastro de três funcionários (Ana, Bruno, Carla)
2. Atualização do salário do Bruno (matrícula 102) de R$4500 para R$5200
3. Tentativa de atualizar matrícula inexistente (999) — lança erro esperado
4. Consulta da Ana (matrícula 101) com exibição completa dos dados

## Exemplo de Saída

=== LAB05 - Gerenciamento de Funcionários ===

Funcionário "Ana Silva" cadastrado com sucesso.
Funcionário "Bruno Costa" cadastrado com sucesso.
Funcionário "Carla Melo" cadastrado com sucesso.

Salário de "Bruno Costa" atualizado para R$ 5200.00.
Erro: Funcionário com matrícula 999 não encontrado.

Dados do funcionário:
  Matrícula : 101
  Nome      : Ana Silva
  Cargo     : Desenvolvedora
  Salário   : R$ 6000.00