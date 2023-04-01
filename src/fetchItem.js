"use strict";

const AWS = require("aws-sdk");

const fetchItem = async(event) => {
    let item;
    const dynamodb  = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;

    try{
        
        const results = await dynamodb.get({
            TableName: "ItemTableNew",
            Key: {id}
        }).promise();

        item = results.Item;

    }catch (error){
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item)
    };
}

module.exports = {
    handler: fetchItem
}