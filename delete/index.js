'use strict' ; 

const People = require('./people-schema')
exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let deleted ;
        deleted=await People.delete({id});
        
        return {
            statusCode:200,
            body: JSON.stringify({})
        }
        
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
   
}