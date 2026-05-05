// Classe que representa um Livro do acervo
class Livro {
  public codigo: number;
  public titulo: string;
  public autor: string;
  public disponivel: boolean;

  constructor(codigo: number, titulo: string, autor: string, disponivel: boolean = true) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = disponivel;
  }
}

// Classe que gerencia o acervo da biblioteca
class Biblioteca {
  private acervo: Livro[] = [];

  // Adiciona um novo livro ao acervo
  public adicionarLivro(livro: Livro): void {
    this.acervo.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado ao acervo.`);
  }

  // Marca o livro como indisponível (emprestado)
  public registrarEmprestimo(codigo: number): void {
    const livro = this.acervo.find(l => l.codigo === codigo);
    if (!livro) {
      throw new Error(`Livro com código ${codigo} não encontrado.`);
    }
    if (!livro.disponivel) {
      throw new Error(`Livro "${livro.titulo}" já está emprestado.`);
    }
    livro.disponivel = false;
    console.log(`Empréstimo do livro "${livro.titulo}" registrado com sucesso.`);
  }

  // Retorna true se disponível, false se não
  public consultarDisponibilidade(codigo: number): boolean {
    const livro = this.acervo.find(l => l.codigo === codigo);
    if (!livro) {
      throw new Error(`Livro com código ${codigo} não encontrado.`);
    }
    return livro.disponivel;
  }
}

// ---- Funções de teste ----

function cadastrarLivros(biblioteca: Biblioteca): void {
  biblioteca.adicionarLivro(new Livro(1, "Clean Code", "Robert C. Martin"));
  biblioteca.adicionarLivro(new Livro(2, "The Pragmatic Programmer", "Andrew Hunt"));
  biblioteca.adicionarLivro(new Livro(3, "Design Patterns", "Gang of Four"));
}

function registrarEmprestimo(biblioteca: Biblioteca): void {
  try {
    biblioteca.registrarEmprestimo(1);
    biblioteca.registrarEmprestimo(1); // já emprestado — deve lançar erro
  } catch (e: unknown) {
    if (e instanceof Error) console.error("Erro:", e.message);
  }
}

function consultarDisponibilidade(biblioteca: Biblioteca): void {
  try {
    const codigos: number[] = [1, 2, 99];
    for (const cod of codigos) {
      const disponivel: boolean = biblioteca.consultarDisponibilidade(cod);
      console.log(`Livro ${cod}: ${disponivel ? "Disponível" : "Indisponível"}`);
    }
  } catch (e: unknown) {
    if (e instanceof Error) console.error("Erro:", e.message);
  }
}

// ---- Execução ----
const biblioteca = new Biblioteca();
console.log("=== LAB04 - Gerenciamento de Biblioteca ===\n");
cadastrarLivros(biblioteca);
console.log();
registrarEmprestimo(biblioteca);
console.log();
consultarDisponibilidade(biblioteca);