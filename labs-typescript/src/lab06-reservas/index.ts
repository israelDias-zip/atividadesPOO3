// Classe que representa uma Reserva
class Reserva {
  public numeroQuarto: number;
  public nomeHospede: string;
  public dataEntrada: Date;
  public dataSaida: Date;

  constructor(
    numeroQuarto: number,
    nomeHospede: string,
    dataEntrada: Date,
    dataSaida: Date
  ) {
    this.numeroQuarto = numeroQuarto;
    this.nomeHospede = nomeHospede;
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
  }
}

// Classe que gerencia as reservas do hotel
class Hotel {
  private reservas: Reserva[] = [];

  // Registra uma nova reserva
  public registrarReserva(reserva: Reserva): void {
    const existente = this.reservas.find(r => r.numeroQuarto === reserva.numeroQuarto);
    if (existente) {
      throw new Error(`Quarto ${reserva.numeroQuarto} já está reservado.`);
    }
    this.reservas.push(reserva);
    console.log(`Reserva do quarto ${reserva.numeroQuarto} para "${reserva.nomeHospede}" registrada.`);
  }

  // Remove a reserva do quarto especificado
  public cancelarReserva(numeroQuarto: number): void {
    const index = this.reservas.findIndex(r => r.numeroQuarto === numeroQuarto);
    if (index === -1) {
      throw new Error(`Nenhuma reserva encontrada para o quarto ${numeroQuarto}.`);
    }
    const cancelada = this.reservas.splice(index, 1)[0];
    console.log(`Reserva do quarto ${cancelada.numeroQuarto} cancelada com sucesso.`);
  }

  // Retorna "Reservado" ou "Disponível"
  public consultarStatusQuarto(numeroQuarto: number): string {
    const reserva = this.reservas.find(r => r.numeroQuarto === numeroQuarto);
    return reserva ? "Reservado" : "Disponível";
  }
}

// ---- Funções de teste ----

function registrarReservas(hotel: Hotel): void {
  try {
    hotel.registrarReserva(new Reserva(101, "João Pereira", new Date("2025-06-01"), new Date("2025-06-05")));
    hotel.registrarReserva(new Reserva(202, "Maria Souza", new Date("2025-06-03"), new Date("2025-06-07")));
    hotel.registrarReserva(new Reserva(101, "Carlos Lima", new Date("2025-06-08"), new Date("2025-06-10"))); // duplicado — erro
  } catch (e: unknown) {
    if (e instanceof Error) console.error("Erro:", e.message);
  }
}

function cancelarReserva(hotel: Hotel): void {
  try {
    hotel.cancelarReserva(101);
    hotel.cancelarReserva(999); // inexistente — erro
  } catch (e: unknown) {
    if (e instanceof Error) console.error("Erro:", e.message);
  }
}

function consultarStatus(hotel: Hotel): void {
  const quartos: number[] = [101, 202, 303];
  console.log("\nStatus dos quartos:");
  quartos.forEach(q => {
    console.log(`  Quarto ${q}: ${hotel.consultarStatusQuarto(q)}`);
  });
}

// ---- Execução ----
const hotel = new Hotel();
console.log("=== LAB06 - Sistema de Reservas de Hotel ===\n");
registrarReservas(hotel);
console.log();
cancelarReserva(hotel);
console.log();
consultarStatus(hotel);