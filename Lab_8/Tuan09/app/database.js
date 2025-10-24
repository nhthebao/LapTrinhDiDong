import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("todo.db");

export function createTable() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL
    );
  `);
}

export function insertTask(id, name) {
  db.runSync("INSERT OR REPLACE INTO tasks (id, name) VALUES (?, ?)", [id, name]);
}

export function updateTask(id, name) {
  db.runSync("UPDATE tasks SET name = ? WHERE id = ?", [name, id]);
}

export function getTasks() {
  return db.getAllSync("SELECT * FROM tasks");
}

export function clearTasks() {
  db.runSync("DELETE FROM tasks");
}

export default db;
