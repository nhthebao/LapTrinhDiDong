export class User {
  private name: string = "";

  get Name(): string {
    return this.name;
  }

  set Name(newName: string) {
    if (newName.trim().length === 0) {
      throw new Error("Name cannot be empty");
    }
    this.name = newName;
  }
}
