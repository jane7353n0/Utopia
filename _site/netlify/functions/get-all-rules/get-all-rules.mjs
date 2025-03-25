import { MongoClient } from "mongodb";

//var url = require('url');

require('dotenv').config();


const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event, context) => {
  //var query = event.queryStringParameters;

  try {
    const database = (await clientPromise).db(process.env.DB_RULES);
    const collection = database.collection("Traits");
    const results = await collection.aggregate([{$lookup:{
        from: "Subtraits", localField: 'subtraits',foreignField: "_id", as: "subtraits"
    }}]).limit(10).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
}
/*
export const config = {
  path: "/json/:collection/:slug"
}*/

module.exports = { handler }