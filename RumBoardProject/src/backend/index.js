const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://rumboard:rumboard202200682@rumboardcluster.iewnp.mongodb.net/RumBoardCluster?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('Connected to mongo instace');
  client.close();
});
