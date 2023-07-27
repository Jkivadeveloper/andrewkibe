const { ObjectId } = require('mongodb');
const getDB = require('./db');

const getAllContents = async () => {
  return await getDB().contents.find().toArray();
};

const getContent = async (id) => {
  return await getDB().contents.findOne({ _id: new ObjectId(id) });
};

module.exports = {
  getAllContents,
  getContent,
};
