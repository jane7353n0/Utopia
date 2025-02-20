// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);
const clientPromise = mongoClient.connect();

const db = "Rules";
const col = "Traits";

const handler = async (event) => {
  try {
    const database = (await clientPromise).db(db);
    const collection = database.collection(col);
    const results = await collection.find({}).limit(10).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
/*
export default (request, context) => {
  try {
    const url = new URL(request.url)
    const subject = url.searchParams.get('name') || 'World'

    return new Response(`Hello ${subject}`)
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}
*/