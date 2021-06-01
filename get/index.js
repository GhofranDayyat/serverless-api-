'use strict' ; 

const People = require('./people-schema')
exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let person; 
        if (id) {
            // get a specific record
            person = await People.query('id').eq(id).exec();
            person = person[0];

        } else {
            // get all records
            person = await People.scan().exec();
        }
        
        return {
            statusCode: 200,
            body: JSON.stringify(person)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
   
}