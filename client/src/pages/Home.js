import React ,{useState} from 'react';
import ApolloClient from 'apollo-boost';
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";

const GET_ALL_POSTS=gql`
    {
    allPosts{
      id
      title
      description
    }
    }
`


function Home() {

  const {data,loading,error} = useQuery(GET_ALL_POSTS);

  if(loading) return(
      <div className="p-5">
          Loading.....
      </div>
  )

  return (
    <div className="container">
      <div className="row p-5">
        {
          data.allPosts.map(p=> (
            <div className="col-md-4" key={p.id}>
            <div className="card">
            <div className="card-body">
            <div className="card-title">
            <h4>{p.title} </h4>
            </div>
            <div className="card-text">
            {p.description}
            </div>
            </div>
            </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Home;
