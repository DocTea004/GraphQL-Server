const {gql} = require('apollo-server-express');

const me=()=> "Dexoangle"

module.exports = {
    Query: {
    
        me
    }
};
