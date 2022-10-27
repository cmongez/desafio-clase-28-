class ContenedorMemoria {
  constructor() {
    (this.productos = []), (this.id = 1);
  }

  save(obj) {
    try {
      obj.id = this.id;
      this.productos = [...this.productos, obj];
      this.id++;
    } catch (error) {
      console.log('error en Save');
    }
  }

  getById(id) {
    try {
      const producto = this.getAll();
      const productsById = producto.find((p) => p.id == id);
      return productsById;
    } catch (error) {
      console.log('error en getById');
    }
  }

  getAll() {
    try {
      console.log(JSON.stringify(this.productos));
      return JSON.parse(JSON.stringify(this.productos));
    } catch (error) {
      console.log('error en GetAll');
    }
  }

  update(prod, id) {
    try {
      prod.id = id;
      this.productos[id - 1] = prod;
    } catch (error) {
      console.log(error);
    }
  }

  deleteById(id) {
    try {
      const producto = this.getAll();
      const productsById = producto.filter((p) => p.id != id);
      this.productos = productsById;
    } catch (error) {
      console.log('error en deleteById');
    }
  }
}

export default ContenedorMemoria;
