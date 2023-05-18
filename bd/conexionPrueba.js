// Conexión a la base de datos
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://a26012:ProTacticGDT@cluster0.taoj8jq.mongodb.net/';

// Insertar un documento en la colección "productos"
MongoClient.connect(uri, function(err, client) {
  if (err) {
    console.log('Error al conectarse a la base de datos: ', err);
    return;
  }

  const db = client.db('proTacticPrueba');
  const productosCollection = db.collection('productos');

  const newProduct = {
    nombre: 'Producto 1',
    precio: 10.99,
    categoria: 'Electrónicos'
  };

  productosCollection.insertOne(newProduct, function(err, result) {
    if (err) {
      console.log('Error al insertar el producto: ', err);
      return;
    }

    console.log('Producto insertado correctamente');
    client.close();
  });
});