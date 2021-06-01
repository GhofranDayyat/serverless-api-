'use strict' ; 

const People = require('./people-schema')
exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        const {name} = JSON.parse(event.body); // convert body string into json obj

        let updated=await People.update({id},{name});
        
        return {
            statusCode:200,
            body: JSON.stringify([updated])
        }
        
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
   
}