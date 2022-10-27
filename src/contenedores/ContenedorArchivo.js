import { promises as fs } from 'fs';

let array = [];

class ContenedorArchivo {
  constructor() {
    this.nombreArchivo = 'archivos';
  }
  async getById(id) {
    try {
      const producto = await this.getAll();
      const productsById = producto.find((p) => p.id === id);
      return productsById;
    } catch (error) {
      console.log('error en getById');
    }
  }
  async save(obj) {
    try {
      array = await this.getAll();
      array = [...array, obj];
      await fs.writeFile(
        './' + this.nombreArchivo + '.txt',
        JSON.stringify(array) + '\n'
      );
    } catch (error) {
      console.log('error en Save');
    }
  }

  async getAll() {
    try {
      const productos = await fs.readFile(
        './' + this.nombreArchivo + '.txt',
        'utf8'
      );
      return JSON.parse(productos);
    } catch (error) {
      console.log('error en GetAll');
    }
  }

  async deleteById(id) {
    try {
      const producto = await this.getAll();
      const productsById = producto.filter((p) => p.id != id);
      await fs.writeFile(
        './' + this.nombreArchivo + '.txt',
        JSON.stringify(productsById)
      );
    } catch (error) {
      console.log('error en deleteById');
    }
  }

  async deleteAll() {
    array = [];
    const productos = await fs.writeFile(
      './' + this.nombreArchivo + '.txt',
      JSON.stringify(array)
    );
  }
}

export default ContenedorArchivo;
