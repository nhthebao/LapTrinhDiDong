class Box<T> {
  private value!: T;

  set(value: T): void {
    this.value = value;
  }

  get(): T {
    return this.value;
  }
}
