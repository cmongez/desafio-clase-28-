import knex from 'knex';
import config from '../src/config.js';

//------------------------------------------
// productos en MariaDb

try {
  const mariaDbClient = knex(config.mariaDb);

  //Implementar creación de tabla

  await mariaDbClient.schema.dropTableIfExists('articulos');
  await mariaDbClient.schema.createTable('articulos', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.float('price');
    table.string('thumbnail');
  });

  //Inserto elementos a modo ejemplo
  const articulos = [
    {
      title: 'Libro',
      price: 150,
      thumbnail:
        'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-512.png',
    },
    {
      title: 'Libro',
      price: 200,
      thumbnail:
        'https://cdn3.iconfinder.com/data/icons/education-209/64/book-note-paper-school-512.png',
    },
    {
      title: 'Manzana verde',
      price: 10,
      thumbnail:
        'https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png',
    },
  ];

  await mariaDbClient('articulos').insert(articulos);

  console.log('tabla productos en mariaDb creada con éxito');
} catch (error) {
  console.log('Error al crear tabla productos en mariaDb');
  console.log(error);
}

//------------------------------------------
// mensajes en SQLite3
try {
  const sqliteClient = knex(config.sqlite3);

  //Implementar creación de tabla
  await sqliteClient.schema.dropTableIfExists('mensajes');
  await sqliteClient.schema.createTable('mensajes', (table) => {
    table.increments('id').primary();
    table.string('autor').notNullable();
    table.string('hora');
    table.string('texto');
  });

  const mensaje = [
    { autor: 'Base de datos', hora: '00:00', texto: 'Bienvenidos' },
    {
      autor: 'Admin',
      hora: '00:00',
      texto: 'Escribir aqui',
    },
  ];

  await sqliteClient('mensajes').insert(mensaje);

  console.log('tabla mensajes en sqlite3 creada con éxito');
} catch (error) {
  console.log('error al crear tabla mensajes en sqlite3');
  console.log(error);
}
