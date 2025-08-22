class Product {
  constructor(public name: string, public price: number) {}
}

const products: Product[] = [
  new Product("A", 50),
  new Product("B", 120),
  new Product("C", 200)
];

const filtered = products.filter(p => p.price > 100);
filtered.forEach(p => console.log(`${p.name}: ${p.price}`));
