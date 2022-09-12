const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const { createConnection } = require("typeorm");
import {Users} from './Entities/Users'
const app = express();
import {schema} from './Schema/server'
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema:schema,
      graphiql: true,
    })

  )

const main = async () => {
  await createConnection({
    type:"mysql",
    database:"graphqlcrud",
    username:"root",
    password:"matrix765321",
    logging:true,
    synchronize:false,
    entities:[Users],
  })
};



app.listen(4001, () => {
  console.log("listening on http://localhost:4001");
});

main().catch((err) => {
  console.log("error:", err);
});
