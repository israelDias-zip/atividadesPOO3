// Tipos permitidos para o status da tarefa
type StatusTarefa = "Pendente" | "Em Andamento" | "Concluída";

// Classe que representa uma Tarefa
class Tarefa {
  public id: number;
  public descricao: string;
  public status: StatusTarefa;
  public projeto: string;

  constructor(id: number, descricao: string, status: StatusTarefa, projeto: string) {
    this.id = id;
    this.descricao = descricao;
    this.status = status;
    this.projeto = projeto;
  }
}

// Classe que gerencia a lista de tarefas
class GestorTarefas {
  private tarefas: Tarefa[] = [];

  // Adiciona uma nova tarefa
  public adicionarTarefa(tarefa: Tarefa): void {
    this.tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa.descricao}" adicionada ao projeto "${tarefa.projeto}".`);
  }

  // Atualiza o status de uma tarefa pelo ID
  public atualizarStatus(id: number, status: StatusTarefa): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (!tarefa) {
      throw new Error(`Tarefa com ID ${id} não encontrada.`);
    }
    tarefa.status = status;
    console.log(`Tarefa ${id} atualizada para "${status}".`);
  }

  // Retorna todas as tarefas de um projeto específico
  public consultarTarefasPorProjeto(projeto: string): Tarefa[] {
    const resultado: Tarefa[] = this.tarefas.filter(t => t.projeto === projeto);
    if (resultado.length === 0) {
      console.log(`Nenhuma tarefa encontrada para o projeto "${projeto}".`);
    }
    return resultado;
  }
}

// ---- Funções de teste ----

function adicionarTarefas(gestor: GestorTarefas): void {
  gestor.adicionarTarefa(new Tarefa(1, "Criar wireframes", "Pendente", "App Mobile"));
  gestor.adicionarTarefa(new Tarefa(2, "Desenvolver API", "Em Andamento", "App Mobile"));
  gestor.adicionarTarefa(new Tarefa(3, "Escrever testes", "Pendente", "App Mobile"));
  gestor.adicionarTarefa(new Tarefa(4, "Deploy produção", "Pendente", "Backend Web"));
}

function atualizarStatusTarefa(gestor: GestorTarefas): void {
  try {
    gestor.atualizarStatus(1, "Em Andamento");
    gestor.atualizarStatus(99, "Concluída"); // ID inexistente — deve lançar erro
  } catch (e: unknown) {
    if (e instanceof Error) console.error("Erro:", e.message);
  }
}

function consultarTarefasPorProjeto(gestor: GestorTarefas): void {
  const projeto: string = "App Mobile";
  const tarefas: Tarefa[] = gestor.consultarTarefasPorProjeto(projeto);
  console.log(`\nTarefas do projeto "${projeto}":`);
  tarefas.forEach(t => {
    console.log(`  [${t.id}] ${t.descricao} — ${t.status}`);
  });
}

// ---- Execução ----
const gestor = new GestorTarefas();
console.log("=== LAB07 - Gestão de Tarefas ===\n");
adicionarTarefas(gestor);
console.log();
atualizarStatusTarefa(gestor);
console.log();
consultarTarefasPorProjeto(gestor);