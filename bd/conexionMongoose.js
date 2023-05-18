
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://a26012:PROTacticGDT@cluster0.taoj8jq.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db('proTacticDatabaseTest1');
    console.log('Conexión exitosa a MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar a MongoDB Atlas', error);
  }
}

const getDB = () => {
  return db;
};

module.exports = {
  connectDB,
  getDB,
};















// async function connect() {
//   try {
//     await client.connect();
//     console.log('Conexión exitosa a MongoDB Atlas');
//     //const results = await searchDocuments();
//     //return results;
//   } catch (error) {
//     console.error('Error al conectar a MongoDB Atlas', error);
//   }
// }
// async function searchDocuments() {

//   try {
//     const db = client.db('proTacticDatabaseTest1');
//     const collection = db.collection('exercises');
//     const query = { _intensidad : 'media' };
//     const result = await collection.find(query).toArray();
//     console.log('Resultados de la búsqueda:', result);
//     return result;
//   } catch (error) {
//     console.error('Error al buscar documentos', error);
//   } finally {
//     client.close();
//   }
// }

//connect();
// -------------------------------------------------------
