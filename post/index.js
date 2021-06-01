'use strict';

const uuid = require('uuid').v4;

const People = require('./people-schema')

exports.handler = async (event) => {
    try {
        const id = uuid();
        const {name} = JSON.parse(event.body); // convert body string into json obj
        let newRecored = new People({ id, name })
        let saveRecored = await newRecored.save();
        console.log(saveRecored);
        return {
            statusCode: 201,
            body: JSON.stringify(saveRecored)
        }
    } catch (error) {
        return {
            statusCode: 500,
            error: error.message
        }
    }
}