import React ,{useState} from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {gql} from "apollo-boost";
import Home from "./pages/Home";
import {ApolloProvider} from "@apollo/react-hooks";

const client= new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

function App() {

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
