const express = require("express");
const {ApolloServer} = require('apollo-server-express');
const http= require('http');
const {fileLoader, mergeTypes, mergeResolvers} = require("merge-graphql-schemas");
const path = require('path');
const  Mongoose  = require("mongoose");

require('dotenv').config()

const app = express();

//resolvers=> Resolve the query

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './typeDefs')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname,'./resolvers')));

const db = require("./config/keys").MongoURI;

Mongoose.connect(db,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(()=>console.log("Database Connected Successfully !!!!!!"))
.catch(error=>console.log(error))

//graphql server

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

//apply middleware method which connects ApolloServer to a specific HTTP framework ie: express

apolloServer.applyMiddleware({app});

const httpserver = http.createServer(app);

//Rest Endpoint
app.get('/rest', function(req,res){
    res.json({
        data:'You hitted the rest endpoint'
    })
})


app.listen(process.env.PORT,function(){
    console.log(`Server started at http://localhost:${process.env.PORT}`);
    console.log(`Graphql server is ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`);
    
})