import initialProducts from  "./products.json" 

class ListaDeCosas {
  name: string;
  cosas: any[] = [];
  constructor(name: string) {
    // nombre de esta lista
    this.name = name;
  }
  add(nuevaCosa) {
    this.cosas.push(nuevaCosa);
  }
  getCosas() {
    return this.cosas;
  }
}





class Product {
  name: string;
  price: number;
  id: number;
  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {
  products:Product[]
  constructor(name, ){


    super(name)
    this.products=[]
    initialProducts.forEach((e=>this.addProduct(e)))
    
  }
   addProduct(product: Product ):void{
   
    if(!this.products.some((e=>e.id===product.id))){
    this.products.push(product)
    this.add(product)

}
    

}
 getProduct(id: number): Product {
  return this.products.find(e=>e.id===id)
  }

  removeProduct(id: number): void {
    this.products= this.products.filter(e=>e.id!==id)
    this.cosas = this.cosas.filter(e => e.id !== id);
  }

  getSortedByPrice(order: "asc" | "desc"): Product[] {
  if (order === "asc") {
    return this.products.sort((a, b) => a.price - b.price);
  } else {
    return this.products.sort((a, b) => b.price - a.price);
  }
}

  }


export { ListaDeProductos, Product };

 
  

