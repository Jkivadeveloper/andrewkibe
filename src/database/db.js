const { MongoClient } = require('mongodb');

const uri =
  'mongodb+srv://andrewbackend:Projectbackend1@cluster0.ihtzbh4.mongodb.net/?retryWrites=true&w=majority';

let client;

const getDB = () => {
  if (!client) {
    console.log('Creating a new client!');
    client = new MongoClient(uri);
  } else {
    console.log('Reusing the old client');
  }

  const database = client.db('AndrewKibe');
  const contents = database.collection('contents');

  return {
    contents,
  };
};

module.exports = getDB;
