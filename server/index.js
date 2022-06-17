require('dotenv').config();
const express = require('express');
const colors = require('colors');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const connectDB = require('./config/db.js');
const port = process.env.PORT || 8000;

const app = express();

// Connect to database
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(port, console.log(`Server running on port ${port}`));
