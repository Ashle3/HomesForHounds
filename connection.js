const dotenv = require('dotenv');
dotenv.config();
const {MongoClient} = require('mongodb');

//main function
async function main() {

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        //connect to MongoDB cluster
        await client.connect();

        //make the appropriate db calls
        await listDatabases(client);
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error);