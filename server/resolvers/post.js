const {gql} = require('apollo-server-express');
const {posts}= require("../temp");


const totalPosts=()=> posts.length;

const allPosts = () => posts;

const newPost=(parent,args,context)=>{

    console.log(args);

    //const {title,description} = args.input;

    const post ={
        id: posts.length++,
        ...args.input

    }

    posts.push(post);
    return post;
}

module.exports = {
    Query: {

        totalPosts,
        allPosts
        
    },
    Mutation: {
        newPost
    }
};
