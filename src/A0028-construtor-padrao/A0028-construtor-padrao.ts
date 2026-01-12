// Singleton - GoF | Factory Method - GoF
export class Database {
  private static database: Database;

  private host;
  private user;
  private password;

  private constructor(host: string, user: string, password: string) {
    this.host = host;
    this.user = user;
    this.password = password;
  }

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada.');
      return Database.database;
    }
    console.log('Criando nova instância.');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();
const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

console.log(db1 === db2);
