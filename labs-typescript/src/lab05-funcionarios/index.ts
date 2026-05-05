// Classe que representa um Funcionário
class Funcionario {
  public matricula: number;
  public nome: string;
  public cargo: string;
  public salario: number;

  constructor(matricula: number, nome: string, cargo: string, salario: number) {
    this.matricula = matricula;
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }
}

// Classe que gerencia a lista de funcionários da empresa
class Empresa {
  private funcionarios: Funcionario[] = [];

  // Adiciona um novo funcionário à lista
  public adicionarFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
    console.log(`Funcionário "${funcionario.nome}" cadastrado com sucesso.`);
  }

  // Atualiza o salário de um funcionário pela matrícula
  public atualizarSalario(matricula: number, salario: number): void {
    const funcionario = this.funcionarios.find(f => f.matricula === matricula);
    if (!funcionario) {
      throw new Error(`Funcionário com matrícula ${matricula} não encontrado.`);
    }
    funcionario.salario = salario;
    console.log(`Salário de "${funcionario.nome}" atualizado para R$ ${salario.toFixed(2)}.`);
  }

  // Consulta e retorna um funcionário pela matrícula
  public consultarFuncionario(matricula: number): Funcionario | undefined {
    const funcionario = this.funcionarios.find(f => f.matricula === matricula);
    if (!funcionario) {
      console.log(`Funcionário com matrícula ${matricula} não encontrado.`);
      return undefined;
    }
    return funcionario;
  }
}

// ---- Funções de teste ----

function cadastrarFuncionarios(empresa: Empresa): void {
  empresa.adicionarFuncionario(new Funcionario(101, "Ana Silva", "Desenvolvedora", 6000));
  empresa.adicionarFuncionario(new Funcionario(102, "Bruno Costa", "Designer", 4500));
  empresa.adicionarFuncionario(new Funcionario(103, "Carla Melo", "Gerente de Projetos", 8000));
}

function atualizarSalarioFuncionario(empresa: Empresa): void {
  try {
    empresa.atualizarSalario(102, 5200);
    empresa.atualizarSalario(999, 1000); // matrícula inexistente — deve lançar erro
  } catch (e: unknown) {
    if (e instanceof Error) console.error("Erro:", e.message);
  }
}

function consultarFuncionario(empresa: Empresa): void {
  const f = empresa.consultarFuncionario(101);
  if (f) {
    console.log(`\nDados do funcionário:`);
    console.log(`Matrícula : ${f.matricula}`);
    console.log(`Nome : ${f.nome}`);
    console.log(`Cargo : ${f.cargo}`);
    console.log(`Salário : R$ ${f.salario.toFixed(2)}`);
  }
}

// ---- Execução ----
const empresa = new Empresa();
console.log("=== LAB05 - Gerenciamento de Funcionários ===\n");
cadastrarFuncionarios(empresa);
console.log();
atualizarSalarioFuncionario(empresa);
console.log();
consultarFuncionario(empresa);