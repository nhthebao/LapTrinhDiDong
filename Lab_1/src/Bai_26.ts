class Product {
  constructor(public name: string, public price: number) {}
}

class Order {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getTotal(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}
