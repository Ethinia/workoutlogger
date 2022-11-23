/*
import { MongoClient } from 'mongodb';

const agg = [
  {
    '$search': {
      'index': 'default', 
      'text': {
        'query': 'paiva: "2022-11-11"', 
        'path': {
          'wildcard': '*'
        }
      }
    }
  }
];

const client = await MongoClient.connect(
  '',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('').collection('');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
*/


/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:3001/api/wolapp";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { paiva: "2022-11-09" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
return (
    <div>
        
        {result}
    
    </div>
)
*/
