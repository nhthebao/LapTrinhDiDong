export class User {
  private _name: string = "";

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.trim().length === 0) {
      throw new Error("Name cannot be empty");
    }
    this._name = newName;
  }
}
