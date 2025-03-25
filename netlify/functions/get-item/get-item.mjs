// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
import { MongoClient } from "mongodb";

//var url = require('url');

require('dotenv').config();


const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event, context) => {
  var query = event.queryStringParameters;

  try {
    const database = (await clientPromise).db(process.env.DB_RULES);
    const collection = database.collection(process.env.COLLECTION_SPELLS);
    const results = await collection.find({"slug": query.slug }).limit(10).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify((query.collection == "Spells") ? results.map(item => {
        return {
          'title': item.title,
          'url': `rules/spells/${item.slug}`,
          'content': item.content,
          'source': item.source,
          'meta': {
            'category': {"label":'Category', "value":item.category, 'size':'md'},
            'stamina': {"label":'Stamina', "value":Object.keys(item.stamina).map(key => {
                    return `${(key != "flex" || item.stamina > 0) ? item.stamina[key] : ''}${(key == "flex") ? X : ''}`;
                }).join(" + "), 'size':'sm'},
            'artistry': {"label":'Artistry', "value":item.artistry.join(", "), 'size':'lg'},
            'duration': {"label":"Duration", "value":`${(item.duration.type == "Duration") ? Object.values(item.duration.time).join(" ") : item.duration.type }${ item.duration.focus ? " of Focus" : ""}${ item.duration.trigger ? " when triggered" : ""}`, 'size':'md'},
            'range':{"label":'Range',"value":(item.range.type == "Touch") ? item.range.type : [item.range.range.toString(), "meters"].join(" "), 'size':'sm'},
            'aoe':{"label":'Area of Effect',"value":item.aoe.label, 'size':'lg'}
          }
        }
      }) : results),
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